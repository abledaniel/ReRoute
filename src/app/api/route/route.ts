import { NextResponse } from 'next/server';
import { createClient } from '@/utils/supabase/client';
import { Route } from '@/types/route';

export async function GET(request: Request) {
  try {
    const supabase = createClient();
    const { searchParams } = new URL(request.url);
    const rawLat = parseFloat(searchParams.get('lat') || '33.8461618');
    const rawLng = parseFloat(searchParams.get('lng') || '-118.011091');
    // Round to 3 decimal places (~100m grid) so nearby coordinates share the same cache entry
    const lat = rawLat.toFixed(3);
    const lng = rawLng.toFixed(3);
    const apiKey = process.env.NEXT_PUBLIC_TRANSITLAND_API_KEY;

    const response = await fetch(
      `https://transit.land/api/v2/rest/routes?lat=${lat}&lon=${lng}&radius=1000&api_key=${apiKey}`,
      {
        headers: { 'Accept': 'application/json' },
        next: { revalidate: 300 } // 5 minutes — nearby routes don't change frequently
      }
    );
    
    if (!response.ok) {
      console.error(`Transit.land API error: ${response.status}`);
      return NextResponse.json({ error: `Transit.land API error: ${response.status}`, routes: [] }, { status: response.status });
    }

    const data = await response.json();
    
    // For each route, fetch its stops and their directions
    const routesWithStops = await Promise.all(data.routes.map(async (route: Route) => {
      const routeNum = route.route_id.replace('r-9qh0-', '');
      const [stopsDirection0, stopsDirection1] = await Promise.all([
        supabase.rpc('get_stops', { direction_id: 0, route_num: routeNum }).limit(1),
        supabase.rpc('get_stops', { direction_id: 1, route_num: routeNum }).limit(1),
      ]);

      const firstStopDirection0 = stopsDirection0.data?.[0]?.stop_name;
      const nextDepartureDirection0 = stopsDirection0.data?.[0]?.next_departure_time;
      const firstStopDirection1 = stopsDirection1.data?.[0]?.stop_name;
      const nextDepartureDirection1 = stopsDirection1.data?.[0]?.next_departure_time;

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