'use client';

import { useEffect, useState } from 'react';
import { getStopsByRoute } from '@/lib/supabase';

const StopsList = ({ routeId }: { routeId: string }) => {
  const [stops, setStops] = useState<Array<{
    stop_id: string;
    stop_name: string;
    stop_lat: number;
    stop_lon: number;
    route_stop_order: number; // Added route_stop_order here
  }>>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchStops = async () => {
      try {
        setLoading(true);
        const data = await getStopsByRoute(routeId);
        setStops(data);
      } catch (err) {
        setError('Error fetching stops');
      } finally {
        setLoading(false);
      }
    };

    fetchStops();
  }, [routeId]);

  if (loading) return <p>Loading stops...</p>;
  if (error) return <p>{error}</p>;
  if (!stops.length) return <p>No stops found for this route.</p>;

  return (
    <div>
      <h2>Stops for Route {routeId}</h2>
      <ul>
        {stops.map((stop) => (
          <li key={stop.stop_id}>
            {stop.stop_name} (Order: {stop.route_stop_order}) - ({stop.stop_lat}, {stop.stop_lon})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StopsList;
