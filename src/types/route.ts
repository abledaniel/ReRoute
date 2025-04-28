export interface Route {
  route_id: string;
  route_long_name: string;
  route_name: string;
  route_desc?: string;
  route_type?: number;
  agency_name?: string;
  route_color?: string;
  geometry?: {
    coordinates: number[][][];
    type: string;
  };
  route_stops?: Stop[];
  direction0?: {
    stop_name: string | null;
    next_departure: string | null;
  };
  direction1?: {
    stop_name: string | null;
    next_departure: string | null;
  };
}

export interface Stop {
  stop_id: string;
  stop_name: string;
  stop_lat: number;
  stop_lon: number;
  lat?: number;
  lon?: number;
  arrivalTime?: string;
  departureTime?: string;
  next_departure_time?: string;
  route_stop_order?: number;
}

export interface Vehicle {
  vehicle_id: string;
  current_status: string;
  current_stop_sequence: number;
  stop_id: string;
  current_position: {
    lat: number;
    lon: number;
  };
  timestamp: string;
  congestion_level: number;
  speed: number;
  route_id: string;
  route_name?: string;
  stop_name?: string;
  next_stop_id?: string;
  next_stop_name?: string;
  next_stop_arrival?: string;
  next_stop_departure?: string;
}