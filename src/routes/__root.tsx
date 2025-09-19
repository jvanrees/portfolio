import { createRootRoute, Outlet, useLocation } from "@tanstack/react-router";
import { useEffect } from "react";
import MapBackground from "../components/MapBackground";
import { MapProvider } from "../mapstyleContext";
import classes from "../styles/Grid.module.css";

export const Route = createRootRoute({
	component: RootComponent,
});

function RootComponent() {
	const location = useLocation();
	// const { updateForPage } = useMapContext();

	useEffect(() => {
		console.log("LocationObj:", location);
		// updateForPage(location.pathname);
	}, [location]);

	return (
		<MapProvider>
			<MapBackground />
			<div className={classes.gridContent}>
				<div className={classes.gridContainer}>
					<Outlet />
				</div>
			</div>
		</MapProvider>
	);
}
