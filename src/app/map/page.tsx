"use client";
import React, { useEffect, useState } from "react";
import { useJsApiLoader, GoogleMap, Marker } from "@react-google-maps/api";

const Page = () => {
    const [userPosition, setUserPosition] = useState<{ lat: number; lng: number } | null>(null);
    const defaultPosition = { lat: 33.878840, lng: -117.884973 }; // Default map center
    const [busStops, setBusStops] = useState<{ stop_id: string; stop_name: string; lat: number; lng: number }[]>([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [routes, setRoutes] = useState<{ route_id: string; route_name: string; route_url: string }[]>([]);
    const [locationError, setLocationError] = useState<string | null>(null);

    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!,
        libraries: ["places", "maps"], 
    });

    // Separate function to handle location updates
    const handleLocationUpdate = (position: GeolocationPosition) => {
        const newPosition = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
        };
        setUserPosition(newPosition);
        fetchRoutes(newPosition.lat, newPosition.lng, setRoutes);
        setLocationError(null);
    };

    useEffect(() => {
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
                    setLocationError(`Error getting location: ${error.message}`);
                    console.error("Error getting initial location:", error);
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

            return () => navigator.geolocation.clearWatch(watchId);
        } else {
            setLocationError("Geolocation is not supported by your browser");
        }
    }, []);

    const fetchRoutes = async (lat: number, lng: number, setRoutes: (routes: any[]) => void) => {
        try {
            const transitAPI = process.env.TRANSITLAND_API_KEY;
            if (!transitAPI) {
                console.error("Transit API key is missing.");
                return;
            }
    
            const response = await fetch(
                `https://transit.land/api/v2/routes?lat=${lat}&lon=${lng}&r=100&per_page=5&api_key=${transitAPI}`
            );
            
            if (!response.ok) {
                throw new Error(`API request failed with status: ${response.status}`);
            }
    
            const data = await response.json();
            console.log("Routes data:", data);
    
            if (data.routes) {
                setRoutes(
                    data.routes.map((route: { route_id: string; route_desc: string; route_url: string }) => ({
                        route_id: route.route_id,
                        route_desc: route.route_desc, // Fixed key
                        route_url: route.route_url,
                    }))
                );
            } 
        } catch (error) {
            console.error("Error fetching routes:", error);
        }
    };

    if (!isLoaded) {
        return <div>Loading...</div>;
    }

    return (
        <div style={{ height: "100vh", width: "100%", backgroundColor: "#222", color: "#ffffff", padding: "20px" }}>
            <h2 style={{ textAlign: "center" }}>Local Bus Routes</h2>
            {locationError && (
                <div style={{ 
                    textAlign: "center", 
                    color: "#ff6b6b", 
                    padding: "10px", 
                    marginBottom: "10px",
                    backgroundColor: "rgba(255,0,0,0.1)",
                    borderRadius: "5px"
                }}>
                    {locationError}
                </div>
            )}
            {routes.length === 0 ? (
                <p style={{ textAlign: "center" }}>No nearby routes found.</p>
            ) : (
                <ul style={{ listStyle: "none", padding: 0, textAlign: "center" }}>
                    {routes.map((route) => (
                        <li key={route.route_id} style={{ margin: "10px 0" }}>
                            <a href={route.route_url} target="_blank" rel="noopener noreferrer" style={{ color: "#4da6ff" }}>
                                {route.route_name}
                            </a>
                        </li>
                    ))}
                </ul>
            )}

            {/* Google Map Container */}
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    height: "35vh",
                    width: "100%",
                    border: "5px solid white",
                    borderRadius: "15px",
                    overflow: "hidden",
                    boxShadow: "0px 4px 10px rgba(255, 255, 255, 0.2)",
                    marginTop: "20px"
                }}
            >
                <GoogleMap
                    zoom={14}
                    center={userPosition || defaultPosition}
                    mapContainerStyle={{ height: "100%", width: "100%" }}
                    options={{
                        fullscreenControl: false,
                        streetViewControl: false,
                        mapTypeControl: false,
                        draggable: true,
                        zoomControl: true,
                        gestureHandling: "greedy",
                        styles: [
                            { elementType: "geometry", stylers: [{ color: "#ffffff" }] }, 
                            { elementType: "labels.text.fill", stylers: [{ color: "#ffffff" }] }, 
                            { elementType: "labels.text.stroke", stylers: [{ color: "#000000" }] }, 
                            { featureType: "road", elementType: "geometry", stylers: [{ color: "#ffffff" }] }, 
                            { featureType: "road", elementType: "geometry.stroke", stylers: [{ color: "#ffffff" }] }, 
                            { featureType: "water", elementType: "geometry", stylers: [{ color: "#0B3D91" }] }, 
                            { featureType: "landscape", elementType: "geometry", stylers: [{ color: "#25434f" }] }, 
                            { featureType: "poi", elementType: "all", stylers: [{ visibility: "off" }] }, 
                            { featureType: "transit", elementType: "all", stylers: [{ visibility: "off" }] },
                        ],
                    }}
                >
                    {userPosition && (
                        <Marker
                            position={userPosition}
                            label={{
                                text: "You", 
                                color: "#ffffff", 
                                fontSize: "14px", 
                                fontWeight: "bold"
                            }}
                            icon={{
                                path: window.google?.maps.SymbolPath.CIRCLE,
                                scale: 10,
                                fillColor: "#4285F4",
                                fillOpacity: 1,
                                strokeColor: "white",
                                strokeWeight: 2,
                            }}
                        />
                    )}
                </GoogleMap>
            </div>
        </div>
    );
};

export default Page;
