"use client";
import React, { useEffect, useState, useRef, useCallback } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { useJsApiLoader } from "@react-google-maps/api";
import { Route, Stop, Vehicle, TransitlandVehicle } from '@/types/route';
import RouteMap from '@/components/routemap';
import StopsList from '@/components/stops';
import VehiclesList from '@/components/vehicles';
import { createClient } from '@/utils/supabase/client';

const RoutePage = () => {
  const params = useParams();
  const routeId = params?.routeid as string;
  
  const [route, setRoute] = useState<Route | null>(null);
  /* eslint-disable @typescript-eslint/no-unused-vars */
  const [stopsDirection0, setStopsDirection0] = useState<Stop[]>([]);
  const [stopsDirection1, setStopsDirection1] = useState<Stop[]>([]);
  const [activeDirection, setActiveDirection] = useState<number>(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [mapCenter, setMapCenter] = useState({ lat: 33.878840, lng: -117.884973 });
  const [routePath, setRoutePath] = useState<google.maps.LatLngLiteral[]>([]);
  /* eslint-enable @typescript-eslint/no-unused-vars */
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
      console.log('Raw vehicle data:', data);
      
      // Transform the vehicles to match our expected format
      const routeVehicles = (data.vehicles || []).map((vehicleData: TransitlandVehicle) => ({
        vehicle_id: vehicleData.trip_id,
        trip_id: vehicleData.trip_id,
        route_id: vehicleData.route_id,
        current_status: 'IN_TRANSIT',
        current_stop_sequence: 0,
        stop_id: '',
        current_position: {
          lat: vehicleData.latitude,
          lon: vehicleData.longitude
        },
        timestamp: new Date(vehicleData.timestamp * 1000).toISOString(),
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
    const fetchRouteDetails = async () => {
      try {
        // Fetch route details from Supabase
        const { data: routeData, error: routeError } = await createClient()
          .from('routes')
          .select('*')
          .eq('route_id', routeId)
          .single();

        if (routeError) throw routeError;
        setRoute(routeData);

        // Fetch real-time vehicle data from Transit.land API
        const response = await fetch(`https://transit.land/api/v2/rest/vehicles?route_id=${routeId}`);
        if (!response.ok) throw new Error('Failed to fetch vehicle data');
        
        const data = await response.json();
        console.log('Raw vehicle data:', data);
        
        // Transform the vehicles to match our expected format
        const routeVehicles = (data.vehicles || []).map((vehicleData: TransitlandVehicle) => ({
          vehicle_id: vehicleData.trip_id,
          trip_id: vehicleData.trip_id,
          route_id: vehicleData.route_id,
          current_status: 'IN_TRANSIT',
          current_stop_sequence: 0,
          stop_id: '',
          current_position: {
            lat: vehicleData.latitude,
            lon: vehicleData.longitude
          },
          timestamp: new Date(vehicleData.timestamp * 1000).toISOString(),
          congestion_level: 0,
          speed: 0
        }));
        
        setVehicles(routeVehicles);
      } catch (error) {
        console.error('Error fetching route details:', error);
        setError('Failed to load route details');
      }
    };

    if (routeId) {
      fetchRouteDetails();
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
