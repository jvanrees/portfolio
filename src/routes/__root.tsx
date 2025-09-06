import { Outlet, createRootRoute, useLocation } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';
import { useEffect } from 'react';
import { ViewState } from 'react-map-gl/maplibre';
import MapBackground from '../components/MapBackground';
import classes from '../styles/Grid.module.css';

export const Route = createRootRoute({
    component: RootComponent,
})
const viewport: ViewState = {
    longitude: 0,
    latitude: 0,
    zoom: 0,
    pitch: 0,
    bearing: 0,
    padding: { top: 0, bottom: 0, left: 0, right: 0 }
}

function RootComponent() {
    const location = useLocation();

    useEffect(() => {
        console.log("Path changed to:", location.pathname);
    }, [location.pathname]);

    return (
        <>
            <MapBackground viewport={viewport} />
            <TanStackRouterDevtools position="bottom-right" />
            <div className={classes.gridContent}>
                <Outlet />
            </div>
        </>
    )
}
