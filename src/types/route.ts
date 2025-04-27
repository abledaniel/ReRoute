export interface Route {
  route_id: string;
  route_long_name: string;
  route_desc?: string;
  route_type?: number;
  agency_name?: string;
  route_color?: string;
  geometry?: {
    coordinates: number[][][];
    type: string;
  };
  route_stops?: Array<{
    stop: {
      geometry: {
        coordinates: number[];
        type: string;
      };
      id: number;
      stop_id: string;
      stop_name: string;
    };
  }>;
}

export interface Stop {
  stop_id: string;
  stop_name: string;
  stop_lat: string;
  stop_lon: string;
  arrivalTime?: string;
  departureTime?: string;
}

export interface Vehicle {
  vehicle_id: string;
  route_id: string;
  current_status: string;
  latitude: number;
  longitude: number;
  speed: number;
  bearing: number;
  timestamp: string;
  [key: string]: any;
}