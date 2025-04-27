"use client";
import React, { useEffect, useState, useRef } from "react";
import { useJsApiLoader, GoogleMap, Marker, DirectionsRenderer } from "@react-google-maps/api";
import { useRouter } from "next/navigation";
import { supabase } from '@/lib/supabase';
import '@/styles/map.css';
import { mapStyles } from '@/styles/mapstyle';
import Link from "next/link";

const Page = () => {
  const router = useRouter();
    const [userPosition, setUserPosition] = useState<{ lat: number; lng: number } | null>(null);
  const defaultPosition = { lat: 33.878840, lng: -117.884973 }; // Default map center
    const [busStops, setBusStops] = useState<{ stop_id: string; stop_name: string; lat: number; lng: number }[]>([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [origin, setOrigin] = useState("");
    const [destination, setDestination] = useState("");
    const [routes, setRoutes] = useState<{ route_id: string; route_name: string; route_url: string }[]>([]);
  const [locationError, setLocationError] = useState<string | null>(null);
  const mapRef = useRef<google.maps.Map | null>(null);
  const markerRef = useRef<any>(null);
  const [mapCenter, setMapCenter] = useState(defaultPosition);
  const initialLoadRef = useRef(true);
  const [directions, setDirections] = useState<google.maps.DirectionsResult | null>(null);
  const [originAutocomplete, setOriginAutocomplete] = useState<google.maps.places.Autocomplete | null>(null);
  const [destinationAutocomplete, setDestinationAutocomplete] = useState<google.maps.places.Autocomplete | null>(null);
  const originInputRef = useRef<HTMLInputElement>(null);
  const destinationInputRef = useRef<HTMLInputElement>(null);
  const directionsService = useRef<google.maps.DirectionsService | null>(null);
  const [routeDetails, setRouteDetails] = useState<{
    duration: string;
    arrivalTime: string;
    departureTime: string;
    distance: string;
    steps: google.maps.DirectionsStep[];
    routeId: string;
  } | null>(null);

    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!,
        libraries: ["places", "maps"], 
    });

  // Separate function to handle location updates
  const handleLocationUpdate = (position: GeolocationPosition) => {
    const newPosition = {
      lat: Number(position.coords.latitude.toFixed(9)),
      lng: Number(position.coords.longitude.toFixed(9)),
    };
    
    // Only update user position and map center on initial load
    if (initialLoadRef.current) {
      setUserPosition(newPosition);
      setMapCenter(newPosition);
      initialLoadRef.current = false;
    }
    
    // Always fetch routes based on current map center, not user position
    if (mapRef.current) {
      const center = mapRef.current.getCenter();
      if (center) {
        fetchRoutes(center.lat(), center.lng(), setRoutes);
      }
    }
    
    setLocationError(null);
  };

  // Function to handle map center changes
  const handleMapCenterChanged = () => {
    if (mapRef.current) {
      const center = mapRef.current.getCenter();
      if (center) {
        const newCenter = {
          lat: Number(center.lat().toFixed(9)),
          lng: Number(center.lng().toFixed(9))
        };
        setMapCenter(newCenter);
        fetchRoutes(newCenter.lat, newCenter.lng, setRoutes);
      }
    }
  };

  // Function to update the advanced marker
  const updateUserMarker = () => {
    if (!mapRef.current || !userPosition || !window.google || !window.google.maps || !window.google.maps.marker) {
      console.log("Cannot create marker - missing dependencies:", {
        map: !!mapRef.current,
        userPosition: !!userPosition,
        google: !!window.google,
        maps: !!(window.google && window.google.maps),
        marker: !!(window.google && window.google.maps && window.google.maps.marker)
      });
      
      // Fallback to standard marker if advanced marker fails
      if (mapRef.current && userPosition && window.google && window.google.maps) {
        // Remove existing marker if it exists
        if (markerRef.current) {
          markerRef.current.setMap(null);
        }
        
        // Create a standard marker as fallback
        const standardMarker = new window.google.maps.Marker({
          position: userPosition,
          map: mapRef.current,
          title: "Your Location",
          icon: {
            path: window.google.maps.SymbolPath.CIRCLE,
            scale: 10,
            fillColor: "#c5acff", // Purple color
            fillOpacity: 1,
            strokeColor: "#FFFFFF",
            strokeWeight: 2,
          }
        });
        
        markerRef.current = standardMarker;
        console.log("Standard marker created as fallback");
      }
      
      return;
    }

    try {
      // Remove existing marker if it exists
      if (markerRef.current) {
        markerRef.current.map = null;
      }

      // Create a new advanced marker
      const markerView = new window.google.maps.marker.AdvancedMarkerElement({
        map: mapRef.current,
        position: userPosition,
        title: "Your Location",
        content: createMarkerContent(),
      });

      markerRef.current = markerView;
      console.log("Advanced marker created successfully");
    } catch (error) {
      console.error("Error creating advanced marker:", error);
      
      // Fallback to standard marker if advanced marker fails
      if (mapRef.current && userPosition && window.google && window.google.maps) {
        const standardMarker = new window.google.maps.Marker({
          position: userPosition,
          map: mapRef.current,
          title: "Your Location",
          icon: {
            path: window.google.maps.SymbolPath.CIRCLE,
            scale: 10,
            fillColor: "#c5acff", // Purple color
            fillOpacity: 1,
            strokeColor: "#FFFFFF",
            strokeWeight: 2,
          }
        });
        
        markerRef.current = standardMarker;
        console.log("Standard marker created as fallback after error");
      }
    }
  };

  // Function to create custom marker content
  const createMarkerContent = () => {
    const div = document.createElement('div');
    div.className = 'custom-marker';
    div.innerHTML = `
            <div style="
                background-color: #c5acff; /* Purple color */
                border-radius: 50%;
                width: 20px;
                height: 20px;
                border: 2px solid white;
                box-shadow: 0 2px 6px rgba(0,0,0,0.3);
                display: flex;
                align-items: center;
                justify-content: center;
                color: white;
                font-weight: bold;
                font-size: 12px;
            ">
                You
            </div>
        `;
    return div;
  };

  // Update marker when user position changes
  useEffect(() => {
    if (isLoaded && userPosition) {
      // Add a small delay to ensure the marker library is fully loaded
      const timer = setTimeout(() => {
        updateUserMarker();
      }, 500);

      return () => clearTimeout(timer);
    }
  }, [isLoaded, userPosition]);

  // Fetch routes when map center changes
  useEffect(() => {
    if (isLoaded && mapCenter) {
      fetchRoutes(mapCenter.lat, mapCenter.lng, setRoutes);
    }
  }, [isLoaded, mapCenter]);

    useEffect(() => {
    // Immediately fetch routes with default position
    fetchRoutes(defaultPosition.lat, defaultPosition.lng, setRoutes);

        const fetchStopsData = async () => {
            try {
                const response = await fetch("/stops.csv");
                const stopsData = await response.text();

                const stops: { stop_id: string; stop_name: string; lat: number; lng: number }[] = [];
                const rows = stopsData.split("\n");

                rows.slice(1).forEach((row) => {
                    const columns = row.split(",");
                    if (columns.length === 4) {
                        const stop_id = columns[0].trim();
                        const stop_name = columns[1].trim();
                        const lat = parseFloat(columns[2].trim());
                        const lng = parseFloat(columns[3].trim());
                        if (!isNaN(lat) && !isNaN(lng)) {
                            stops.push({ stop_id, stop_name, lat, lng });
                        }
                    }
                });

                setBusStops(stops);
            } catch (error) {
                console.error("Error fetching stop data:", error);
            }
        };

        fetchStopsData();

    // Get initial position
        if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        handleLocationUpdate,
        (error) => {
          console.error("Error getting high-accuracy location:", error);
          // Fallback to low-accuracy if high-accuracy fails
          navigator.geolocation.getCurrentPosition(
            handleLocationUpdate,
            (error) => {
              setLocationError(`Error getting location: ${error.message}`);
              console.error("Error getting low-accuracy location:", error);
            },
            {
              enableHighAccuracy: false,
              maximumAge: 60000,
              timeout: 30000,
            }
          );
        },
        {
          enableHighAccuracy: true,
          maximumAge: 30000,
          timeout: 27000,
        }
      );

      // Set up continuous watching with more relaxed parameters
            const watchId = navigator.geolocation.watchPosition(
        handleLocationUpdate,
                (error) => {
          setLocationError(`Error tracking location: ${error.message}`);
          console.error("Error watching location:", error);
                },
                {
                    enableHighAccuracy: true,
          maximumAge: 60000, // Accept positions up to 1 minute old
          timeout: 30000, // Wait up to 30 seconds for a position
                }
            );

      return () => {
        navigator.geolocation.clearWatch(watchId);
        // Clean up marker when component unmounts
        if (markerRef.current) {
          markerRef.current.map = null;
        }
      };
    } else {
      setLocationError("Geolocation is not supported by your browser");
        }
    }, []);

    const fetchRoutes = async (lat: number, lng: number, setRoutes: (routes: any[]) => void) => {
        try {
      // Format coordinates to 9 decimal places
      const formattedLat = Number(lat.toFixed(9));
      const formattedLng = Number(lng.toFixed(9));

      // Log the request for debugging
      console.log(`Fetching routes for lat: ${formattedLat}, lon: ${formattedLng}`);

      const apiKey = process.env.NEXT_PUBLIC_TRANSIT_LAND_API_KEY || '4i0HhaRLe0jBSotDmxETH05X2iwrgNcJ';
            const response = await fetch(
        `https://transit.land/api/v2/rest/routes?lat=${formattedLat}&lon=${formattedLng}&radius=1000&api_key=${apiKey}`
            );
            
            if (!response.ok) {
        throw new Error(`Transit.land API error: ${response.status} ${response.statusText}`);
            }
    
            const data = await response.json();

      if (!data.routes || data.routes.length === 0) {
        console.log("No routes found from Transit.land API");
        setRoutes([]);
        return;
      }

      // Format routes for display - using route_id and route_long_name from the API response
      const formattedRoutes = data.routes.map((route: any) => ({
                        route_id: route.route_id,
        route_name: route.route_long_name || route.route_short_name || `Route ${route.route_id}`,
        route_url: route.route_url || '#'
      }));

      console.log(`Found ${formattedRoutes.length} nearby routes from Transit.land:`, formattedRoutes);
      setRoutes(formattedRoutes);
        } catch (error) {
      console.error("Error fetching routes from Transit.land:", error);
      setRoutes([]);
        }
  };
    
  // Function to handle route click
  const handleRouteClick = (routeId: string) => {
    router.push(`/route/${routeId}`);
    };

  useEffect(() => {
    if (isLoaded && originInputRef.current && destinationInputRef.current) {
      // Initialize autocomplete for origin
      const originAutocompleteInstance = new google.maps.places.Autocomplete(originInputRef.current, {
        types: ['establishment', 'geocode'],
        componentRestrictions: { country: 'us' }
      });
      setOriginAutocomplete(originAutocompleteInstance);

      // Initialize autocomplete for destination
      const destinationAutocompleteInstance = new google.maps.places.Autocomplete(destinationInputRef.current, {
        types: ['establishment', 'geocode'],
        componentRestrictions: { country: 'us' }
      });
      setDestinationAutocomplete(destinationAutocompleteInstance);

      // Initialize directions service
      directionsService.current = new google.maps.DirectionsService();

      // Add listeners for place selection
      originAutocompleteInstance.addListener('place_changed', () => {
        const place = originAutocompleteInstance.getPlace();
        if (place.geometry) {
          setOrigin(place.formatted_address || '');
          calculateRoute();
        }
      });

      destinationAutocompleteInstance.addListener('place_changed', () => {
        const place = destinationAutocompleteInstance.getPlace();
        if (place.geometry) {
          setDestination(place.formatted_address || '');
          calculateRoute();
        }
      });
    }
  }, [isLoaded]);

  const calculateRoute = () => {
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
          
          // Extract route details for display
          if (result.routes && result.routes.length > 0 && result.routes[0].legs && result.routes[0].legs.length > 0) {
            const leg = result.routes[0].legs[0];
            
            // Calculate estimated arrival time (current time + duration)
            const now = new Date();
            const durationInMinutes = leg.duration?.value ? Math.round(leg.duration.value / 60) : 0;
            const estimatedArrivalTime = new Date(now.getTime() + durationInMinutes * 60000);
            const formattedArrivalTime = estimatedArrivalTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
            
            setRouteDetails({
              duration: leg.duration?.text || 'N/A',
              arrivalTime: formattedArrivalTime,
              departureTime: 'N/A', // Not used anymore but keeping for compatibility
              distance: leg.distance?.text || 'N/A',
              steps: leg.steps || [],
              routeId: result.routes[0].legs[0].steps[0].transit_details?.line.vehicle?.name?.replace('OCTA BUS ', '') || ''
            });
          }
          
          // Only adjust map bounds if it's the initial route calculation
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
  };

  // Function to navigate to directions page
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

    if (!isLoaded) {
    return (
      <div style={{
        minHeight: "100vh",
        background: "linear-gradient(to right, #1e3c72, #2a5298)",
        color: "white",
        padding: "32px"
      }}>
        <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", marginBottom: "32px" }}>
            <h1 style={{ fontSize: "24px", fontWeight: "bold" }}>Loading map...</h1>
          </div>
        </div>
      </div>
    );
    }

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

        {/* Side-by-side layout */}
        <div style={{ display: "flex", gap: "32px" }}>
          {/* Map Section - Left Side */}
          <div style={{ 
            flex: "1.5", 
            position: "relative",
            display: "flex",
            flexDirection: "column"
          }}>
            {/* Transit Search Bar */}
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
                          // Reverse geocode to get address
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
                        (error) => {
                          console.error("Error getting location:", error);
                        }
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
                  onMouseOver={(e) => {
                    e.currentTarget.style.background = "rgba(255, 255, 255, 0.2)";
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.background = "rgba(255, 255, 255, 0.1)";
                  }}
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
                onMouseOver={(e) => {
                  e.currentTarget.style.background = "#60a5fa";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.background = "#93c5fd";
                }}
              >
                Search
              </button>
            </div>

            {/* Location Error and Manual Location Button */}
            {locationError && (
              <div style={{
                padding: "8px 16px",
                background: "rgba(255, 0, 0, 0.2)",
                borderRadius: "6px",
                margin: "0 16px 16px 16px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center"
              }}>
                <span style={{ color: "#ff6b6b" }}>{locationError}</span>
                <button
                  onClick={() => {
                    if (navigator.geolocation) {
                      navigator.geolocation.getCurrentPosition(
                        handleLocationUpdate,
                        (error) => {
                          setLocationError(`Error getting location: ${error.message}`);
                          console.error("Error getting location:", error);
                        },
                        {
                          enableHighAccuracy: true,
                          maximumAge: 0,
                          timeout: 5000,
                        }
                      );
                    }
                  }}
                  style={{
                    padding: "8px 12px",
                    background: "#228B22",
                    border: "none",
                    borderRadius: "4px",
                    color: "white",
                    cursor: "pointer",
                    fontSize: "12px",
                    fontWeight: "bold"
                  }}
                >
                  Try Again
                </button>
              </div>
            )}

            {/* Map */}
            <div className="map-container map-wrapper">
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
                onLoad={(map) => {
                  mapRef.current = map;
                  if (userPosition && initialLoadRef.current) {
                    // Add a small delay to ensure the marker library is fully loaded
                    setTimeout(() => {
                      updateUserMarker();
                    }, 500);
                  }
                }}
                onDragEnd={handleMapCenterChanged}
                onZoomChanged={handleMapCenterChanged}
              >
                {/* Always show user location with a standard marker as backup */}
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
                
                {/* Display transit route */}
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
            </div>
          </div>

          {/* Right Side: Routes List */}
          <div style={{
            flex: "1",
            display: "flex",
            flexDirection: "column",
            gap: "32px",
            overflowY: "auto",
            maxHeight: "calc(100vh - 150px)"
          }}>
            {/* Route Details Section - Only shown when directions are available */}
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
                  onMouseOver={(e) => {
                    e.currentTarget.style.background = "#1d4ed8";
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.background = "#2563eb";
                  }}
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
                  <p style={{ color: "#93c5fd" }}>No nearby routes found. {locationError ? `Error: ${locationError}` : ''}</p>
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
                          <div style={{ fontSize: "12px", marginTop: "5px", color: "#93c5fd" }}>10 Minutes Arrival Prediction: 13 Minutes</div>
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
