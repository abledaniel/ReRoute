import React, { useState, useEffect } from 'react';
import { GoogleMap, Marker, Polyline, InfoWindow } from "@react-google-maps/api";
import { Route, Stop, Vehicle } from '@/types/route';
import '@/styles/map.css';
import { mapStyles } from '@/styles/mapstyle';

interface RouteMapProps {
  route: Route;
  mapCenter: { lat: number; lng: number };
  routePath: google.maps.LatLngLiteral[];
  activeDirection: number;
  stopsDirection0: Stop[];
  stopsDirection1: Stop[];
  vehicles: Vehicle[];
  selectedStop: Stop | null;
  selectedVehicle: Vehicle | null;
  onMapLoad: (map: google.maps.Map) => void;
  onStopSelect: (stop: Stop) => void;
  onVehicleSelect: (vehicle: Vehicle) => void;
  onStopClose: () => void;
  onVehicleClose: () => void;
}

const RouteMap: React.FC<RouteMapProps> = ({
  route,
  mapCenter,
  routePath,
  activeDirection,
  stopsDirection0,
  stopsDirection1,
  vehicles,
  selectedStop,
  selectedVehicle,
  onMapLoad,
  onStopSelect,
  onVehicleSelect,
  onStopClose,
  onVehicleClose,
}) => {
  const [userLocation, setUserLocation] = useState<{ lat: number; lng: number } | null>(null);
  const [initialCenter, setInitialCenter] = useState(mapCenter);

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const newLocation = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          };
          setUserLocation(newLocation);
          setInitialCenter(newLocation);
        },
        (error) => {
          console.warn("Error getting user location:", error);
        }
      );
    }
  }, []);

  const mapOptions = {
    fullscreenControl: false,
    streetViewControl: false,
    mapTypeControl: false,
    zoomControl: true,
    gestureHandling: "greedy",
    styles: mapStyles,
  };

  const routeColor = route?.route_color ? `#${route.route_color}` : "#4285F4";

  const createStopIcon = () => ({
    path: google.maps.SymbolPath.CIRCLE,
    scale: 8,
    fillColor: routeColor,
    fillOpacity: 0.8,
    strokeColor: "#FFFFFF",
    strokeWeight: 2,
  });

  const createVehicleIcon = () => ({
    path: google.maps.SymbolPath.CIRCLE,
    scale: 10,
    fillColor: "#FF0000",
    fillOpacity: 0.9,
    strokeColor: "#FFFFFF",
    strokeWeight: 2,
  });

  const createUserLocationIcon = () => ({
    path: google.maps.SymbolPath.CIRCLE,
    scale: 12,
    fillColor: "#c5acff",
    fillOpacity: 0.9,
    strokeColor: "#FFFFFF",
    strokeWeight: 2,
  });

  const currentStops = activeDirection === 0 ? stopsDirection0 : stopsDirection1;

  return (
    <div className="map-container map-wrapper">
      <GoogleMap
        zoom={16}
        center={initialCenter}
        mapContainerStyle={{ height: "100%", width: "100%" }}
        options={mapOptions}
        onLoad={onMapLoad}
      >
        {routePath.length > 0 && (
          <Polyline
            path={routePath}
            options={{
              strokeColor: routeColor,
              strokeOpacity: 0.8,
              strokeWeight: 4,
            }}
          />
        )}

        {userLocation && (
          <Marker
            position={userLocation}
            icon={createUserLocationIcon()}
            title="Your Location"
          />
        )}

        {currentStops.map((stop) => (
          <Marker
            key={stop.stop_id}
            position={{
              lat: stop.stop_lat,
              lng: stop.stop_lon
            }}
            title={stop.stop_name}
            onClick={() => onStopSelect(stop)}
            icon={createStopIcon()}
          />
        ))}

        {vehicles.map((vehicle) => (
          <Marker
            key={vehicle.vehicle_id}
            position={{
              lat: vehicle.current_position.lat,
              lng: vehicle.current_position.lon
            }}
            title={`Vehicle ${vehicle.vehicle_id}`}
            onClick={() => onVehicleSelect(vehicle)}
            icon={createVehicleIcon()}
          />
        ))}

        {selectedStop && (
          <InfoWindow
            position={{
              lat: selectedStop.stop_lat,
              lng: selectedStop.stop_lon
            }}
            onCloseClick={onStopClose}
          >
            <div className="info-window">
              <h3 className="info-window-title">{selectedStop.stop_name}</h3>
              <p className="info-window-text">Stop ID: {selectedStop.stop_id}</p>
              <p className="info-window-text" style={{ color: selectedStop.next_departure_time ? "#4ade80" : "#93c5fd" }}>
                {selectedStop.next_departure_time ? `Next Departure: ${selectedStop.next_departure_time}` : "No departure time available"}
              </p>
            </div>
          </InfoWindow>
        )}

        {selectedVehicle && (
          <InfoWindow
            position={{
              lat: selectedVehicle.current_position.lat,
              lng: selectedVehicle.current_position.lon
            }}
            onCloseClick={onVehicleClose}
          >
            <div className="info-window">
              <h3 className="info-window-title">Vehicle {selectedVehicle.vehicle_id}</h3>
              <p className="info-window-text">Route: {selectedVehicle.route_id}</p>
              <p className="info-window-text">Status: {selectedVehicle.current_status || 'N/A'}</p>
              <p className="info-window-text">Speed: {selectedVehicle.speed ? `${selectedVehicle.speed} mph` : 'N/A'}</p>
              <p className="info-window-text">Updated: {selectedVehicle.timestamp || 'N/A'}</p>
            </div>
          </InfoWindow>
        )}
      </GoogleMap>
    </div>
  );
};

export default RouteMap;