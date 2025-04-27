"use client";
import React, { useEffect, useState, useRef, useCallback } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { useJsApiLoader } from "@react-google-maps/api";
import { getStopsByRoute } from '@/lib/supabase';
import { Route, Stop, Vehicle } from '@/types/route';
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
      const response = await fetch(`http://127.0.0.1:5000/api/vehicle-positions/${routeId}`);
      
      if (!response.ok) {
        throw new Error(`Failed to fetch vehicle data: ${response.status}`);
      }
      
      const data = await response.json();
      
      const routeVehicles = data.vehicles || [];
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
          throw new Error(`Failed to fetch route details: ${response.status} ${response.statusText}`);
        }

        const data = await response.json();
        console.log('Route data:', data);

        if (data.routes && data.routes.length > 0) {
          const routeData = data.routes[0];
          setRoute(routeData);

          if (routeData.geometry && routeData.geometry.coordinates) {
            const path = routeData.geometry.coordinates[0].map((coord: number[]) => ({
              lat: coord[1],
              lng: coord[0]
            }));
            setRoutePath(path);

            if (path.length > 0) {
              setMapCenter(path[0]);
            }
          }

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
              
              const processedStop = {
                stop_id: stopId,
                stop_name: stop.stop_name,
                stop_lat: Number(stop.geometry.coordinates[1]),
                stop_lon: Number(stop.geometry.coordinates[0])
              };
              
              if (supabaseStopsDirection0.has(stopId)) {
                processedStopsDirection0.push(processedStop);
              }
              
              if (supabaseStopsDirection1.has(stopId)) {
                processedStopsDirection1.push(processedStop);
              }
            });
            
            setStopsDirection0(processedStopsDirection0);
            setStopsDirection1(processedStopsDirection1);
          } else {
            const stopsDirection0Response = await getStopsByRoute(routeId, 0);
            const stopsDirection1Response = await getStopsByRoute(routeId, 1);
            
            setStopsDirection0(stopsDirection0Response);
            setStopsDirection1(stopsDirection1Response);
          }
        } else {
          throw new Error('Route not found');
        }
      } catch (err) {
        console.error('Error fetching route details:', err);
        setError(err instanceof Error ? err.message : 'Failed to fetch route details');
      } finally {
        setLoading(false);
      }
    };

    fetchRouteData();
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

  if (error) {
    return (
      <div style={{ 
        minHeight: "100vh", 
        display: "flex", 
        flexDirection: "column", 
        justifyContent: "center", 
        alignItems: "center",
        background: "linear-gradient(to right, #1e3c72, #2a5298)", 
        color: "white", 
        padding: "20px",
        textAlign: "center"
      }}>
        <h2>Error Loading Route</h2>
        <p>{error}</p>
        <Link href="/" style={{ color: "#4ade80", marginTop: "20px" }}>
          Return to Home
            </Link>
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
              <p style={{ fontSize: "14px", color: "#93c5fd" }}>
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
            gap: "24px",
              overflowY: "auto"
            }}>
            <VehiclesList
              vehicles={vehicles}
              onVehicleSelect={setSelectedVehicle}
              onRefresh={fetchVehiclePositions}
            />

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
  );
};

export default RoutePage;
