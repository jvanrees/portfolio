import type { StyleSpecification } from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import { useEffect, useRef } from "react";
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
	const mapRef = useRef<MapRef | null>(null);

	useEffect(() => {
		const map = mapRef.current?.getMap();
		if (!map) return;

		const onStyleImageMissing = (e: any) => console.log("missing image:", e.id);
		const onError = (e: any) => console.log("map error", e.error || e);

		map.on("styleimagemissing", onStyleImageMissing);
		map.on("error", onError);

		return () => {
			map.off("styleimagemissing", onStyleImageMissing);
			map.off("error", onError);
		};
	}, []);

	return (
		<div className={styles.container}>
			<MapGL
				ref={mapRef}
				initialViewState={initialViewState}
				mapStyle={mapStyle}
				style={{ width: "100%", height: "100%" }}
			>
				<NavigationControl position="top-left" />
			</MapGL>
		</div>
	);
}
