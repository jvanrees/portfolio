import type { StyleSpecification } from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import { useRef } from "react";
import MapGL, { type MapRef, NavigationControl } from "react-map-gl/maplibre";
import styles from "../styles/ProjectPageMap.module.css";

interface ProjectPageMapProps {
	mapStyle: StyleSpecification;
	initialViewState: {
		longitude: number;
		latitude: number;
		zoom: number;
	};
}

export default function ProjectPageMap({
	mapStyle,
	initialViewState,
}: ProjectPageMapProps) {
	const projectMapRef = useRef<MapRef | null>(null);

	return (
		<div className={styles.container}>
			<MapGL
				ref={projectMapRef}
				initialViewState={initialViewState}
				mapStyle={mapStyle}
				style={{ width: "100%", height: "100%" }}
			>
				<NavigationControl position="top-left" />
			</MapGL>
		</div>
	);
}
