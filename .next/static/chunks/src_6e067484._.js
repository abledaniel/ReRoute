(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/src_6e067484._.js", {

"[project]/src/lib/supabase.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "getStopsByRoute": (()=>getStopsByRoute),
    "supabase": (()=>supabase)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@supabase/supabase-js/dist/module/index.js [app-client] (ecmascript) <locals>");
;
const supabaseUrl = ("TURBOPACK compile-time value", "https://txbajiybbjmucnmiwzgs.supabase.co");
const supabaseAnonKey = ("TURBOPACK compile-time value", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR4YmFqaXliYmptdWNubWl3emdzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDExMzQ5ODYsImV4cCI6MjA1NjcxMDk4Nn0.ayMlKZ5chrbmhxZUjgzYFIyRv8jnEYLoC_JclQNRCOM");
if ("TURBOPACK compile-time falsy", 0) {
    "TURBOPACK unreachable";
}
const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createClient"])(supabaseUrl, supabaseAnonKey);
async function getStopsByRoute(routeId) {
    if (!routeId) {
        console.error("Route ID is required.");
        return [];
    }
    let { data, error } = await supabase.rpc('get', {
        route_num: '123',
        direction_num: 0
    });
    if (error) {
        console.error('Error fetching stops:', error.message, error.details, error.code);
        return [];
    }
    if (!data) return [];
    return data.map((record)=>({
            stop_id: record.stop_id,
            route_stop_order: record.route_stop_order,
            stop_name: record.stop_name,
            stop_lat: record.stop_lat,
            stop_lon: record.stop_lon
        }));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/map/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$google$2d$maps$2f$api$2f$dist$2f$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-google-maps/api/dist/esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/supabase.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const Page = ()=>{
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [userPosition, setUserPosition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const defaultPosition = {
        lat: 33.878840,
        lng: -117.884973
    }; // Default map center
    const [busStops, setBusStops] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [searchQuery, setSearchQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [routes, setRoutes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [locationError, setLocationError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const mapRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const markerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [mapCenter, setMapCenter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(defaultPosition);
    const { isLoaded } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$google$2d$maps$2f$api$2f$dist$2f$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useJsApiLoader"])({
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
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Page.useEffect": ()=>{
            if (isLoaded && userPosition) {
                // Add a small delay to ensure the marker library is fully loaded
                const timer = setTimeout({
                    "Page.useEffect.timer": ()=>{
                        updateUserMarker();
                    }
                }["Page.useEffect.timer"], 500);
                return ({
                    "Page.useEffect": ()=>clearTimeout(timer)
                })["Page.useEffect"];
            }
        }
    }["Page.useEffect"], [
        isLoaded,
        userPosition
    ]);
    // Fetch routes when map center changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Page.useEffect": ()=>{
            if (isLoaded && mapCenter) {
                fetchRoutes(mapCenter.lat, mapCenter.lng, setRoutes);
            }
        }
    }["Page.useEffect"], [
        isLoaded,
        mapCenter
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Page.useEffect": ()=>{
            // Immediately fetch routes with default position
            fetchRoutes(defaultPosition.lat, defaultPosition.lng, setRoutes);
            const fetchStopsData = {
                "Page.useEffect.fetchStopsData": async ()=>{
                    try {
                        const response = await fetch("/stops.csv");
                        const stopsData = await response.text();
                        const stops = [];
                        const rows = stopsData.split("\n");
                        rows.slice(1).forEach({
                            "Page.useEffect.fetchStopsData": (row)=>{
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
                            }
                        }["Page.useEffect.fetchStopsData"]);
                        setBusStops(stops);
                    } catch (error) {
                        console.error("Error fetching stop data:", error);
                    }
                }
            }["Page.useEffect.fetchStopsData"];
            fetchStopsData();
            // Get initial position
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(handleLocationUpdate, {
                    "Page.useEffect": (error)=>{
                        setLocationError(`Error getting location: ${error.message}`);
                        console.error("Error getting initial location:", error);
                    }
                }["Page.useEffect"], {
                    enableHighAccuracy: true,
                    maximumAge: 30000,
                    timeout: 27000
                });
                // Set up continuous watching with more relaxed parameters
                const watchId = navigator.geolocation.watchPosition(handleLocationUpdate, {
                    "Page.useEffect.watchId": (error)=>{
                        setLocationError(`Error tracking location: ${error.message}`);
                        console.error("Error watching location:", error);
                    }
                }["Page.useEffect.watchId"], {
                    enableHighAccuracy: true,
                    maximumAge: 60000,
                    timeout: 30000
                });
                return ({
                    "Page.useEffect": ()=>{
                        navigator.geolocation.clearWatch(watchId);
                        // Clean up marker when component unmounts
                        if (markerRef.current) {
                            markerRef.current.map = null;
                        }
                    }
                })["Page.useEffect"];
            } else {
                setLocationError("Geolocation is not supported by your browser");
            }
        }
    }["Page.useEffect"], []);
    const fetchRoutes = async (lat, lng, setRoutes)=>{
        try {
            // Format coordinates to 9 decimal places
            const formattedLat = Number(lat.toFixed(9));
            const formattedLng = Number(lng.toFixed(9));
            // Log the request for debugging
            console.log(`Fetching routes for lat: ${formattedLat}, lon: ${formattedLng}`);
            // Find stops near the user's location
            const { data: nearbyStops, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('stops').select('stop_id, stop_name, stop_lat, stop_lon').filter('stop_lat', 'gte', formattedLat - 0.01).filter('stop_lat', 'lte', formattedLat + 0.01).filter('stop_lon', 'gte', formattedLng - 0.01).filter('stop_lon', 'lte', formattedLng + 0.01);
            if (error) {
                console.error("Error fetching nearby stops:", error);
                setRoutes([]);
                return;
            }
            if (!nearbyStops || nearbyStops.length === 0) {
                console.log("No nearby stops found");
                setRoutes([]);
                return;
            }
            console.log(`Found ${nearbyStops.length} nearby stops`);
            // Get unique route IDs from stop_times for these stops
            const stopIds = nearbyStops.map((stop)=>stop.stop_id);
            const { data: stopTimes, error: stopTimesError } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('stop_times').select('trip_id, stop_id').in('stop_id', stopIds).limit(100);
            if (stopTimesError) {
                console.error("Error fetching stop times:", stopTimesError);
                setRoutes([]);
                return;
            }
            if (!stopTimes || stopTimes.length === 0) {
                console.log("No stop times found for nearby stops");
                setRoutes([]);
                return;
            }
            // Get unique trip IDs
            const tripIds = [
                ...new Set(stopTimes.map((st)=>st.trip_id))
            ];
            // Get routes from trips
            const { data: trips, error: tripsError } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('trips').select('route_id, trip_id').in('trip_id', tripIds).limit(100);
            if (tripsError) {
                console.error("Error fetching trips:", tripsError);
                setRoutes([]);
                return;
            }
            if (!trips || trips.length === 0) {
                console.log("No trips found for stop times");
                setRoutes([]);
                return;
            }
            // Get unique route IDs
            const routeIds = [
                ...new Set(trips.map((trip)=>trip.route_id))
            ];
            // Get route details
            const { data: routes, error: routesError } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('routes').select('route_id, route_short_name, route_long_name').in('route_id', routeIds).limit(20);
            if (routesError) {
                console.error("Error fetching routes:", routesError);
                setRoutes([]);
                return;
            }
            if (!routes || routes.length === 0) {
                console.log("No routes found for trips");
                setRoutes([]);
                return;
            }
            // Format routes for display
            const formattedRoutes = routes.map((route)=>({
                    route_id: route.route_id,
                    route_name: route.route_short_name || route.route_long_name || `Route ${route.route_id}`,
                    route_url: '#'
                }));
            console.log(`Found ${formattedRoutes.length} nearby routes:`, formattedRoutes);
            setRoutes(formattedRoutes);
        } catch (error) {
            console.error("Error fetching routes:", error);
            setRoutes([]);
        }
    };
    // Function to handle route click
    const handleRouteClick = (routeId)=>{
        router.push(`/route/${routeId}`);
    };
    if (!isLoaded) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: "Loading..."
        }, void 0, false, {
            fileName: "[project]/src/app/map/page.tsx",
            lineNumber: 321,
            columnNumber: 16
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            height: "100vh",
            width: "100%",
            background: "linear-gradient(to bottom right, #1e3c72, #2a5298)",
            color: "#fff",
            display: "flex",
            flexDirection: "column"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "20px"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        style: {
                            fontSize: "48px",
                            fontWeight: "bold"
                        },
                        children: "REROUTE"
                    }, void 0, false, {
                        fileName: "[project]/src/app/map/page.tsx",
                        lineNumber: 328,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                        lineNumber: 329,
                        columnNumber: 5
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/map/page.tsx",
                lineNumber: 327,
                columnNumber: 3
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: "flex",
                    flex: 1,
                    padding: "20px"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            flex: 1,
                            marginRight: "20px",
                            display: "flex",
                            flexDirection: "column"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
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
                                lineNumber: 337,
                                columnNumber: 7
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    flex: 1,
                                    borderRadius: "15px",
                                    overflow: "hidden"
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$google$2d$maps$2f$api$2f$dist$2f$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GoogleMap"], {
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
                                    lineNumber: 355,
                                    columnNumber: 9
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/map/page.tsx",
                                lineNumber: 354,
                                columnNumber: 7
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/map/page.tsx",
                        lineNumber: 335,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            flex: 1,
                            background: "#1e3c72",
                            borderRadius: "15px",
                            padding: "20px",
                            display: "flex",
                            flexDirection: "column"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                    marginBottom: "20px"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        style: {
                                            fontSize: "24px"
                                        },
                                        children: [
                                            "COMMON TRANSIT (",
                                            routes.length,
                                            " routes)"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/map/page.tsx",
                                        lineNumber: 471,
                                        columnNumber: 9
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>router.push('/routes'),
                                        style: {
                                            background: "rgba(255, 255, 255, 0.1)",
                                            border: "none",
                                            color: "#fff",
                                            padding: "8px 12px",
                                            borderRadius: "6px",
                                            cursor: "pointer",
                                            fontSize: "14px",
                                            transition: "background 0.2s"
                                        },
                                        onMouseOver: (e)=>{
                                            e.currentTarget.style.background = "rgba(255, 255, 255, 0.2)";
                                        },
                                        onMouseOut: (e)=>{
                                            e.currentTarget.style.background = "rgba(255, 255, 255, 0.1)";
                                        },
                                        children: "View All Routes"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/map/page.tsx",
                                        lineNumber: 472,
                                        columnNumber: 9
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/map/page.tsx",
                                lineNumber: 470,
                                columnNumber: 7
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    flex: 1,
                                    overflowY: "auto"
                                },
                                children: routes.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: [
                                        "No nearby routes found. ",
                                        locationError ? `Error: ${locationError}` : ''
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/map/page.tsx",
                                    lineNumber: 496,
                                    columnNumber: 11
                                }, this) : routes.map((route)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            background: "linear-gradient(to right, #1e3c72, #2a5298)",
                                            padding: "15px",
                                            borderRadius: "10px",
                                            marginBottom: "10px",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "space-between",
                                            cursor: "pointer",
                                            transition: "transform 0.2s, box-shadow 0.2s",
                                            boxShadow: "0 2px 4px rgba(0,0,0,0.1)"
                                        },
                                        onClick: ()=>handleRouteClick(route.route_id),
                                        onMouseOver: (e)=>{
                                            e.currentTarget.style.transform = "translateY(-2px)";
                                            e.currentTarget.style.boxShadow = "0 4px 8px rgba(0,0,0,0.2)";
                                        },
                                        onMouseOut: (e)=>{
                                            e.currentTarget.style.transform = "translateY(0)";
                                            e.currentTarget.style.boxShadow = "0 2px 4px rgba(0,0,0,0.1)";
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                                        lineNumber: 524,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            fontSize: "14px",
                                                            marginTop: "5px"
                                                        },
                                                        children: route.route_name
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/map/page.tsx",
                                                        lineNumber: 525,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            fontSize: "12px",
                                                            marginTop: "5px"
                                                        },
                                                        children: "10 Minutes Arrival Prediction: 13 Minutes"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/map/page.tsx",
                                                        lineNumber: 526,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/map/page.tsx",
                                                lineNumber: 523,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    fontSize: "24px"
                                                },
                                                children: "➔"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/map/page.tsx",
                                                lineNumber: 528,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, route.route_id, true, {
                                        fileName: "[project]/src/app/map/page.tsx",
                                        lineNumber: 499,
                                        columnNumber: 13
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/app/map/page.tsx",
                                lineNumber: 494,
                                columnNumber: 7
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/map/page.tsx",
                        lineNumber: 469,
                        columnNumber: 5
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/map/page.tsx",
                lineNumber: 333,
                columnNumber: 3
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/map/page.tsx",
        lineNumber: 325,
        columnNumber: 9
    }, this);
};
_s(Page, "/oVOKPZr+9GIt+MTeDpOU2Ap914=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$google$2d$maps$2f$api$2f$dist$2f$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useJsApiLoader"]
    ];
});
_c = Page;
const __TURBOPACK__default__export__ = Page;
var _c;
__turbopack_context__.k.register(_c, "Page");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_6e067484._.js.map