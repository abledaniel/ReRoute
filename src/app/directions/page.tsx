"use client";
import React, { useEffect, useState, useRef, useCallback, Suspense } from "react";
import { useJsApiLoader, GoogleMap, Marker, DirectionsRenderer } from "@react-google-maps/api";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { mapStyles } from '@/styles/mapstyle';

const MAPS_LIBRARIES: ("places" | "maps")[] = ["places", "maps"];

const DirectionsPage = () => {
  return (
    <Suspense fallback={
      <div style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(to right, #1e3c72, #2a5298)",
        color: "white"
      }}>
        Loading...
      </div>
    }>
      <DirectionsContent />
    </Suspense>
  );
};

const DirectionsContent = () => {
  const searchParams = useSearchParams();
  const defaultPosition = { lat: 33.878840, lng: -117.884973 };

  const [userPosition, setUserPosition] = useState<{ lat: number; lng: number } | null>(null);
  const [mapCenter, setMapCenter] = useState(defaultPosition);
  const [directions, setDirections] = useState<google.maps.DirectionsResult | null>(null);
  const [routeDetails, setRouteDetails] = useState<{
    duration: string;
    arrivalTime: string;
    distance: string;
  } | null>(null);

  const mapRef = useRef<google.maps.Map | null>(null);
  const directionsService = useRef<google.maps.DirectionsService | null>(null);

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!,
    libraries: MAPS_LIBRARIES,
  });

  const handleLocationUpdate = useCallback((position: GeolocationPosition) => {
    const newPosition = {
      lat: Number(position.coords.latitude.toFixed(9)),
      lng: Number(position.coords.longitude.toFixed(9)),
    };
    setUserPosition(newPosition);
    setMapCenter(newPosition);
  }, []);

  const calculateRoute = (originAddress: string, destinationAddress: string) => {
    if (!directionsService.current) return;

    directionsService.current.route(
      {
        origin: originAddress,
        destination: destinationAddress,
        travelMode: google.maps.TravelMode.TRANSIT,
      },
      (result, status) => {
        if (status === google.maps.DirectionsStatus.OK && result) {
          setDirections(result);

          if (mapRef.current && result.routes[0]) {
            const bounds = new google.maps.LatLngBounds();
            result.routes[0].legs.forEach(leg => {
              bounds.extend(leg.start_location);
              bounds.extend(leg.end_location);
            });
            mapRef.current.fitBounds(bounds);
          }
        }
      }
    );
  };

  useEffect(() => {
    const originParam = searchParams.get('origin');
    const destinationParam = searchParams.get('destination');
    const durationParam = searchParams.get('duration');
    const arrivalTimeParam = searchParams.get('arrivalTime');
    const distanceParam = searchParams.get('distance');

    if (durationParam && arrivalTimeParam && distanceParam) {
      setRouteDetails({
        duration: decodeURIComponent(durationParam),
        arrivalTime: decodeURIComponent(arrivalTimeParam),
        distance: decodeURIComponent(distanceParam)
      });
    }

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        handleLocationUpdate,
        () => {},
        { enableHighAccuracy: false, maximumAge: 60000, timeout: 15000 }
      );
    }

    if (isLoaded) {
      directionsService.current = new google.maps.DirectionsService();
      if (originParam && destinationParam) {
        calculateRoute(decodeURIComponent(originParam), decodeURIComponent(destinationParam));
      }
    }
  }, [isLoaded, searchParams, handleLocationUpdate]);

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
          <div style={{ flex: "1.5", position: "relative" }}>
            <div style={{
              position: "absolute",
              top: "0",
              left: "0",
              right: "0",
              zIndex: "1",
              padding: "16px"
            }}>
              <div style={{
                background: "rgba(0, 0, 0, 0.5)",
                padding: "16px",
                borderRadius: "10px",
                marginBottom: "16px"
              }}>
                <h2 style={{ fontSize: "20px", marginBottom: "16px" }}>Route Information</h2>
                {routeDetails && (
                  <div>
                    <p>Duration: {routeDetails.duration}</p>
                    <p>Distance: {routeDetails.distance}</p>
                    <p>Arrives: {routeDetails.arrivalTime}</p>
                  </div>
                )}
              </div>
            </div>

            <GoogleMap
              zoom={14}
              center={mapCenter}
              mapContainerStyle={{ height: "100%", width: "100%" }}
              options={{
                fullscreenControl: false,
                streetViewControl: false,
                mapTypeControl: false,
                styles: mapStyles
              }}
              onLoad={(map) => { mapRef.current = map; }}
            >
              {userPosition && (
                <Marker
                  position={userPosition}
                  icon={{
                    path: google.maps.SymbolPath.CIRCLE,
                    scale: 10,
                    fillColor: "#c5acff",
                    fillOpacity: 1,
                    strokeColor: "#FFFFFF",
                    strokeWeight: 2,
                  }}
                />
              )}

              {directions && (
                <DirectionsRenderer
                  directions={directions}
                  options={{
                    suppressMarkers: false,
                    polylineOptions: {
                      strokeColor: "#2563eb",
                      strokeWeight: 4,
                      strokeOpacity: 0.8
                    }
                  }}
                />
              )}
            </GoogleMap>
          </div>

          <div style={{
            flex: "1",
            display: "flex",
            flexDirection: "column",
            gap: "24px",
            overflowY: "auto"
          }}>
            {directions && directions.routes[0] && (
              <div style={{
                background: "rgba(0, 0, 0, 0.5)",
                padding: "24px",
                borderRadius: "10px"
              }}>
                <h2 style={{ fontSize: "20px", marginBottom: "16px" }}>Directions</h2>
                <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                  {directions.routes[0].legs[0].steps.map((step, index) => (
                    <div
                      key={index}
                      style={{
                        background: "rgba(255, 255, 255, 0.1)",
                        padding: "16px",
                        borderRadius: "8px"
                      }}
                    >
                      <div dangerouslySetInnerHTML={{ __html: step.instructions }} />
                      {step.transit && (
                        <div style={{ marginTop: "8px", color: "#93c5fd" }}>
                          <p>Route: {step.transit.line.short_name || step.transit.line.name}</p>
                          <p>Departure: {step.transit.departure_time.text}</p>
                          <p>Arrival: {step.transit.arrival_time.text}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DirectionsPage;
