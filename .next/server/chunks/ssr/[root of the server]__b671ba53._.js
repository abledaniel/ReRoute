module.exports = {

"[externals]/next/dist/compiled/next-server/app-page.runtime.dev.js [external] (next/dist/compiled/next-server/app-page.runtime.dev.js, cjs)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page.runtime.dev.js"));

module.exports = mod;
}}),
"[project]/src/app/map/page.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$google$2d$maps$2f$api$2f$dist$2f$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-google-maps/api/dist/esm.js [app-ssr] (ecmascript)");
"use client";
;
;
;
const Page = ()=>{
    const [userPosition, setUserPosition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const defaultPosition = {
        lat: 33.878840,
        lng: -117.884973
    }; // Default map center
    const [busStops, setBusStops] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [searchQuery, setSearchQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [routes, setRoutes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [locationError, setLocationError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const mapRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const markerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [mapCenter, setMapCenter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(defaultPosition);
    const { isLoaded } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$google$2d$maps$2f$api$2f$dist$2f$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useJsApiLoader"])({
        googleMapsApiKey: ("TURBOPACK compile-time value", "AIzaSyC9aGz6l-J4oy2c0bNSARq35HF4OgNYZBI"),
        libraries: [
            "places",
            "maps"
        ]
    });
    // Separate function to handle location updates
    const handleLocationUpdate = (position)=>{
        const newPosition = {
            lat: Number(position.coords.latitude.toFixed(9)),
            lng: Number(position.coords.longitude.toFixed(9))
        };
        setUserPosition(newPosition);
        setMapCenter(newPosition);
        fetchRoutes(newPosition.lat, newPosition.lng, setRoutes);
        setLocationError(null);
    };
    // Function to handle map center changes
    const handleMapCenterChanged = ()=>{
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
    const updateUserMarker = ()=>{
        if (!mapRef.current || !userPosition || !window.google || !window.google.maps || !window.google.maps.marker) {
            console.log("Cannot create marker - missing dependencies:", {
                map: !!mapRef.current,
                userPosition: !!userPosition,
                google: !!window.google,
                maps: !!(window.google && window.google.maps),
                marker: !!(window.google && window.google.maps && window.google.maps.marker)
            });
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
                content: createMarkerContent()
            });
            markerRef.current = markerView;
            console.log("Advanced marker created successfully");
        } catch (error) {
            console.error("Error creating advanced marker:", error);
        }
    };
    // Function to create custom marker content
    const createMarkerContent = ()=>{
        const div = document.createElement('div');
        div.className = 'custom-marker';
        div.innerHTML = `
            <div style="
                background-color: #4285F4;
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
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (isLoaded && userPosition) {
            // Add a small delay to ensure the marker library is fully loaded
            const timer = setTimeout(()=>{
                updateUserMarker();
            }, 500);
            return ()=>clearTimeout(timer);
        }
    }, [
        isLoaded,
        userPosition
    ]);
    // Fetch routes when map center changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (isLoaded && mapCenter) {
            fetchRoutes(mapCenter.lat, mapCenter.lng, setRoutes);
        }
    }, [
        isLoaded,
        mapCenter
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // Immediately fetch routes with default position
        fetchRoutes(defaultPosition.lat, defaultPosition.lng, setRoutes);
        const fetchStopsData = async ()=>{
            try {
                const response = await fetch("/stops.csv");
                const stopsData = await response.text();
                const stops = [];
                const rows = stopsData.split("\n");
                rows.slice(1).forEach((row)=>{
                    const columns = row.split(",");
                    if (columns.length === 4) {
                        const stop_id = columns[0].trim();
                        const stop_name = columns[1].trim();
                        const lat = parseFloat(columns[2].trim());
                        const lng = parseFloat(columns[3].trim());
                        if (!isNaN(lat) && !isNaN(lng)) {
                            stops.push({
                                stop_id,
                                stop_name,
                                lat,
                                lng
                            });
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
            navigator.geolocation.getCurrentPosition(handleLocationUpdate, (error)=>{
                setLocationError(`Error getting location: ${error.message}`);
                console.error("Error getting initial location:", error);
            }, {
                enableHighAccuracy: true,
                maximumAge: 30000,
                timeout: 27000
            });
            // Set up continuous watching with more relaxed parameters
            const watchId = navigator.geolocation.watchPosition(handleLocationUpdate, (error)=>{
                setLocationError(`Error tracking location: ${error.message}`);
                console.error("Error watching location:", error);
            }, {
                enableHighAccuracy: true,
                maximumAge: 60000,
                timeout: 30000
            });
            return ()=>{
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
    const fetchRoutes = async (lat, lng, setRoutes)=>{
        try {
            // Format coordinates to 9 decimal places
            const formattedLat = Number(lat.toFixed(9));
            const formattedLng = Number(lng.toFixed(9));
            // Log the request for debugging
            console.log(`Fetching routes for lat: ${formattedLat}, lon: ${formattedLng}`);
            // Use our new API route
            const apiUrl = `/api/routes?lat=${formattedLat}&lon=${formattedLng}`;
            console.log("API URL:", apiUrl);
            const response = await fetch(apiUrl);
            // Log the response status
            console.log(`API response status: ${response.status}`);
            if (!response.ok) {
                const errorText = await response.text();
                console.error(`API error: ${response.status} - ${errorText}`);
                // Don't use fallback data, just set empty routes
                setRoutes([]);
                return;
            }
            const data = await response.json();
            // Print the entire JSON response
            console.log("FULL JSON RESPONSE:", JSON.stringify(data, null, 2));
            // Also log it in a more readable format
            console.log("Routes data:", data);
            if (data.routes && Array.isArray(data.routes) && data.routes.length > 0) {
                console.log(`Found ${data.routes.length} routes`);
                const processedRoutes = data.routes.map((route)=>{
                    const processedRoute = {
                        route_id: route.route_id || route.route_short_name || '',
                        route_name: route.route_desc || route.route_long_name || '',
                        route_url: route.route_url || '#'
                    };
                    console.log("Processed route:", processedRoute);
                    return processedRoute;
                });
                console.log("Setting routes:", processedRoutes);
                setRoutes(processedRoutes);
            } else {
                console.warn("No routes found in the response");
                // Don't use fallback data, just set empty routes
                setRoutes([]);
            }
        } catch (error) {
            console.error("Error fetching routes:", error);
            // Don't use fallback data, just set empty routes
            setRoutes([]);
        }
    };
    if (!isLoaded) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: "Loading..."
        }, void 0, false, {
            fileName: "[project]/src/app/map/page.tsx",
            lineNumber: 262,
            columnNumber: 16
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            height: "100vh",
            width: "100%",
            background: "linear-gradient(to bottom right, #1e3c72, #2a5298)",
            color: "#fff",
            display: "flex",
            flexDirection: "column"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "20px"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        style: {
                            fontSize: "48px",
                            fontWeight: "bold"
                        },
                        children: "REROUTE"
                    }, void 0, false, {
                        fileName: "[project]/src/app/map/page.tsx",
                        lineNumber: 269,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        style: {
                            fontSize: "18px",
                            background: "none",
                            border: "none",
                            color: "#fff",
                            cursor: "pointer"
                        },
                        children: "FAQ"
                    }, void 0, false, {
                        fileName: "[project]/src/app/map/page.tsx",
                        lineNumber: 270,
                        columnNumber: 5
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/map/page.tsx",
                lineNumber: 268,
                columnNumber: 3
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: "flex",
                    flex: 1,
                    padding: "20px"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            flex: 1,
                            marginRight: "20px",
                            display: "flex",
                            flexDirection: "column"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "text",
                                placeholder: "Location Search",
                                value: searchQuery,
                                onChange: (e)=>setSearchQuery(e.target.value),
                                style: {
                                    padding: "12px",
                                    borderRadius: "8px",
                                    border: "none",
                                    fontSize: "16px",
                                    marginBottom: "20px",
                                    backgroundColor: "#eee",
                                    color: "#333"
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/app/map/page.tsx",
                                lineNumber: 278,
                                columnNumber: 7
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    flex: 1,
                                    borderRadius: "15px",
                                    overflow: "hidden"
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$google$2d$maps$2f$api$2f$dist$2f$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GoogleMap"], {
                                    zoom: 14,
                                    center: userPosition || defaultPosition,
                                    mapContainerStyle: {
                                        height: "100%",
                                        width: "100%"
                                    },
                                    options: {
                                        fullscreenControl: false,
                                        streetViewControl: false,
                                        mapTypeControl: false,
                                        zoomControl: true,
                                        gestureHandling: "greedy",
                                        styles: [
                                            {
                                                "elementType": "geometry",
                                                "stylers": [
                                                    {
                                                        "color": "#242f3e"
                                                    }
                                                ]
                                            },
                                            {
                                                "elementType": "labels.text.stroke",
                                                "stylers": [
                                                    {
                                                        "lightness": -80
                                                    }
                                                ]
                                            },
                                            {
                                                "featureType": "administrative.locality",
                                                "elementType": "labels.text.fill",
                                                "stylers": [
                                                    {
                                                        "color": "#746855"
                                                    }
                                                ]
                                            },
                                            {
                                                "featureType": "poi",
                                                "elementType": "labels.text.fill",
                                                "stylers": [
                                                    {
                                                        "color": "#d59563"
                                                    }
                                                ]
                                            },
                                            {
                                                "featureType": "poi.park",
                                                "elementType": "geometry",
                                                "stylers": [
                                                    {
                                                        "color": "#263c3f"
                                                    }
                                                ]
                                            },
                                            {
                                                "featureType": "poi.park",
                                                "elementType": "labels.text.fill",
                                                "stylers": [
                                                    {
                                                        "color": "#6b9a76"
                                                    }
                                                ]
                                            },
                                            {
                                                "featureType": "road",
                                                "elementType": "geometry",
                                                "stylers": [
                                                    {
                                                        "color": "#38414e"
                                                    }
                                                ]
                                            },
                                            {
                                                "featureType": "road",
                                                "elementType": "geometry.stroke",
                                                "stylers": [
                                                    {
                                                        "color": "#212a37"
                                                    }
                                                ]
                                            },
                                            {
                                                "featureType": "road",
                                                "elementType": "labels.text.fill",
                                                "stylers": [
                                                    {
                                                        "color": "#9ca5b3"
                                                    }
                                                ]
                                            },
                                            {
                                                "featureType": "road.highway",
                                                "elementType": "geometry",
                                                "stylers": [
                                                    {
                                                        "color": "#746855"
                                                    }
                                                ]
                                            },
                                            {
                                                "featureType": "road.highway",
                                                "elementType": "geometry.stroke",
                                                "stylers": [
                                                    {
                                                        "color": "#1f2835"
                                                    }
                                                ]
                                            },
                                            {
                                                "featureType": "road.highway",
                                                "elementType": "labels.text.fill",
                                                "stylers": [
                                                    {
                                                        "color": "#f3d19c"
                                                    }
                                                ]
                                            },
                                            {
                                                "featureType": "transit",
                                                "elementType": "geometry",
                                                "stylers": [
                                                    {
                                                        "color": "#2f3948"
                                                    }
                                                ]
                                            },
                                            {
                                                "featureType": "transit.station",
                                                "elementType": "labels.text.fill",
                                                "stylers": [
                                                    {
                                                        "color": "#d59563"
                                                    }
                                                ]
                                            },
                                            {
                                                "featureType": "water",
                                                "elementType": "geometry",
                                                "stylers": [
                                                    {
                                                        "color": "#17263c"
                                                    }
                                                ]
                                            },
                                            {
                                                "featureType": "water",
                                                "elementType": "labels.text.fill",
                                                "stylers": [
                                                    {
                                                        "color": "#515c6d"
                                                    }
                                                ]
                                            },
                                            {
                                                "featureType": "water",
                                                "elementType": "labels.text.stroke",
                                                "stylers": [
                                                    {
                                                        "lightness": -20
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    onLoad: (map)=>{
                                        mapRef.current = map;
                                        if (userPosition) {
                                            // Add a small delay to ensure the marker library is fully loaded
                                            setTimeout(()=>{
                                                updateUserMarker();
                                            }, 500);
                                        }
                                    },
                                    onDragEnd: handleMapCenterChanged,
                                    onZoomChanged: handleMapCenterChanged
                                }, void 0, false, {
                                    fileName: "[project]/src/app/map/page.tsx",
                                    lineNumber: 296,
                                    columnNumber: 9
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/map/page.tsx",
                                lineNumber: 295,
                                columnNumber: 7
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/map/page.tsx",
                        lineNumber: 276,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            flex: 1,
                            background: "#1e3c72",
                            borderRadius: "15px",
                            padding: "20px",
                            display: "flex",
                            flexDirection: "column"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                style: {
                                    fontSize: "24px",
                                    marginBottom: "20px"
                                },
                                children: [
                                    "COMMON TRANSIT (",
                                    routes.length,
                                    " routes)"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/map/page.tsx",
                                lineNumber: 411,
                                columnNumber: 7
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    flex: 1,
                                    overflowY: "auto"
                                },
                                children: routes.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: [
                                        "No nearby routes found. ",
                                        locationError ? `Error: ${locationError}` : ''
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/map/page.tsx",
                                    lineNumber: 414,
                                    columnNumber: 11
                                }, this) : routes.map((route)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            background: "linear-gradient(to right, #1e3c72, #2a5298)",
                                            padding: "15px",
                                            borderRadius: "10px",
                                            marginBottom: "10px",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "space-between"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            fontSize: "18px",
                                                            fontWeight: "bold"
                                                        },
                                                        children: [
                                                            "OCTA BUS ",
                                                            route.route_id
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/map/page.tsx",
                                                        lineNumber: 419,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            fontSize: "14px",
                                                            marginTop: "5px"
                                                        },
                                                        children: route.route_name
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/map/page.tsx",
                                                        lineNumber: 420,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            fontSize: "12px",
                                                            marginTop: "5px"
                                                        },
                                                        children: "10 Minutes Arrival Prediction: 13 Minutes"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/map/page.tsx",
                                                        lineNumber: 421,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/map/page.tsx",
                                                lineNumber: 418,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    fontSize: "24px"
                                                },
                                                children: "➔"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/map/page.tsx",
                                                lineNumber: 423,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, route.route_id, true, {
                                        fileName: "[project]/src/app/map/page.tsx",
                                        lineNumber: 417,
                                        columnNumber: 13
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/app/map/page.tsx",
                                lineNumber: 412,
                                columnNumber: 7
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/map/page.tsx",
                        lineNumber: 410,
                        columnNumber: 5
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/map/page.tsx",
                lineNumber: 274,
                columnNumber: 3
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/map/page.tsx",
        lineNumber: 266,
        columnNumber: 9
    }, this);
};
const __TURBOPACK__default__export__ = Page;
}}),

};

//# sourceMappingURL=%5Broot%20of%20the%20server%5D__b671ba53._.js.map