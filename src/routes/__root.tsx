import { createRootRoute, Outlet } from "@tanstack/react-router";
import MapBackground from "../components/MapBackground";
import { MapProvider } from "../context/mapstyleContext";
import classes from "../styles/Grid.module.css";

export const Route = createRootRoute({
	component: RootComponent,
});

function RootComponent() {
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
