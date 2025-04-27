import React from 'react';
import { Stop } from '@/types/route';

interface StopsListProps {
  activeDirection: number;
  stopsDirection0: Stop[];
  stopsDirection1: Stop[];
  onStopSelect: (stop: Stop) => void;
  onDirectionChange: (direction: number) => void;
}

const StopsList: React.FC<StopsListProps> = ({
  activeDirection,
  stopsDirection0,
  stopsDirection1,
  onStopSelect,
  onDirectionChange,
}) => {
  const containerStyle = { 
    background: "linear-gradient(to right, #1e3c72, #2a5298)", 
    padding: "24px", 
    borderRadius: "10px",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
    flex: "1",
    overflowY: "auto" as const
  };

  const directionButtonStyle = (isActive: boolean) => ({
    flex: 1,
    padding: "8px 16px",
    background: isActive ? "#2563eb" : "rgba(255, 255, 255, 0.1)",
    border: "none",
    borderRadius: "6px",
    color: "white",
    cursor: "pointer",
    fontSize: "14px",
    fontWeight: "bold",
    transition: "background 0.2s"
  });

  const stopItemStyle = { 
    background: "#1e3c72",
    padding: "16px",
    borderRadius: "10px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    cursor: "pointer",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)"
  };

  const stopNumberStyle = { 
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

  const renderStopItem = (stop: Stop, index: number) => (
    <div 
      key={stop.stop_id} 
      style={stopItemStyle}
      onClick={() => onStopSelect(stop)}
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        <span style={stopNumberStyle}>{index + 1}</span>
        <div>
          <h3 style={{ fontWeight: "bold", color: "white" }}>{stop.stop_name}</h3>
          <p style={{ fontSize: "14px", color: "#93c5fd" }}>Stop ID: {stop.stop_id}</p>
        </div>
      </div>
      <div style={{ textAlign: "right" }}>
        <p style={{ color: stop.arrivalTime ? "#4ade80" : "#93c5fd" }}>
          {stop.arrivalTime ? `Arrives: ${stop.arrivalTime}` : "No arrival time available"}
        </p>
      </div>
    </div>
  );

  const currentStops = activeDirection === 0 ? stopsDirection0 : stopsDirection1;

  return (
    <div style={containerStyle}>
      <h2 style={{ fontSize: "20px", fontWeight: "bold", marginBottom: "16px" }}>Stops on this Route</h2>
      
      <div style={{ 
        display: "flex", 
        gap: "16px", 
        marginBottom: "24px",
        background: "rgba(255, 255, 255, 0.1)",
        padding: "12px",
        borderRadius: "8px"
      }}>
        <button
          onClick={() => onDirectionChange(0)}
          style={directionButtonStyle(activeDirection === 0)}
        >
          Direction 1
        </button>
        <button
          onClick={() => onDirectionChange(1)}
          style={directionButtonStyle(activeDirection === 1)}
        >
          Direction 2
        </button>
      </div>
      
      {currentStops.length === 0 ? (
        <p style={{ color: "#93c5fd" }}>No stops information available for this direction.</p>
      ) : (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          {currentStops.map((stop, index) => renderStopItem(stop, index))}
        </div>
      )}
    </div>
  );
};

export default StopsList; 