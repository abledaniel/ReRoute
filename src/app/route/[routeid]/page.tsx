'use client';

import { useParams } from 'next/navigation';
import StopsList from '@/app/components/stoplist';

const RoutePage = () => {
    const params = useParams();
    const routeId = params?.routeid as string;

    if (!routeId) return <p>Loading...</p>;

    return (
        <div>
            <h1>Route {routeId}</h1>
            <StopsList routeId={'routeId'} />
        </div>
    );
};

export default RoutePage;
