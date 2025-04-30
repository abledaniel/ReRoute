"use client";
import React, { useEffect, useState, useRef, useCallback } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { useJsApiLoader } from "@react-google-maps/api";
import { getStopsByRoute } from '@/lib/supabase';
import { Route, Stop, Vehicle, TransitlandVehicle } from '@/types/route';
import RouteMap from '@/components/routemap';
import StopsList from '@/components/stops';
import VehiclesList from '@/components/vehicles';

const RoutePage = () => {
  const params = useParams();
  const routeId = params?.routeid as string;
  
  const [route, setRoute] = useState<Route | null>(null);
  const [stopsDirection0, setStopsDirection0] = useState<Stop[]>([]);
  const [stopsDirection1, setStopsDirection1] = useState<Stop[]>([]);
  const [activeDirection, setActiveDirection] = useState<number>(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [mapCenter, setMapCenter] = useState({ lat: 33.878840, lng: -117.884973 });
  const [routePath, setRoutePath] = useState<google.maps.LatLngLiteral[]>([]);
  const mapRef = useRef<google.maps.Map | null>(null);
  const [selectedStop, setSelectedStop] = useState<Stop | null>(null);
  
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);
  const [selectedVehicle, setSelectedVehicle] = useState<Vehicle | null>(null);
  const [lastUpdated, setLastUpdated] = useState<string>("Never");

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!,
    libraries: ["places", "maps"],
  });

  const fetchVehiclePositions = useCallback(async () => {
    try {
      const response = await fetch(`https://reroute-server-sqz6.onrender.com/api/vehicle-positions/${routeId}`);
      
      if (!response.ok) {
        throw new Error(`Failed to fetch vehicle data: ${response.status}`);
      }
      
      const data = await response.json();
      console.log('Raw vehicle data:', data);
      
      const routeVehicles = (data.vehicles || []).map((vehicle: TransitlandVehicle) => ({
        vehicle_id: vehicle.trip_id,
        trip_id: vehicle.trip_id,
        route_id: vehicle.route_id,
        current_status: 'IN_TRANSIT',
        current_stop_sequence: 0,
        stop_id: '',
        current_position: {
          lat: vehicle.latitude,
          lon: vehicle.longitude
        },
        timestamp: new Date(vehicle.timestamp * 1000).toISOString(),
        congestion_level: 0,
        speed: 0
      }));
      
      console.log('Transformed vehicles:', routeVehicles);
      setVehicles(routeVehicles);
      
      const now = new Date();
      setLastUpdated(now.toLocaleTimeString());
      
      console.log(`Updated ${routeVehicles.length} vehicles for route ${routeId}`);
    } catch (err) {
      console.error('Error fetching vehicle positions:', err);
    }
  }, [routeId]);

  useEffect(() => {
    const fetchRouteData = async () => {
      try {
        setLoading(true);
        setError(null);

        const apiKey = process.env.NEXT_PUBLIC_TRANSIT_LAND_API_KEY || '4i0HhaRLe0jBSotDmxETH05X2iwrgNcJ';
        
        const formattedRouteId = routeId.startsWith('r-9qh0-') ? routeId : `r-9qh0-${routeId}`;
        
        const response = await fetch(
          `https://transit.land/api/v2/rest/routes/${formattedRouteId}?api_key=${apiKey}`
        );

        if (!response.ok) {
          console.warn(`Warning: Failed to fetch route details: ${response.status} ${response.statusText}`);
          // Continue with available data instead of throwing error
        }

        const data = await response.json();
        console.log('Route data:', data);

        if (data.routes && data.routes.length > 0) {
          const routeData = data.routes[0];
          setRoute(routeData);

          if (routeData.geometry && routeData.geometry.coordinates) {
            const coordinates = routeData.geometry.coordinates[0];
            const path = coordinates.map((coord: number[]) => ({
              lat: coord[1],
              lng: coord[0]
            }));
            setRoutePath(path);

            if (path.length > 0) {
              setMapCenter(path[0]);
            }
          }

          try {
            if (routeData.route_stops && routeData.route_stops.length > 0) {
              const stopsDirection0Response = await getStopsByRoute(routeId, 0);
              const stopsDirection1Response = await getStopsByRoute(routeId, 1);
              
              const supabaseStopsDirection0 = new Map(
                stopsDirection0Response.map((stop: Stop) => [stop.stop_id, stop])
              );
              const supabaseStopsDirection1 = new Map(
                stopsDirection1Response.map((stop: Stop) => [stop.stop_id, stop])
              );
              
              const processedStopsDirection0: Stop[] = [];
              const processedStopsDirection1: Stop[] = [];
              
              routeData.route_stops.forEach((routeStop: { stop: { stop_id: string; stop_name: string; geometry: { coordinates: number[] } } }) => {
                const stop = routeStop.stop;
                const stopId = stop.stop_id;
                
                const supabaseStop0 = supabaseStopsDirection0.get(stopId) as Stop | undefined;
                const supabaseStop1 = supabaseStopsDirection1.get(stopId) as Stop | undefined;
                
                const processedStop = {
                  stop_id: stopId,
                  stop_name: stop.stop_name,
                  stop_lat: Number(stop.geometry.coordinates[1]),
                  stop_lon: Number(stop.geometry.coordinates[0]),
                  next_departure_time: supabaseStop0?.next_departure_time || supabaseStop1?.next_departure_time,
                  route_stop_order: supabaseStop0?.route_stop_order || supabaseStop1?.route_stop_order || 0
                };
                
                if (supabaseStopsDirection0.has(stopId)) {
                  processedStopsDirection0.push(processedStop);
                }
                
                if (supabaseStopsDirection1.has(stopId)) {
                  processedStopsDirection1.push(processedStop);
                }
              });
              
              processedStopsDirection0.sort((a, b) => (a.route_stop_order || 0) - (b.route_stop_order || 0));
              processedStopsDirection1.sort((a, b) => (a.route_stop_order || 0) - (b.route_stop_order || 0));
              
              setStopsDirection0(processedStopsDirection0);
              setStopsDirection1(processedStopsDirection1);
            } else {
              const stopsDirection0Response = await getStopsByRoute(routeId, 0);
              const stopsDirection1Response = await getStopsByRoute(routeId, 1);
              
              setStopsDirection0(stopsDirection0Response);
              setStopsDirection1(stopsDirection1Response);
            }
          } catch (stopsError) {
            console.warn('Warning: Failed to fetch stops data:', stopsError);
            // Continue without stops data
          }
        } else {
          console.warn('Warning: Route not found in Transit.land API');
          // Try to fetch stops data anyway
          try {
            const stopsDirection0Response = await getStopsByRoute(routeId, 0);
            const stopsDirection1Response = await getStopsByRoute(routeId, 1);
            
            setStopsDirection0(stopsDirection0Response);
            setStopsDirection1(stopsDirection1Response);
          } catch (stopsError) {
            console.warn('Warning: Failed to fetch stops data:', stopsError);
          }
        }
      } catch (err) {
        console.warn('Warning: Error in route data fetch:', err);
        // Don't set error state, just log the warning
      } finally {
        setLoading(false);
      }
    };

    if (routeId) {
      fetchRouteData();
    }
  }, [routeId]);

  useEffect(() => {
    fetchVehiclePositions();
    
    const intervalId = setInterval(fetchVehiclePositions, 30000);
    
    return () => clearInterval(intervalId);
  }, [fetchVehiclePositions]);

  const handleMapLoad = (map: google.maps.Map) => {
    mapRef.current = map;
  };

  if (!isLoaded) {
    return (
      <div style={{ 
        minHeight: "100vh", 
        display: "flex", 
        justifyContent: "center", 
        alignItems: "center",
        background: "linear-gradient(to right, #1e3c72, #2a5298)", 
        color: "white"
      }}>
        Loading Maps...
      </div>
    );
  }

  if (loading) {
    return (
      <div style={{ 
        minHeight: "100vh", 
        display: "flex", 
        justifyContent: "center", 
        alignItems: "center",
        background: "linear-gradient(to right, #1e3c72, #2a5298)", 
        color: "white"
      }}>
        Loading Route Data...
      </div>
    );
  }

  return (
    <div style={{ 
      minHeight: "100vh", 
      background: "linear-gradient(to right, #1e3c72, #2a5298)", 
      padding: "16px",
      color: "white"
    }}>
      <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
        <div style={{ display: "flex", alignItems: "center", marginBottom: "24px" }}>
          <Link href="/" style={{ textDecoration: "none", color: "white" }}>
            <h1 style={{ fontSize: "32px", fontWeight: "bold" }}>REROUTE</h1>
          </Link>
          <div style={{ marginLeft: "auto" }}>
            <Link href="/faq" style={{ textDecoration: "none" }}>
              <button 
                style={{ 
                  background: "rgba(255, 255, 255, 0.1)",
                  border: "none",
                  color: "#fff",
                  padding: "8px 16px",
                  borderRadius: "6px",
                  cursor: "pointer",
                  fontSize: "14px",
                  transition: "background 0.2s"
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.background = "rgba(255, 255, 255, 0.2)";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.background = "rgba(255, 255, 255, 0.1)";
                }}
              >
                FAQ
              </button>
            </Link>
          </div>
        </div>

        {error && (
          <div style={{
            padding: "12px",
            background: "rgba(255, 0, 0, 0.1)",
            borderRadius: "6px",
            marginBottom: "16px",
            color: "#ff6b6b"
          }}>
            <p>Some information may be unavailable: {error}</p>
          </div>
        )}

        <div style={{ 
          display: "flex", 
          gap: "24px", 
          height: "calc(100vh - 100px)"
        }}>
          <div style={{ 
            flex: "1.5", 
            position: "relative",
            display: "flex",
            flexDirection: "column"
          }}>
            <div style={{ 
              position: "absolute", 
              top: "0", 
              left: "0", 
              right: "0",
              padding: "16px",
              background: "rgba(0, 0, 0, 0.5)",
              borderRadius: "10px",
              marginBottom: "16px",
              zIndex: "1"
            }}>
              <h1 style={{ fontSize: "24px", marginBottom: "8px" }}>
                {route?.route_long_name || `Route ${routeId}`}
              </h1>
              <p style={{ fontSize: "14px", color: "#4ade80", fontWeight: "bold" }}>
                Last Updated: {lastUpdated}
              </p>
            </div>
            
            <RouteMap
              route={route!}
              mapCenter={mapCenter}
              routePath={routePath}
              activeDirection={activeDirection}
              stopsDirection0={stopsDirection0}
              stopsDirection1={stopsDirection1}
              vehicles={vehicles}
              selectedStop={selectedStop}
              selectedVehicle={selectedVehicle}
              onMapLoad={handleMapLoad}
              onStopSelect={setSelectedStop}
              onVehicleSelect={setSelectedVehicle}
              onStopClose={() => setSelectedStop(null)}
              onVehicleClose={() => setSelectedVehicle(null)}
            />
          </div>

          <div style={{ 
            flex: "1",
            display: "flex",
            flexDirection: "column",
            overflowY: "auto",
            maxHeight: "calc(100vh - 100px)",
            padding: "16px",
            background: "rgba(0, 0, 0, 0.2)",
            borderRadius: "10px"
          }}>
            <div style={{ marginBottom: "24px" }}>
              <VehiclesList
                vehicles={vehicles}
                onVehicleSelect={setSelectedVehicle}
                onRefresh={fetchVehiclePositions}
              />
            </div>

            <div>
              <StopsList
                activeDirection={activeDirection}
                stopsDirection0={stopsDirection0}
                stopsDirection1={stopsDirection1}
                onStopSelect={setSelectedStop}
                onDirectionChange={setActiveDirection}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoutePage;