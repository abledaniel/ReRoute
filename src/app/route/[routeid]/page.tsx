"use client";
import React, { useEffect, useState, useCallback } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { useJsApiLoader } from "@react-google-maps/api";
import { getStopsByRoute } from '@/lib/supabase';
import { Route, Stop, Vehicle, TransitlandVehicle } from '@/types/route';
import RouteMap from '@/components/routemap';
import StopsList from '@/components/stops';
import VehiclesList from '@/components/vehicles';

const MAPS_LIBRARIES: ("places" | "maps")[] = ["places", "maps"];

const RoutePage = () => {
  const params = useParams();
  const routeId = params?.routeid as string;

  const [route, setRoute] = useState<Route | null>(null);
  const [stopsDirection0, setStopsDirection0] = useState<Stop[]>([]);
  const [stopsDirection1, setStopsDirection1] = useState<Stop[]>([]);
  const [activeDirection, setActiveDirection] = useState<number>(0);
  const [loading, setLoading] = useState(true);
  const [mapCenter, setMapCenter] = useState({ lat: 33.878840, lng: -117.884973 });
  const [routePath, setRoutePath] = useState<google.maps.LatLngLiteral[]>([]);
  const [selectedStop, setSelectedStop] = useState<Stop | null>(null);
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);
  const [selectedVehicle, setSelectedVehicle] = useState<Vehicle | null>(null);
  const [lastUpdated, setLastUpdated] = useState<string>("Never");

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!,
    libraries: MAPS_LIBRARIES,
  });

  const fetchVehiclePositions = useCallback(async () => {
    try {
      const response = await fetch(`https://reroute-server-sqz6.onrender.com/api/vehicle-positions/${routeId}`);
      if (!response.ok) return;

      const data = await response.json();
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

      setVehicles(routeVehicles);
      setLastUpdated(new Date().toLocaleTimeString());
    } catch {
      // vehicle positions are non-critical, fail silently
    }
  }, [routeId]);

  useEffect(() => {
    const fetchRouteData = async () => {
      try {
        setLoading(true);

        const response = await fetch(`/api/route-detail/${routeId}`);
        const data = await response.json();

        if (data.routes && data.routes.length > 0) {
          const routeData = data.routes[0];
          setRoute(routeData);

          if (routeData.geometry?.coordinates) {
            const path = routeData.geometry.coordinates[0].map((coord: number[]) => ({
              lat: coord[1],
              lng: coord[0]
            }));
            setRoutePath(path);
            if (path.length > 0) setMapCenter(path[0]);
          }

          try {
            const [dir0, dir1] = await Promise.all([
              getStopsByRoute(routeId, 0),
              getStopsByRoute(routeId, 1),
            ]);

            if (routeData.route_stops?.length > 0) {
              const map0 = new Map(dir0.map((s: Stop) => [s.stop_id, s]));
              const map1 = new Map(dir1.map((s: Stop) => [s.stop_id, s]));
              const processed0: Stop[] = [];
              const processed1: Stop[] = [];

              routeData.route_stops.forEach((routeStop: { stop: { stop_id: string; stop_name: string; geometry: { coordinates: number[] } } }) => {
                const stop = routeStop.stop;
                const s0 = map0.get(stop.stop_id) as Stop | undefined;
                const s1 = map1.get(stop.stop_id) as Stop | undefined;
                const processed = {
                  stop_id: stop.stop_id,
                  stop_name: stop.stop_name,
                  stop_lat: Number(stop.geometry.coordinates[1]),
                  stop_lon: Number(stop.geometry.coordinates[0]),
                  next_departure_time: s0?.next_departure_time || s1?.next_departure_time,
                  route_stop_order: s0?.route_stop_order || s1?.route_stop_order || 0
                };
                if (map0.has(stop.stop_id)) processed0.push(processed);
                if (map1.has(stop.stop_id)) processed1.push(processed);
              });

              processed0.sort((a, b) => (a.route_stop_order || 0) - (b.route_stop_order || 0));
              processed1.sort((a, b) => (a.route_stop_order || 0) - (b.route_stop_order || 0));
              setStopsDirection0(processed0);
              setStopsDirection1(processed1);
            } else {
              setStopsDirection0(dir0);
              setStopsDirection1(dir1);
            }
          } catch {
            // stops are non-critical, fail silently
          }
        } else {
          try {
            const [dir0, dir1] = await Promise.all([
              getStopsByRoute(routeId, 0),
              getStopsByRoute(routeId, 1),
            ]);
            setStopsDirection0(dir0);
            setStopsDirection1(dir1);
          } catch {
            // stops are non-critical, fail silently
          }
        }
      } catch {
        // fail silently — partial data is better than a broken page
      } finally {
        setLoading(false);
      }
    };

    if (routeId) fetchRouteData();
  }, [routeId]);

  useEffect(() => {
    fetchVehiclePositions();
    const intervalId = setInterval(fetchVehiclePositions, 30000);
    return () => clearInterval(intervalId);
  }, [fetchVehiclePositions]);

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
                onMouseOver={(e) => { e.currentTarget.style.background = "rgba(255, 255, 255, 0.2)"; }}
                onMouseOut={(e) => { e.currentTarget.style.background = "rgba(255, 255, 255, 0.1)"; }}
              >
                FAQ
              </button>
            </Link>
          </div>
        </div>

        <div style={{ display: "flex", gap: "24px", height: "calc(100vh - 100px)" }}>
          <div style={{ flex: "1.5", position: "relative", display: "flex", flexDirection: "column" }}>
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

            {isLoaded ? (
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
                onMapLoad={() => {}}
                onStopSelect={setSelectedStop}
                onVehicleSelect={setSelectedVehicle}
                onStopClose={() => setSelectedStop(null)}
                onVehicleClose={() => setSelectedVehicle(null)}
              />
            ) : (
              <div style={{
                flex: 1,
                borderRadius: "10px",
                background: "rgba(0,0,0,0.2)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#93c5fd",
                fontSize: "14px"
              }}>
                Loading map...
              </div>
            )}
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
            {loading ? (
              <p style={{ color: "#93c5fd", fontSize: "14px" }}>Loading route data...</p>
            ) : (
              <>
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
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoutePage;
