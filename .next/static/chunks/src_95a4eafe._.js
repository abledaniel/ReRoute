(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/src_95a4eafe._.js", {

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
async function getStopsByRoute(routeId, direction = 0) {
    if (!routeId) {
        console.error("Route ID is required.");
        return [];
    }
    let { data, error } = await supabase.rpc('get', {
        route_num: routeId,
        direction_num: direction
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
"[project]/src/app/route/[routeid]/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$google$2d$maps$2f$api$2f$dist$2f$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-google-maps/api/dist/esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/supabase.ts [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '@/components/RouteMap'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '@/components/StopsList'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '@/components/VehiclesList'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
const RoutePage = ()=>{
    _s();
    const params = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const routeId = params?.routeid;
    const [route, setRoute] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [stops, setStops] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [stopsDirection0, setStopsDirection0] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [stopsDirection1, setStopsDirection1] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [activeDirection, setActiveDirection] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [mapCenter, setMapCenter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        lat: 33.878840,
        lng: -117.884973
    }); // Default center
    const [routePath, setRoutePath] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const mapRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [selectedStop, setSelectedStop] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // Add state for live vehicles
    const [vehicles, setVehicles] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [selectedVehicle, setSelectedVehicle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [lastUpdated, setLastUpdated] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("Never");
    const { isLoaded } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$google$2d$maps$2f$api$2f$dist$2f$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useJsApiLoader"])({
        googleMapsApiKey: ("TURBOPACK compile-time value", "AIzaSyC9aGz6l-J4oy2c0bNSARq35HF4OgNYZBI"),
        libraries: [
            "places",
            "maps"
        ]
    });
    // Function to fetch live vehicle positions
    const fetchVehiclePositions = async ()=>{
        try {
            // Fetch from the Flask API directly
            const response = await fetch(`http://127.0.0.1:5000/api/vehicle-positions/${routeId}`);
            if (!response.ok) {
                throw new Error(`Failed to fetch vehicle data: ${response.status}`);
            }
            const data = await response.json();
            // Filter vehicles to only include those for the current route
            const routeVehicles = data.vehicles || [];
            setVehicles(routeVehicles);
            // Update last updated timestamp
            const now = new Date();
            setLastUpdated(now.toLocaleTimeString());
            console.log(`Updated ${routeVehicles.length} vehicles for route ${routeId}`);
        } catch (err) {
            console.error('Error fetching vehicle positions:', err);
        // Don't set error state here to avoid disrupting the UI
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "RoutePage.useEffect": ()=>{
            const fetchRouteData = {
                "RoutePage.useEffect.fetchRouteData": async ()=>{
                    try {
                        setLoading(true);
                        setError(null);
                        // Fetch route details from Transit.land API
                        const apiKey = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_TRANSIT_LAND_API_KEY || '4i0HhaRLe0jBSotDmxETH05X2iwrgNcJ';
                        const response = await fetch(`https://transit.land/api/v2/rest/routes/r-9qh0-${routeId}?api_key=${apiKey}`);
                        if (!response.ok) {
                            throw new Error(`Failed to fetch route details: ${response.status} ${response.statusText}`);
                        }
                        const data = await response.json();
                        console.log('Route data:', data);
                        if (data.routes && data.routes.length > 0) {
                            const routeData = data.routes[0];
                            setRoute(routeData);
                            // Extract route path coordinates
                            if (routeData.geometry && routeData.geometry.coordinates) {
                                const path = routeData.geometry.coordinates[0].map({
                                    "RoutePage.useEffect.fetchRouteData.path": (coord)=>({
                                            lat: coord[1],
                                            lng: coord[0]
                                        })
                                }["RoutePage.useEffect.fetchRouteData.path"]);
                                setRoutePath(path);
                                // Set map center to the first coordinate
                                if (path.length > 0) {
                                    setMapCenter(path[0]);
                                }
                            }
                            // Process route_stops from the API response
                            if (routeData.route_stops && routeData.route_stops.length > 0) {
                                // Get stops from Supabase for both directions
                                const stopsDirection0Response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getStopsByRoute"])(routeId, 0);
                                const stopsDirection1Response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getStopsByRoute"])(routeId, 1);
                                // Create maps of Supabase stops by stop_id for quick lookup
                                const supabaseStopsDirection0 = new Map(stopsDirection0Response.map({
                                    "RoutePage.useEffect.fetchRouteData": (stop)=>[
                                            stop.stop_id,
                                            stop
                                        ]
                                }["RoutePage.useEffect.fetchRouteData"]));
                                const supabaseStopsDirection1 = new Map(stopsDirection1Response.map({
                                    "RoutePage.useEffect.fetchRouteData": (stop)=>[
                                            stop.stop_id,
                                            stop
                                        ]
                                }["RoutePage.useEffect.fetchRouteData"]));
                                // Process Transit.land stops and match with Supabase stops
                                const processedStopsDirection0 = [];
                                const processedStopsDirection1 = [];
                                // Process each stop from Transit.land
                                routeData.route_stops.forEach({
                                    "RoutePage.useEffect.fetchRouteData": (routeStop, index)=>{
                                        const stop = routeStop.stop;
                                        const stopId = stop.stop_id;
                                        // Create a processed stop object
                                        const processedStop = {
                                            stop_id: stopId,
                                            stop_name: stop.stop_name,
                                            stop_lat: stop.geometry.coordinates[1].toString(),
                                            stop_lon: stop.geometry.coordinates[0].toString()
                                        };
                                        // Check if this stop exists in Supabase for direction 0
                                        if (supabaseStopsDirection0.has(stopId)) {
                                            processedStopsDirection0.push(processedStop);
                                        }
                                        // Check if this stop exists in Supabase for direction 1
                                        if (supabaseStopsDirection1.has(stopId)) {
                                            processedStopsDirection1.push(processedStop);
                                        }
                                    }
                                }["RoutePage.useEffect.fetchRouteData"]);
                                // Set the stops for each direction
                                setStopsDirection0(processedStopsDirection0);
                                setStopsDirection1(processedStopsDirection1);
                                // Set all stops for backward compatibility
                                setStops([
                                    ...processedStopsDirection0,
                                    ...processedStopsDirection1
                                ]);
                            } else {
                                // Fallback to Supabase if no route_stops in API response
                                // Fetch stops for both directions
                                const stopsDirection0Response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getStopsByRoute"])(routeId, 0);
                                const stopsDirection1Response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getStopsByRoute"])(routeId, 1);
                                setStopsDirection0(stopsDirection0Response);
                                setStopsDirection1(stopsDirection1Response);
                                // Set all stops for backward compatibility
                                setStops([
                                    ...stopsDirection0Response,
                                    ...stopsDirection1Response
                                ]);
                            }
                        } else {
                            throw new Error('Route not found');
                        }
                    } catch (err) {
                        console.error('Error fetching route details:', err);
                        setError(err instanceof Error ? err.message : 'Failed to fetch route details');
                    } finally{
                        setLoading(false);
                    }
                }
            }["RoutePage.useEffect.fetchRouteData"];
            fetchRouteData();
        }
    }["RoutePage.useEffect"], [
        routeId
    ]);
    // Set up polling for vehicle positions
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "RoutePage.useEffect": ()=>{
            // Initial fetch
            fetchVehiclePositions();
            // Set up polling every 10 seconds
            const intervalId = setInterval(fetchVehiclePositions, 10000);
            // Clean up interval on component unmount
            return ({
                "RoutePage.useEffect": ()=>clearInterval(intervalId)
            })["RoutePage.useEffect"];
        }
    }["RoutePage.useEffect"], [
        routeId
    ]);
    const handleMapLoad = (map)=>{
        mapRef.current = map;
    };
    if (!isLoaded) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                minHeight: "100vh",
                background: "linear-gradient(to right, #1e3c72, #2a5298)",
                color: "white",
                padding: "32px"
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    maxWidth: "1024px",
                    margin: "0 auto"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        display: "flex",
                        alignItems: "center",
                        marginBottom: "32px"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/map",
                            style: {
                                marginRight: "16px",
                                color: "#93c5fd",
                                textDecoration: "none"
                            },
                            children: "← Back to Map"
                        }, void 0, false, {
                            fileName: "[project]/src/app/route/[routeid]/page.tsx",
                            lineNumber: 203,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            style: {
                                fontSize: "24px",
                                fontWeight: "bold"
                            },
                            children: "Loading map..."
                        }, void 0, false, {
                            fileName: "[project]/src/app/route/[routeid]/page.tsx",
                            lineNumber: 206,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/route/[routeid]/page.tsx",
                    lineNumber: 202,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/route/[routeid]/page.tsx",
                lineNumber: 201,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/route/[routeid]/page.tsx",
            lineNumber: 195,
            columnNumber: 7
        }, this);
    }
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                minHeight: "100vh",
                background: "linear-gradient(to right, #1e3c72, #2a5298)",
                color: "white",
                padding: "32px"
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    maxWidth: "1024px",
                    margin: "0 auto"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: "flex",
                            alignItems: "center",
                            marginBottom: "32px"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/map",
                                style: {
                                    marginRight: "16px",
                                    color: "#93c5fd",
                                    textDecoration: "none"
                                },
                                children: "← Back to Map"
                            }, void 0, false, {
                                fileName: "[project]/src/app/route/[routeid]/page.tsx",
                                lineNumber: 223,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                style: {
                                    fontSize: "24px",
                                    fontWeight: "bold"
                                },
                                children: "Loading route details..."
                            }, void 0, false, {
                                fileName: "[project]/src/app/route/[routeid]/page.tsx",
                                lineNumber: 226,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/route/[routeid]/page.tsx",
                        lineNumber: 222,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            animation: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    height: "32px",
                                    background: "#1e3c72",
                                    borderRadius: "6px",
                                    width: "33%",
                                    marginBottom: "16px"
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/app/route/[routeid]/page.tsx",
                                lineNumber: 229,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    height: "16px",
                                    background: "#1e3c72",
                                    borderRadius: "6px",
                                    width: "66%",
                                    marginBottom: "8px"
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/app/route/[routeid]/page.tsx",
                                lineNumber: 230,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    height: "16px",
                                    background: "#1e3c72",
                                    borderRadius: "6px",
                                    width: "50%",
                                    marginBottom: "32px"
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/app/route/[routeid]/page.tsx",
                                lineNumber: 231,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: "16px"
                                },
                                children: [
                                    1,
                                    2,
                                    3,
                                    4,
                                    5
                                ].map((i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            height: "64px",
                                            background: "#1e3c72",
                                            borderRadius: "6px"
                                        }
                                    }, i, false, {
                                        fileName: "[project]/src/app/route/[routeid]/page.tsx",
                                        lineNumber: 234,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/app/route/[routeid]/page.tsx",
                                lineNumber: 232,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/route/[routeid]/page.tsx",
                        lineNumber: 228,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/route/[routeid]/page.tsx",
                lineNumber: 221,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/route/[routeid]/page.tsx",
            lineNumber: 215,
            columnNumber: 7
        }, this);
    }
    if (error) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                minHeight: "100vh",
                background: "linear-gradient(to right, #1e3c72, #2a5298)",
                color: "white",
                padding: "32px"
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    maxWidth: "1024px",
                    margin: "0 auto"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: "flex",
                            alignItems: "center",
                            marginBottom: "32px"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/map",
                                style: {
                                    marginRight: "16px",
                                    color: "#93c5fd",
                                    textDecoration: "none"
                                },
                                children: "← Back to Map"
                            }, void 0, false, {
                                fileName: "[project]/src/app/route/[routeid]/page.tsx",
                                lineNumber: 253,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                style: {
                                    fontSize: "24px",
                                    fontWeight: "bold"
                                },
                                children: "Error"
                            }, void 0, false, {
                                fileName: "[project]/src/app/route/[routeid]/page.tsx",
                                lineNumber: 256,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/route/[routeid]/page.tsx",
                        lineNumber: 252,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            background: "rgba(220, 38, 38, 0.5)",
                            padding: "24px",
                            borderRadius: "10px"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    fontSize: "20px",
                                    marginBottom: "16px"
                                },
                                children: "Failed to load route details"
                            }, void 0, false, {
                                fileName: "[project]/src/app/route/[routeid]/page.tsx",
                                lineNumber: 259,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    color: "#fca5a5"
                                },
                                children: error
                            }, void 0, false, {
                                fileName: "[project]/src/app/route/[routeid]/page.tsx",
                                lineNumber: 260,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>router.push('/map'),
                                style: {
                                    marginTop: "24px",
                                    padding: "8px 16px",
                                    background: "#2563eb",
                                    borderRadius: "6px",
                                    border: "none",
                                    color: "white",
                                    cursor: "pointer",
                                    transition: "background 0.2s"
                                },
                                onMouseOver: (e)=>{
                                    e.currentTarget.style.background = "#1d4ed8";
                                },
                                onMouseOut: (e)=>{
                                    e.currentTarget.style.background = "#2563eb";
                                },
                                children: "Return to Map"
                            }, void 0, false, {
                                fileName: "[project]/src/app/route/[routeid]/page.tsx",
                                lineNumber: 261,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/route/[routeid]/page.tsx",
                        lineNumber: 258,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/route/[routeid]/page.tsx",
                lineNumber: 251,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/route/[routeid]/page.tsx",
            lineNumber: 245,
            columnNumber: 7
        }, this);
    }
    if (!route) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                minHeight: "100vh",
                background: "linear-gradient(to right, #1e3c72, #2a5298)",
                color: "white",
                padding: "32px"
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    maxWidth: "1024px",
                    margin: "0 auto"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: "flex",
                            alignItems: "center",
                            marginBottom: "32px"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/map",
                                style: {
                                    marginRight: "16px",
                                    color: "#93c5fd",
                                    textDecoration: "none"
                                },
                                children: "← Back to Map"
                            }, void 0, false, {
                                fileName: "[project]/src/app/route/[routeid]/page.tsx",
                                lineNumber: 298,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                style: {
                                    fontSize: "24px",
                                    fontWeight: "bold"
                                },
                                children: "Route Not Found"
                            }, void 0, false, {
                                fileName: "[project]/src/app/route/[routeid]/page.tsx",
                                lineNumber: 301,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/route/[routeid]/page.tsx",
                        lineNumber: 297,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            background: "rgba(30, 58, 138, 0.5)",
                            padding: "24px",
                            borderRadius: "10px"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    fontSize: "20px",
                                    marginBottom: "16px"
                                },
                                children: "The requested route could not be found"
                            }, void 0, false, {
                                fileName: "[project]/src/app/route/[routeid]/page.tsx",
                                lineNumber: 304,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>router.push('/map'),
                                style: {
                                    marginTop: "24px",
                                    padding: "8px 16px",
                                    background: "#2563eb",
                                    borderRadius: "6px",
                                    border: "none",
                                    color: "white",
                                    cursor: "pointer",
                                    transition: "background 0.2s"
                                },
                                onMouseOver: (e)=>{
                                    e.currentTarget.style.background = "#1d4ed8";
                                },
                                onMouseOut: (e)=>{
                                    e.currentTarget.style.background = "#2563eb";
                                },
                                children: "Return to Map"
                            }, void 0, false, {
                                fileName: "[project]/src/app/route/[routeid]/page.tsx",
                                lineNumber: 305,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/route/[routeid]/page.tsx",
                        lineNumber: 303,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/route/[routeid]/page.tsx",
                lineNumber: 296,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/route/[routeid]/page.tsx",
            lineNumber: 290,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            minHeight: "100vh",
            background: "linear-gradient(to right, #1e3c72, #2a5298)",
            color: "white",
            padding: "32px"
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                maxWidth: "1400px",
                margin: "0 auto"
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        display: "flex",
                        alignItems: "center",
                        marginBottom: "32px"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/map",
                            style: {
                                marginRight: "16px",
                                color: "#93c5fd",
                                textDecoration: "none"
                            },
                            children: "← Back to Map"
                        }, void 0, false, {
                            fileName: "[project]/src/app/route/[routeid]/page.tsx",
                            lineNumber: 341,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            style: {
                                fontSize: "24px",
                                fontWeight: "bold"
                            },
                            children: [
                                "OCTA BUS ",
                                route.route_id
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/route/[routeid]/page.tsx",
                            lineNumber: 344,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/route/[routeid]/page.tsx",
                    lineNumber: 340,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        display: "flex",
                        gap: "32px"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                flex: "2",
                                height: "calc(100vh - 150px)",
                                borderRadius: "10px",
                                overflow: "hidden",
                                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                                display: "flex",
                                flexDirection: "column"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(RouteMap, {
                                    route: route,
                                    mapCenter: mapCenter,
                                    routePath: routePath,
                                    activeDirection: activeDirection,
                                    stopsDirection0: stopsDirection0,
                                    stopsDirection1: stopsDirection1,
                                    vehicles: vehicles,
                                    selectedStop: selectedStop,
                                    selectedVehicle: selectedVehicle,
                                    onMapLoad: handleMapLoad,
                                    onStopSelect: setSelectedStop,
                                    onVehicleSelect: setSelectedVehicle,
                                    onStopClose: ()=>setSelectedStop(null),
                                    onVehicleClose: ()=>setSelectedVehicle(null)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/route/[routeid]/page.tsx",
                                    lineNumber: 359,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        background: "rgba(0, 0, 0, 0.7)",
                                        padding: "8px 16px",
                                        display: "flex",
                                        justifyContent: "space-between",
                                        alignItems: "center",
                                        borderBottomLeftRadius: "10px",
                                        borderBottomRightRadius: "10px"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        color: "#FF0000",
                                                        marginRight: "8px"
                                                    },
                                                    children: "●"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/route/[routeid]/page.tsx",
                                                    lineNumber: 387,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: [
                                                        "Live Vehicles: ",
                                                        vehicles.length
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/route/[routeid]/page.tsx",
                                                    lineNumber: 388,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/route/[routeid]/page.tsx",
                                            lineNumber: 386,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: [
                                                        "Last Updated: ",
                                                        lastUpdated
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/route/[routeid]/page.tsx",
                                                    lineNumber: 391,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: fetchVehiclePositions,
                                                    style: {
                                                        marginLeft: "16px",
                                                        padding: "4px 8px",
                                                        background: "rgba(255, 255, 255, 0.1)",
                                                        border: "none",
                                                        borderRadius: "4px",
                                                        color: "white",
                                                        cursor: "pointer"
                                                    },
                                                    children: "Refresh"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/route/[routeid]/page.tsx",
                                                    lineNumber: 392,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/route/[routeid]/page.tsx",
                                            lineNumber: 390,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/route/[routeid]/page.tsx",
                                    lineNumber: 377,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/route/[routeid]/page.tsx",
                            lineNumber: 350,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                flex: "1",
                                display: "flex",
                                flexDirection: "column",
                                gap: "32px",
                                overflowY: "auto",
                                maxHeight: "calc(100vh - 150px)"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        background: "linear-gradient(to right, #1e3c72, #2a5298)",
                                        padding: "24px",
                                        borderRadius: "10px",
                                        boxShadow: "0 2px 4px rgba(0,0,0,0.1)"
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            padding: "20px",
                                            background: "rgba(30, 60, 114, 0.95)",
                                            borderRadius: "8px",
                                            boxShadow: "0 2px 4px rgba(0,0,0,0.1)"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                style: {
                                                    fontSize: "20px",
                                                    fontWeight: "bold",
                                                    marginBottom: "8px"
                                                },
                                                children: route.route_long_name
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/route/[routeid]/page.tsx",
                                                lineNumber: 424,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                style: {
                                                    color: "#93c5fd",
                                                    marginBottom: "16px"
                                                },
                                                children: [
                                                    "Route ID: ",
                                                    route.route_id
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/route/[routeid]/page.tsx",
                                                lineNumber: 425,
                                                columnNumber: 17
                                            }, this),
                                            route.route_desc && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                style: {
                                                    marginBottom: "16px"
                                                },
                                                children: route.route_desc
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/route/[routeid]/page.tsx",
                                                lineNumber: 427,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/route/[routeid]/page.tsx",
                                        lineNumber: 418,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/route/[routeid]/page.tsx",
                                    lineNumber: 412,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(VehiclesList, {
                                    vehicles: vehicles,
                                    onVehicleSelect: setSelectedVehicle,
                                    onRefresh: fetchVehiclePositions
                                }, void 0, false, {
                                    fileName: "[project]/src/app/route/[routeid]/page.tsx",
                                    lineNumber: 433,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StopsList, {
                                    activeDirection: activeDirection,
                                    stopsDirection0: stopsDirection0,
                                    stopsDirection1: stopsDirection1,
                                    onStopSelect: setSelectedStop,
                                    onDirectionChange: setActiveDirection
                                }, void 0, false, {
                                    fileName: "[project]/src/app/route/[routeid]/page.tsx",
                                    lineNumber: 440,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/route/[routeid]/page.tsx",
                            lineNumber: 411,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/route/[routeid]/page.tsx",
                    lineNumber: 348,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/route/[routeid]/page.tsx",
            lineNumber: 339,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/route/[routeid]/page.tsx",
        lineNumber: 333,
        columnNumber: 5
    }, this);
};
_s(RoutePage, "TaeNFp5f9wSI0Dfp1NZYkMyWagI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$google$2d$maps$2f$api$2f$dist$2f$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useJsApiLoader"]
    ];
});
_c = RoutePage;
const __TURBOPACK__default__export__ = RoutePage;
var _c;
__turbopack_context__.k.register(_c, "RoutePage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_95a4eafe._.js.map