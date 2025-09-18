import { Outlet, createRootRoute, useLocation, useNavigate } from '@tanstack/react-router';
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
    const navigate = useNavigate();

    useEffect(() => {
        console.log("Path changed to:", location.pathname);
    }, [location]);

    useEffect(() => {
        // Handle SPA redirect for GitHub Pages
        // The 404.html creates URLs like https://domain.com/?/about
        // We need to extract the path from the malformed query string
        const search = location.search as string;
        if (search && search.startsWith('?/')) {
            // Extract the path from the malformed query string
            const path = search.slice(2); // Remove the leading '?/'
            const decodedPath = path.replace(/~and~/g, '&');
            navigate({ to: decodedPath, replace: true });
        }
    }, [location.search, navigate]);

    return (
        <>
            <MapBackground viewport={viewport} />
            <TanStackRouterDevtools position="bottom-right" />
            <div className={`${classes.gridContent}`}>
                <div className={classes.gridContainer}>
                    <Outlet />
                </div>
            </div>
        </>
    )
}