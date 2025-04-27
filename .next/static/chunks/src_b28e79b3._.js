(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/styles/mapStyles.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "mapStyles": (()=>mapStyles)
});
const mapStyles = [
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
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/map/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$google$2d$maps$2f$api$2f$dist$2f$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-google-maps/api/dist/esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$mapStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/styles/mapStyles.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
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
    const [origin, setOrigin] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [destination, setDestination] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [routes, setRoutes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [locationError, setLocationError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const mapRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const markerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [mapCenter, setMapCenter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(defaultPosition);
    const initialLoadRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(true);
    const [directions, setDirections] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [originAutocomplete, setOriginAutocomplete] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [destinationAutocomplete, setDestinationAutocomplete] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const originInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const destinationInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const directionsService = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [routeDetails, setRouteDetails] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
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
                        fillColor: "#c5acff",
                        fillOpacity: 1,
                        strokeColor: "#FFFFFF",
                        strokeWeight: 2
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
                content: createMarkerContent()
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
                        fillColor: "#c5acff",
                        fillOpacity: 1,
                        strokeColor: "#FFFFFF",
                        strokeWeight: 2
                    }
                });
                markerRef.current = standardMarker;
                console.log("Standard marker created as fallback after error");
            }
        }
    };
    // Function to create custom marker content
    const createMarkerContent = ()=>{
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
                        console.error("Error getting high-accuracy location:", error);
                        // Fallback to low-accuracy if high-accuracy fails
                        navigator.geolocation.getCurrentPosition(handleLocationUpdate, {
                            "Page.useEffect": (error)=>{
                                setLocationError(`Error getting location: ${error.message}`);
                                console.error("Error getting low-accuracy location:", error);
                            }
                        }["Page.useEffect"], {
                            enableHighAccuracy: false,
                            maximumAge: 60000,
                            timeout: 30000
                        });
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
            const apiKey = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_TRANSIT_LAND_API_KEY || '4i0HhaRLe0jBSotDmxETH05X2iwrgNcJ';
            const response = await fetch(`https://transit.land/api/v2/rest/routes?lat=${formattedLat}&lon=${formattedLng}&radius=1000&api_key=${apiKey}`);
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
            const formattedRoutes = data.routes.map((route)=>({
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
    const handleRouteClick = (routeId)=>{
        router.push(`/route/${routeId}`);
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Page.useEffect": ()=>{
            if (isLoaded && originInputRef.current && destinationInputRef.current) {
                // Initialize autocomplete for origin
                const originAutocompleteInstance = new google.maps.places.Autocomplete(originInputRef.current, {
                    types: [
                        'establishment',
                        'geocode'
                    ],
                    componentRestrictions: {
                        country: 'us'
                    }
                });
                setOriginAutocomplete(originAutocompleteInstance);
                // Initialize autocomplete for destination
                const destinationAutocompleteInstance = new google.maps.places.Autocomplete(destinationInputRef.current, {
                    types: [
                        'establishment',
                        'geocode'
                    ],
                    componentRestrictions: {
                        country: 'us'
                    }
                });
                setDestinationAutocomplete(destinationAutocompleteInstance);
                // Initialize directions service
                directionsService.current = new google.maps.DirectionsService();
                // Add listeners for place selection
                originAutocompleteInstance.addListener('place_changed', {
                    "Page.useEffect": ()=>{
                        const place = originAutocompleteInstance.getPlace();
                        if (place.geometry) {
                            setOrigin(place.formatted_address || '');
                            calculateRoute();
                        }
                    }
                }["Page.useEffect"]);
                destinationAutocompleteInstance.addListener('place_changed', {
                    "Page.useEffect": ()=>{
                        const place = destinationAutocompleteInstance.getPlace();
                        if (place.geometry) {
                            setDestination(place.formatted_address || '');
                            calculateRoute();
                        }
                    }
                }["Page.useEffect"]);
            }
        }
    }["Page.useEffect"], [
        isLoaded
    ]);
    const calculateRoute = ()=>{
        if (!directionsService.current || !origin || !destination) return;
        directionsService.current.route({
            origin: origin,
            destination: destination,
            travelMode: google.maps.TravelMode.TRANSIT
        }, (result, status)=>{
            if (status === google.maps.DirectionsStatus.OK && result) {
                setDirections(result);
                // Extract route details for display
                if (result.routes && result.routes.length > 0 && result.routes[0].legs && result.routes[0].legs.length > 0) {
                    const leg = result.routes[0].legs[0];
                    // Calculate estimated arrival time (current time + duration)
                    const now = new Date();
                    const durationInMinutes = leg.duration?.value ? Math.round(leg.duration.value / 60) : 0;
                    const estimatedArrivalTime = new Date(now.getTime() + durationInMinutes * 60000);
                    const formattedArrivalTime = estimatedArrivalTime.toLocaleTimeString([], {
                        hour: '2-digit',
                        minute: '2-digit'
                    });
                    setRouteDetails({
                        duration: leg.duration?.text || 'N/A',
                        arrivalTime: formattedArrivalTime,
                        departureTime: 'N/A',
                        distance: leg.distance?.text || 'N/A',
                        steps: leg.steps || [],
                        routeId: result.routes[0].legs[0].steps[0].transit_details?.line.vehicle?.name?.replace('OCTA BUS ', '') || ''
                    });
                }
                // Only adjust map bounds if it's the initial route calculation
                if (mapRef.current && result.routes[0] && initialLoadRef.current) {
                    const bounds = new google.maps.LatLngBounds();
                    result.routes[0].legs.forEach((leg)=>{
                        bounds.extend(leg.start_location);
                        bounds.extend(leg.end_location);
                    });
                    mapRef.current.fitBounds(bounds);
                }
            }
        });
    };
    // Function to navigate to directions page
    const goToDirections = ()=>{
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
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        display: "flex",
                        alignItems: "center",
                        marginBottom: "32px"
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        style: {
                            fontSize: "24px",
                            fontWeight: "bold"
                        },
                        children: "Loading map..."
                    }, void 0, false, {
                        fileName: "[project]/src/app/map/page.tsx",
                        lineNumber: 452,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/map/page.tsx",
                    lineNumber: 451,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/map/page.tsx",
                lineNumber: 450,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/map/page.tsx",
            lineNumber: 444,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            minHeight: "100vh",
            background: "linear-gradient(to right, #1e3c72, #2a5298)",
            color: "white",
            padding: "16px"
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
                        marginBottom: "24px"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            style: {
                                fontSize: "32px",
                                fontWeight: "bold"
                            },
                            children: "REROUTE"
                        }, void 0, false, {
                            fileName: "[project]/src/app/map/page.tsx",
                            lineNumber: 468,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                marginLeft: "auto"
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/faq",
                                style: {
                                    textDecoration: "none"
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    style: {
                                        background: "rgba(255, 255, 255, 0.1)",
                                        border: "none",
                                        color: "#fff",
                                        padding: "8px 16px",
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
                                    children: "FAQ"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/map/page.tsx",
                                    lineNumber: 471,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/map/page.tsx",
                                lineNumber: 470,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/map/page.tsx",
                            lineNumber: 469,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/map/page.tsx",
                    lineNumber: 467,
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
                                flex: "1.5",
                                position: "relative",
                                display: "flex",
                                flexDirection: "column"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        padding: "16px",
                                        background: "rgba(255, 255, 255, 0.1)",
                                        borderRadius: "8px",
                                        margin: "16px",
                                        display: "flex",
                                        gap: "16px",
                                        alignItems: "center"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                flex: 1,
                                                display: "flex",
                                                gap: "8px"
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    ref: originInputRef,
                                                    type: "text",
                                                    placeholder: "Origin",
                                                    value: origin,
                                                    onChange: (e)=>setOrigin(e.target.value),
                                                    style: {
                                                        flex: 1,
                                                        padding: "12px",
                                                        borderRadius: "6px",
                                                        border: "none",
                                                        fontSize: "14px",
                                                        backgroundColor: "rgba(255, 255, 255, 0.1)",
                                                        color: "#fff"
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/map/page.tsx",
                                                    lineNumber: 515,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>{
                                                        if (navigator.geolocation) {
                                                            navigator.geolocation.getCurrentPosition((position)=>{
                                                                const lat = position.coords.latitude;
                                                                const lng = position.coords.longitude;
                                                                // Reverse geocode to get address
                                                                const geocoder = new google.maps.Geocoder();
                                                                geocoder.geocode({
                                                                    location: {
                                                                        lat,
                                                                        lng
                                                                    }
                                                                }, (results, status)=>{
                                                                    if (status === "OK" && results?.[0]) {
                                                                        setOrigin(results[0].formatted_address);
                                                                        if (originInputRef.current) {
                                                                            originInputRef.current.value = results[0].formatted_address;
                                                                        }
                                                                    }
                                                                });
                                                            }, (error)=>{
                                                                console.error("Error getting location:", error);
                                                            });
                                                        }
                                                    },
                                                    style: {
                                                        padding: "12px",
                                                        background: "rgba(255, 255, 255, 0.1)",
                                                        border: "none",
                                                        borderRadius: "6px",
                                                        color: "#fff",
                                                        cursor: "pointer",
                                                        fontSize: "14px",
                                                        whiteSpace: "nowrap",
                                                        transition: "background 0.2s"
                                                    },
                                                    onMouseOver: (e)=>{
                                                        e.currentTarget.style.background = "rgba(255, 255, 255, 0.2)";
                                                    },
                                                    onMouseOut: (e)=>{
                                                        e.currentTarget.style.background = "rgba(255, 255, 255, 0.1)";
                                                    },
                                                    children: "📍 My Location"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/map/page.tsx",
                                                    lineNumber: 531,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/map/page.tsx",
                                            lineNumber: 514,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                flex: 1,
                                                display: "flex",
                                                gap: "8px"
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                ref: destinationInputRef,
                                                type: "text",
                                                placeholder: "Destination",
                                                value: destination,
                                                onChange: (e)=>setDestination(e.target.value),
                                                style: {
                                                    flex: 1,
                                                    padding: "12px",
                                                    borderRadius: "6px",
                                                    border: "none",
                                                    fontSize: "14px",
                                                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                                                    color: "#fff"
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/map/page.tsx",
                                                lineNumber: 577,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/map/page.tsx",
                                            lineNumber: 576,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: calculateRoute,
                                            style: {
                                                padding: "12px 24px",
                                                background: "#93c5fd",
                                                border: "none",
                                                borderRadius: "6px",
                                                color: "white",
                                                cursor: "pointer",
                                                fontSize: "14px",
                                                fontWeight: "bold",
                                                transition: "background 0.2s"
                                            },
                                            onMouseOver: (e)=>{
                                                e.currentTarget.style.background = "#60a5fa";
                                            },
                                            onMouseOut: (e)=>{
                                                e.currentTarget.style.background = "#93c5fd";
                                            },
                                            children: "Search"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/map/page.tsx",
                                            lineNumber: 594,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/map/page.tsx",
                                    lineNumber: 505,
                                    columnNumber: 13
                                }, this),
                                locationError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        padding: "8px 16px",
                                        background: "rgba(255, 0, 0, 0.2)",
                                        borderRadius: "6px",
                                        margin: "0 16px 16px 16px",
                                        display: "flex",
                                        justifyContent: "space-between",
                                        alignItems: "center"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                color: "#ff6b6b"
                                            },
                                            children: locationError
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/map/page.tsx",
                                            lineNumber: 629,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>{
                                                if (navigator.geolocation) {
                                                    navigator.geolocation.getCurrentPosition(handleLocationUpdate, (error)=>{
                                                        setLocationError(`Error getting location: ${error.message}`);
                                                        console.error("Error getting location:", error);
                                                    }, {
                                                        enableHighAccuracy: true,
                                                        maximumAge: 0,
                                                        timeout: 5000
                                                    });
                                                }
                                            },
                                            style: {
                                                padding: "8px 12px",
                                                background: "#228B22",
                                                border: "none",
                                                borderRadius: "4px",
                                                color: "white",
                                                cursor: "pointer",
                                                fontSize: "12px",
                                                fontWeight: "bold"
                                            },
                                            children: "Try Again"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/map/page.tsx",
                                            lineNumber: 630,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/map/page.tsx",
                                    lineNumber: 620,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "map-container map-wrapper",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$google$2d$maps$2f$api$2f$dist$2f$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GoogleMap"], {
                                        zoom: 14,
                                        center: mapCenter,
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
                                            styles: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$mapStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mapStyles"]
                                        },
                                        onLoad: (map)=>{
                                            mapRef.current = map;
                                            if (userPosition && initialLoadRef.current) {
                                                // Add a small delay to ensure the marker library is fully loaded
                                                setTimeout(()=>{
                                                    updateUserMarker();
                                                }, 500);
                                            }
                                        },
                                        onDragEnd: handleMapCenterChanged,
                                        onZoomChanged: handleMapCenterChanged,
                                        children: [
                                            userPosition && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$google$2d$maps$2f$api$2f$dist$2f$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Marker"], {
                                                position: userPosition,
                                                icon: {
                                                    path: google.maps.SymbolPath.CIRCLE,
                                                    scale: 10,
                                                    fillColor: "#c5acff",
                                                    fillOpacity: 1,
                                                    strokeColor: "#FFFFFF",
                                                    strokeWeight: 2
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/map/page.tsx",
                                                lineNumber: 691,
                                                columnNumber: 19
                                            }, this),
                                            directions && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$google$2d$maps$2f$api$2f$dist$2f$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DirectionsRenderer"], {
                                                directions: directions,
                                                options: {
                                                    suppressMarkers: false,
                                                    polylineOptions: {
                                                        strokeColor: "#2563eb",
                                                        strokeWeight: 5
                                                    }
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/map/page.tsx",
                                                lineNumber: 706,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/map/page.tsx",
                                        lineNumber: 665,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/map/page.tsx",
                                    lineNumber: 664,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/map/page.tsx",
                            lineNumber: 498,
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
                                routeDetails && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        background: "linear-gradient(to right, #1e3c72, #2a5298)",
                                        padding: "24px",
                                        borderRadius: "10px",
                                        boxShadow: "0 2px 4px rgba(0,0,0,0.1)"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            style: {
                                                fontSize: "20px",
                                                fontWeight: "bold",
                                                marginBottom: "16px"
                                            },
                                            children: "ROUTE INFORMATION"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/map/page.tsx",
                                            lineNumber: 738,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                display: "flex",
                                                flexDirection: "column",
                                                gap: "12px"
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        display: "flex",
                                                        justifyContent: "space-between"
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            style: {
                                                                color: "#93c5fd"
                                                            },
                                                            children: "Estimated Time:"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/map/page.tsx",
                                                            lineNumber: 741,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            style: {
                                                                fontWeight: "bold"
                                                            },
                                                            children: routeDetails.duration
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/map/page.tsx",
                                                            lineNumber: 742,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/map/page.tsx",
                                                    lineNumber: 740,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        display: "flex",
                                                        justifyContent: "space-between"
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            style: {
                                                                color: "#93c5fd"
                                                            },
                                                            children: "Estimated Arrival:"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/map/page.tsx",
                                                            lineNumber: 745,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            style: {
                                                                fontWeight: "bold"
                                                            },
                                                            children: routeDetails.arrivalTime
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/map/page.tsx",
                                                            lineNumber: 746,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/map/page.tsx",
                                                    lineNumber: 744,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        display: "flex",
                                                        justifyContent: "space-between"
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            style: {
                                                                color: "#93c5fd"
                                                            },
                                                            children: "Distance:"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/map/page.tsx",
                                                            lineNumber: 749,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            style: {
                                                                fontWeight: "bold"
                                                            },
                                                            children: routeDetails.distance
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/map/page.tsx",
                                                            lineNumber: 750,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/map/page.tsx",
                                                    lineNumber: 748,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/map/page.tsx",
                                            lineNumber: 739,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: goToDirections,
                                            style: {
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
                                            },
                                            onMouseOver: (e)=>{
                                                e.currentTarget.style.background = "#1d4ed8";
                                            },
                                            onMouseOut: (e)=>{
                                                e.currentTarget.style.background = "#2563eb";
                                            },
                                            children: "GO"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/map/page.tsx",
                                            lineNumber: 753,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/map/page.tsx",
                                    lineNumber: 732,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        background: "linear-gradient(to right, #1e3c72, #2a5298)",
                                        padding: "24px",
                                        borderRadius: "10px",
                                        boxShadow: "0 2px 4px rgba(0,0,0,0.1)"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                display: "flex",
                                                justifyContent: "space-between",
                                                alignItems: "center",
                                                marginBottom: "20px"
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                style: {
                                                    fontSize: "20px",
                                                    fontWeight: "bold"
                                                },
                                                children: [
                                                    "NEARBY TRANSIT (",
                                                    routes.length,
                                                    " routes)"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/map/page.tsx",
                                                lineNumber: 787,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/map/page.tsx",
                                            lineNumber: 786,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                flex: 1,
                                                overflowY: "auto"
                                            },
                                            children: routes.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                style: {
                                                    color: "#93c5fd"
                                                },
                                                children: [
                                                    "No nearby routes found. ",
                                                    locationError ? `Error: ${locationError}` : ''
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/map/page.tsx",
                                                lineNumber: 791,
                                                columnNumber: 19
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    display: "flex",
                                                    flexDirection: "column",
                                                    gap: "16px"
                                                },
                                                children: routes.map((route)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            background: "linear-gradient(to right, #1e3c72, #2a5298)",
                                                            padding: "16px",
                                                            borderRadius: "10px",
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
                                                                        lineNumber: 819,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        style: {
                                                                            fontSize: "14px",
                                                                            marginTop: "5px",
                                                                            color: "#93c5fd"
                                                                        },
                                                                        children: route.route_name
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/map/page.tsx",
                                                                        lineNumber: 820,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        style: {
                                                                            fontSize: "12px",
                                                                            marginTop: "5px",
                                                                            color: "#93c5fd"
                                                                        },
                                                                        children: "10 Minutes Arrival Prediction: 13 Minutes"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/map/page.tsx",
                                                                        lineNumber: 821,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/map/page.tsx",
                                                                lineNumber: 818,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    fontSize: "24px"
                                                                },
                                                                children: "➔"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/map/page.tsx",
                                                                lineNumber: 823,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, route.route_id, true, {
                                                        fileName: "[project]/src/app/map/page.tsx",
                                                        lineNumber: 795,
                                                        columnNumber: 23
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/map/page.tsx",
                                                lineNumber: 793,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/map/page.tsx",
                                            lineNumber: 789,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/map/page.tsx",
                                    lineNumber: 780,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/map/page.tsx",
                            lineNumber: 722,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/map/page.tsx",
                    lineNumber: 496,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/map/page.tsx",
            lineNumber: 466,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/map/page.tsx",
        lineNumber: 460,
        columnNumber: 5
    }, this);
};
_s(Page, "j8ToZYiyilmoSUWb7qLp6cEOiHU=", false, function() {
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

//# sourceMappingURL=src_b28e79b3._.js.map