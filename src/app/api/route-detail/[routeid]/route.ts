import { NextResponse } from 'next/server';

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ routeid: string }> }
) {
  const { routeid } = await params;
  const apiKey = process.env.NEXT_PUBLIC_TRANSIT_LAND_API_KEY || '4i0HhaRLe0jBSotDmxETH05X2iwrgNcJ';
  const formattedRouteId = routeid.startsWith('r-9qh0-') ? routeid : `r-9qh0-${routeid}`;

  const response = await fetch(
    `https://transit.land/api/v2/rest/routes/${formattedRouteId}?api_key=${apiKey}`,
    {
      headers: { 'Accept': 'application/json' },
      next: { revalidate: 3600 }, // cache for 1 hour — route geometry doesn't change
    }
  );

  if (!response.ok) {
    return NextResponse.json(
      { error: `Transit.land error: ${response.status}`, routes: [] },
      { status: response.status }
    );
  }

  const data = await response.json();
  return NextResponse.json(data);
}
