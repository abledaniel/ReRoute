"use client";
import React, { useEffect, useState, useRef, useCallback } from "react";
import { useJsApiLoader, GoogleMap, Marker, DirectionsRenderer } from "@react-google-maps/api";
import { useRouter } from "next/navigation";
import '@/styles/map.css';
import { mapStyles } from '@/styles/mapstyle';
import Link from "next/link";
import { Route } from "@/types/route";

const MAPS_LIBRARIES: ("places" | "maps")[] = ["places", "maps"];

const Page = () => {
  const router = useRouter();
  const [userPosition, setUserPosition] = useState<{ lat: number; lng: number } | null>(null);
  const defaultPosition = { lat: 33.878840, lng: -117.884973 };
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [routes, setRoutes] = useState<Route[]>([]);
  const mapRef = useRef<google.maps.Map | null>(null);
  const [mapCenter, setMapCenter] = useState(defaultPosition);
  const initialLoadRef = useRef(true);
  const [directions, setDirections] = useState<google.maps.DirectionsResult | null>(null);
  const originInputRef = useRef<HTMLInputElement>(null);
  const destinationInputRef = useRef<HTMLInputElement>(null);
  const directionsService = useRef<google.maps.DirectionsService | null>(null);
  const [routeDetails, setRouteDetails] = useState<{
    duration: string;
    arrivalTime: string;
    distance: string;
    routeId: string;
  } | null>(null);
  const debounceTimerRef = useRef<NodeJS.Timeout | null>(null);

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!,
    libraries: MAPS_LIBRARIES,
  });

  const calculateRoute = useCallback(() => {
    if (!directionsService.current || !origin || !destination) return;

    directionsService.current.route(
      {
        origin: origin,
        destination: destination,
        travelMode: google.maps.TravelMode.TRANSIT,
      },
      (result, status) => {
        if (status === google.maps.DirectionsStatus.OK && result) {
          setDirections(result);

          if (result.routes?.length > 0 && result.routes[0].legs?.length > 0) {
            const leg = result.routes[0].legs[0];
            const durationInMinutes = leg.duration?.value ? Math.round(leg.duration.value / 60) : 0;
            const estimatedArrival = new Date(Date.now() + durationInMinutes * 60000);

            setRouteDetails({
              duration: leg.duration?.text || 'N/A',
              arrivalTime: estimatedArrival.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
              distance: leg.distance?.text || 'N/A',
              routeId: result.routes[0].legs[0].steps[0].transit_details?.line.vehicle?.name?.replace('OCTA BUS ', '') || ''
            });
          }

          if (mapRef.current && result.routes[0] && initialLoadRef.current) {
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
  }, [origin, destination]);

  const fetchRoutes = useCallback(async (lat: number, lng: number, setRoutes: (routes: Route[]) => void) => {
    try {
      const response = await fetch(`/api/route?lat=${lat}&lng=${lng}`);
      const data = await response.json();
      if (data.routes) {
        setRoutes(data.routes);
      }
    } catch (error) {
      console.error("Error fetching routes:", error);
    }
  }, []);

  const debouncedFetchRoutes = useCallback((lat: number, lng: number) => {
    if (debounceTimerRef.current) {
      clearTimeout(debounceTimerRef.current);
    }
    debounceTimerRef.current = setTimeout(() => {
      fetchRoutes(lat, lng, setRoutes);
    }, 1000);
  }, [fetchRoutes, setRoutes]);

  const handleLocationUpdate = useCallback((position: GeolocationPosition) => {
    const newPosition = {
      lat: Number(position.coords.latitude.toFixed(9)),
      lng: Number(position.coords.longitude.toFixed(9)),
    };

    setUserPosition(newPosition);

    if (initialLoadRef.current) {
      setMapCenter(newPosition);
      initialLoadRef.current = false;
      debouncedFetchRoutes(newPosition.lat, newPosition.lng);
    }
  }, [debouncedFetchRoutes]);

  const handleMapCenterChanged = useCallback(() => {
    if (mapRef.current) {
      const center = mapRef.current.getCenter();
      if (center && mapRef.current.getBounds()) {
        const newCenter = {
          lat: Number(center.lat().toFixed(9)),
          lng: Number(center.lng().toFixed(9))
        };
        setMapCenter(newCenter);
        debouncedFetchRoutes(newCenter.lat, newCenter.lng);
      }
    }
  }, [debouncedFetchRoutes]);

  useEffect(() => {
    if (!("geolocation" in navigator)) return;

    navigator.geolocation.getCurrentPosition(
      handleLocationUpdate,
      (error) => {
        if (error.code !== error.TIMEOUT) {
          console.warn("Geolocation unavailable:", error.message);
        }
      },
      { enableHighAccuracy: false, timeout: 15000, maximumAge: 60000 }
    );

    const watchId = navigator.geolocation.watchPosition(
      handleLocationUpdate,
      () => {},
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
    );

    return () => navigator.geolocation.clearWatch(watchId);
  }, [handleLocationUpdate]);

  // Fetch nearby routes at default position immediately — no need to wait for Maps JS
  useEffect(() => {
    fetchRoutes(defaultPosition.lat, defaultPosition.lng, setRoutes);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const handleRouteClick = (routeId: string) => {
    router.push(`/route/${routeId}`);
  };

  useEffect(() => {
    if (isLoaded && originInputRef.current && destinationInputRef.current) {
      const originAutocomplete = new google.maps.places.Autocomplete(originInputRef.current, {
        types: ['establishment', 'geocode'],
        componentRestrictions: { country: 'us' }
      });

      const destinationAutocomplete = new google.maps.places.Autocomplete(destinationInputRef.current, {
        types: ['establishment', 'geocode'],
        componentRestrictions: { country: 'us' }
      });

      directionsService.current = new google.maps.DirectionsService();

      originAutocomplete.addListener('place_changed', () => {
        const place = originAutocomplete.getPlace();
        if (place.geometry) {
          setOrigin(place.formatted_address || '');
          calculateRoute();
        }
      });

      destinationAutocomplete.addListener('place_changed', () => {
        const place = destinationAutocomplete.getPlace();
        if (place.geometry) {
          setDestination(place.formatted_address || '');
          calculateRoute();
        }
      });
    }
  }, [isLoaded, calculateRoute]);

  const goToDirections = () => {
    if (origin && destination && routeDetails) {
      const params = new URLSearchParams({
        origin: encodeURIComponent(origin),
        destination: encodeURIComponent(destination),
        duration: encodeURIComponent(routeDetails.duration),
        arrivalTime: encodeURIComponent(routeDetails.arrivalTime),
        distance: encodeURIComponent(routeDetails.distance),
        routeId: encodeURIComponent(routeDetails.routeId)
      });
      router.push(`/directions?${params.toString()}`);
    }
  };

  return (
    <div style={{
      minHeight: "100vh",
      background: "linear-gradient(to right, #1e3c72, #2a5298)",
      color: "white",
      padding: "16px"
    }}>
      <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
        <div style={{ display: "flex", alignItems: "center", marginBottom: "24px" }}>
          <h1 style={{ fontSize: "32px", fontWeight: "bold" }}>REROUTE</h1>
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

        <div style={{ display: "flex", gap: "32px" }}>
          <div style={{ flex: "1.5", position: "relative", display: "flex", flexDirection: "column" }}>
            <div style={{
              padding: "16px",
              background: "rgba(255, 255, 255, 0.1)",
              borderRadius: "8px",
              margin: "16px",
              display: "flex",
              gap: "16px",
              alignItems: "center"
            }}>
              <div style={{ flex: 1, display: "flex", gap: "8px" }}>
                <input
                  ref={originInputRef}
                  type="text"
                  placeholder="Origin"
                  value={origin}
                  onChange={(e) => setOrigin(e.target.value)}
                  style={{
                    flex: 1,
                    padding: "12px",
                    borderRadius: "6px",
                    border: "none",
                    fontSize: "14px",
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                    color: "#fff",
                  }}
                />
                <button
                  onClick={() => {
                    if (navigator.geolocation) {
                      navigator.geolocation.getCurrentPosition(
                        (position) => {
                          const lat = position.coords.latitude;
                          const lng = position.coords.longitude;
                          const geocoder = new google.maps.Geocoder();
                          geocoder.geocode({ location: { lat, lng } }, (results, status) => {
                            if (status === "OK" && results?.[0]) {
                              setOrigin(results[0].formatted_address);
                              if (originInputRef.current) {
                                originInputRef.current.value = results[0].formatted_address;
                              }
                            }
                          });
                        },
                        () => {}
                      );
                    }
                  }}
                  style={{
                    padding: "12px",
                    background: "rgba(255, 255, 255, 0.1)",
                    border: "none",
                    borderRadius: "6px",
                    color: "#fff",
                    cursor: "pointer",
                    fontSize: "14px",
                    whiteSpace: "nowrap",
                    transition: "background 0.2s"
                  }}
                  onMouseOver={(e) => { e.currentTarget.style.background = "rgba(255, 255, 255, 0.2)"; }}
                  onMouseOut={(e) => { e.currentTarget.style.background = "rgba(255, 255, 255, 0.1)"; }}
                >
                  📍 My Location
                </button>
              </div>
              <div style={{ flex: 1, display: "flex", gap: "8px" }}>
                <input
                  ref={destinationInputRef}
                  type="text"
                  placeholder="Destination"
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  style={{
                    flex: 1,
                    padding: "12px",
                    borderRadius: "6px",
                    border: "none",
                    fontSize: "14px",
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                    color: "#fff",
                  }}
                />
              </div>
              <button
                onClick={calculateRoute}
                style={{
                  padding: "12px 24px",
                  background: "#93c5fd",
                  border: "none",
                  borderRadius: "6px",
                  color: "white",
                  cursor: "pointer",
                  fontSize: "14px",
                  fontWeight: "bold",
                  transition: "background 0.2s"
                }}
                onMouseOver={(e) => { e.currentTarget.style.background = "#60a5fa"; }}
                onMouseOut={(e) => { e.currentTarget.style.background = "#93c5fd"; }}
              >
                Search
              </button>
            </div>

            <div className="map-container map-wrapper">
              {!isLoaded ? (
                <div style={{
                  height: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#93c5fd",
                  fontSize: "14px",
                  background: "rgba(0,0,0,0.2)",
                  borderRadius: "10px"
                }}>
                  Loading map...
                </div>
              ) : (
              <GoogleMap
                zoom={14}
                center={mapCenter}
                mapContainerStyle={{ height: "100%", width: "100%" }}
                options={{
                  fullscreenControl: false,
                  streetViewControl: false,
                  mapTypeControl: false,
                  zoomControl: true,
                  gestureHandling: "greedy",
                  styles: mapStyles,
                }}
                onLoad={(map) => { mapRef.current = map; }}
                onDragEnd={handleMapCenterChanged}
                onZoomChanged={handleMapCenterChanged}
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
                        strokeWeight: 5,
                      },
                    }}
                  />
                )}
              </GoogleMap>
              )}
            </div>
          </div>

          <div style={{
            flex: "1",
            display: "flex",
            flexDirection: "column",
            gap: "32px",
            overflowY: "auto",
            maxHeight: "calc(100vh - 150px)"
          }}>
            {routeDetails && (
              <div style={{
                background: "linear-gradient(to right, #1e3c72, #2a5298)",
                padding: "24px",
                borderRadius: "10px",
                boxShadow: "0 2px 4px rgba(0,0,0,0.1)"
              }}>
                <h2 style={{ fontSize: "20px", fontWeight: "bold", marginBottom: "16px" }}>ROUTE INFORMATION</h2>
                <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <span style={{ color: "#93c5fd" }}>Estimated Time:</span>
                    <span style={{ fontWeight: "bold" }}>{routeDetails.duration}</span>
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <span style={{ color: "#93c5fd" }}>Estimated Arrival:</span>
                    <span style={{ fontWeight: "bold" }}>{routeDetails.arrivalTime}</span>
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <span style={{ color: "#93c5fd" }}>Distance:</span>
                    <span style={{ fontWeight: "bold" }}>{routeDetails.distance}</span>
                  </div>
                </div>
                <button
                  onClick={goToDirections}
                  style={{
                    width: "100%",
                    padding: "12px",
                    background: "#2563eb",
                    border: "none",
                    borderRadius: "6px",
                    color: "white",
                    cursor: "pointer",
                    fontSize: "16px",
                    fontWeight: "bold",
                    marginTop: "16px",
                    transition: "background 0.2s"
                  }}
                  onMouseOver={(e) => { e.currentTarget.style.background = "#1d4ed8"; }}
                  onMouseOut={(e) => { e.currentTarget.style.background = "#2563eb"; }}
                >
                  GO
                </button>
              </div>
            )}

            <div style={{
              background: "linear-gradient(to right, #1e3c72, #2a5298)",
              padding: "24px",
              borderRadius: "10px",
              boxShadow: "0 2px 4px rgba(0,0,0,0.1)"
            }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
                <h2 style={{ fontSize: "20px", fontWeight: "bold" }}>NEARBY TRANSIT ({routes.length} routes)</h2>
              </div>
              <div style={{ flex: 1, overflowY: "auto" }}>
                {routes.length === 0 ? (
                  <p style={{ color: "#93c5fd" }}>No nearby routes found.</p>
                ) : (
                  <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                    {routes.map((route) => (
                      <div
                        key={route.route_id}
                        style={{
                          background: "linear-gradient(to right, #1e3c72, #2a5298)",
                          padding: "16px",
                          borderRadius: "10px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          cursor: "pointer",
                          transition: "transform 0.2s, box-shadow 0.2s",
                          boxShadow: "0 2px 4px rgba(0,0,0,0.1)"
                        }}
                        onClick={() => handleRouteClick(route.route_id)}
                        onMouseOver={(e) => {
                          e.currentTarget.style.transform = "translateY(-2px)";
                          e.currentTarget.style.boxShadow = "0 4px 8px rgba(0,0,0,0.2)";
                        }}
                        onMouseOut={(e) => {
                          e.currentTarget.style.transform = "translateY(0)";
                          e.currentTarget.style.boxShadow = "0 2px 4px rgba(0,0,0,0.1)";
                        }}
                      >
                        <div>
                          <div style={{ fontSize: "18px", fontWeight: "bold" }}>OCTA BUS {route.route_id}</div>
                          <div style={{ fontSize: "14px", marginTop: "5px", color: "#93c5fd" }}>{route.route_name}</div>
                          {route.direction0?.stop_name && (
                            <div style={{ fontSize: "12px", marginTop: "5px", color: "#93c5fd" }}>
                              Direction 1: {route.direction0.stop_name}
                              {route.direction0.next_departure && (
                                <span style={{ color: "#4ade80", fontWeight: "bold" }}> - Next: {route.direction0.next_departure}</span>
                              )}
                            </div>
                          )}
                          {route.direction1?.stop_name && (
                            <div style={{ fontSize: "12px", marginTop: "5px", color: "#93c5fd" }}>
                              Direction 2: {route.direction1.stop_name}
                              {route.direction1.next_departure && (
                                <span style={{ color: "#4ade80", fontWeight: "bold" }}> - Next: {route.direction1.next_departure}</span>
                              )}
                            </div>
                          )}
                        </div>
                        <div style={{ fontSize: "24px" }}>➔</div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
