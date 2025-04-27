import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const lat = searchParams.get('lat') || '33.8461618';
    const lon = searchParams.get('lon') || '-118.011091';
    const apiKey = '4i0HhaRLe0jBSotDmxETH05X2iwrgNcJ';
    
    const response = await fetch(
      `https://transit.land/api/v2/rest/routes?lat=${lat}&lon=${lon}&radius=5000&api_key=${apiKey}`,
      {
        headers: { 'Accept': 'application/json' },
        next: { revalidate: 60 }
      }
    );
    
    if (!response.ok) {
      console.error(`Transit.land API error: ${response.status}`);
      return NextResponse.json({ error: `Transit.land API error: ${response.status}`, routes: [] }, { status: response.status });
    }
    
    return NextResponse.json(await response.json());
  } catch (error) {
    console.error('Error fetching routes:', error);
    return NextResponse.json({ error: 'Failed to fetch routes', routes: [] }, { status: 500 });
  }
} 