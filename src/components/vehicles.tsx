import React from 'react';
import { Vehicle } from '@/types/route';

interface VehiclesListProps {
  vehicles: Vehicle[];
  onVehicleSelect: (vehicle: Vehicle) => void;
  onRefresh: () => void;
}

const VehiclesList: React.FC<VehiclesListProps> = ({
  vehicles,
  onVehicleSelect,
  onRefresh,
}) => {
  const containerStyle = { 
    background: "linear-gradient(to right, #1e3c72, #2a5298)", 
    padding: "24px", 
    borderRadius: "10px",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)"
  };

  const vehicleItemStyle = { 
    background: "#1e3c72",
    padding: "16px",
    borderRadius: "10px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    cursor: "pointer",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)"
  };

  const vehicleNumberStyle = { 
    background: "#2a5298",
    color: "white",
    width: "32px",
    height: "32px",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginRight: "16px"
  };

  const refreshButtonStyle = { 
    marginTop: "16px",
    padding: "8px 16px",
    background: "rgba(255, 255, 255, 0.1)",
    border: "none",
    borderRadius: "6px",
    color: "white",
    cursor: "pointer"
  };

  const renderVehicleItem = (vehicle: Vehicle, index: number) => (
    <div 
      key={vehicle.vehicle_id || index} 
      style={vehicleItemStyle}
      onClick={() => onVehicleSelect(vehicle)}
    >
      <div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <span style={vehicleNumberStyle}>{index + 1}</span>
          <div>
            <h3 style={{ fontWeight: "bold" }}>Vehicle {vehicle.vehicle_id || 'Unknown'}</h3>
            <p style={{ fontSize: "14px", color: "#93c5fd" }}>Route: {vehicle.route_id || 'N/A'}</p>
          </div>
        </div>
      </div>
      <div style={{ textAlign: "right" }}>
        <p style={{ color: "#4ade80" }}>Speed: {vehicle.speed ? `${vehicle.speed} mph` : 'N/A'}</p>
        <p style={{ fontSize: "12px", color: "#93c5fd" }}>Updated: {vehicle.timestamp || 'N/A'}</p>
      </div>
    </div>
  );

  return (
    <div style={containerStyle}>
      <h2 style={{ fontSize: "20px", fontWeight: "bold", marginBottom: "16px" }}>Live Vehicles</h2>
      
      {vehicles.length > 0 ? (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          {vehicles.map((vehicle, index) => renderVehicleItem(vehicle, index))}
        </div>
      ) : (
        <div style={{ textAlign: "center", padding: "20px" }}>
          <p>No live vehicles available for this route.</p>
          <button 
            onClick={onRefresh}
            style={refreshButtonStyle}
          >
            Refresh Vehicle Data
          </button>
        </div>
      )}
    </div>
  );
};

export default VehiclesList; 