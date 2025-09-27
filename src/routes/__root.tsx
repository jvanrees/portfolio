import { createRootRoute, Outlet } from "@tanstack/react-router";
import MapBackground from "../components/MapBackground";
import { MapProvider } from "../context/mapstyleContext";
import gridStyles from "../styles/Grid.module.css";

export const Route = createRootRoute({
	component: RootComponent,
});

function RootComponent() {
	return (
		<MapProvider>
			<MapBackground />
			<div className={gridStyles.gridContent}>
				<div className={gridStyles.gridContainer}>
					<Outlet />
				</div>
			</div>
		</MapProvider>
	);
}
