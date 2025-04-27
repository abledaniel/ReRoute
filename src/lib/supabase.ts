import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error("Missing Supabase environment variables");
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
export async function getStopsByRoute(routeId: string, direction: number = 0) {
  if (!routeId) {
    console.error("Route ID is required.");
    return [];
  }

  let { data, error } = await supabase
    .rpc('get', { 
      route_num: routeId, 
      direction_num: direction 
    });

  if (error) {
    console.error('Error fetching stops:', error.message, error.details, error.code);
    return [];
  }

  if (!data) return [];

  return data.map((record: {
    stop_id: string;
    route_stop_order: number;
    stop_name: string;
    stop_lat: number;
    stop_lon: number;
  }) => ({
    stop_id: record.stop_id,
    route_stop_order: record.route_stop_order,
    stop_name: record.stop_name,
    stop_lat: record.stop_lat,
    stop_lon: record.stop_lon
  }));
}
