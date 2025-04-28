import { NextResponse } from 'next/server';
import { createClient } from '@/utils/supabase/client';
import { Stop, Route } from '@/types/route';

export async function GET(request: Request) {
  try {
    const supabase = createClient();
    const { searchParams } = new URL(request.url);
    const lat = searchParams.get('lat') || '33.8461618';
    const lng = searchParams.get('lng') || '-118.011091';
    const apiKey = process.env.NEXT_PUBLIC_TRANSITLAND_API_KEY;
    
    const response = await fetch(
      `https://transit.land/api/v2/rest/routes?lat=${lat}&lon=${lng}&radius=1000&api_key=${apiKey}`,
      {
        headers: { 'Accept': 'application/json' },
        next: { revalidate: 60 }
      }
    );
    
    if (!response.ok) {
      console.error(`Transit.land API error: ${response.status}`);
      return NextResponse.json({ error: `Transit.land API error: ${response.status}`, routes: [] }, { status: response.status });
    }

    const data = await response.json();
    
    // For each route, fetch its stops and their directions
    const routesWithStops = await Promise.all(data.routes.map(async (route: Route) => {
      // Fetch stops for both directions
      const stopsDirection0 = await supabase.rpc('get_stops', { 
        direction_id: 0,
        route_num: route.route_id.replace('r-9qh0-', '')
      });
      
      const stopsDirection1 = await supabase.rpc('get_stops', { 
        direction_id: 1,
        route_num: route.route_id.replace('r-9qh0-', '')
      });

      // Get the first stop with a departure time for each direction
      const nextDepartureDirection0 = stopsDirection0.data?.find((stop: Stop) => stop.next_departure_time)?.next_departure_time;
      const nextDepartureDirection1 = stopsDirection1.data?.find((stop: Stop) => stop.next_departure_time)?.next_departure_time;

      // Get the first stop name for each direction
      const firstStopDirection0 = stopsDirection0.data?.[0]?.stop_name;
      const firstStopDirection1 = stopsDirection1.data?.[0]?.stop_name;

      return {
        ...route,
        direction0: {
          stop_name: firstStopDirection0,
          next_departure: nextDepartureDirection0
        },
        direction1: {
          stop_name: firstStopDirection1,
          next_departure: nextDepartureDirection1
        }
      };
    }));
    
    return NextResponse.json({ routes: routesWithStops });
  } catch (error) {
    console.error('Error fetching routes:', error);
    return NextResponse.json({ error: 'Failed to fetch routes', routes: [] }, { status: 500 });
  }
} 