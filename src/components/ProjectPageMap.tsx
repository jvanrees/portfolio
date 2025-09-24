import type { StyleSpecification } from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import { type ReactNode, useEffect, useRef } from "react";
import MapGL, { type MapRef, NavigationControl } from "react-map-gl/maplibre";
import config from "../config/config";
import styles from "../styles/ProjectPageMap.module.css";

interface ProjectPageMapProps {
	style: "light" | "dark" | "streets" | StyleSpecification;
	initialViewState: {
		longitude: number;
		latitude: number;
		zoom: number;
	};
	minZoom?: number;
	children?: ReactNode;
}

const mapTilerBasemapNames = {
	light: "019977ad-6bb3-77c3-b1ab-84fdcf4422e6",
	dark: "019977ab-cc4b-71c2-b95e-5807031a8190",
	streets: "streets",
};

export default function ProjectPageMap({
	style,
	initialViewState,
	minZoom = 0,
	children,
}: ProjectPageMapProps) {
	const projectMapRef = useRef<MapRef | null>(null);

	useEffect(() => {
		if (projectMapRef.current) {
			projectMapRef.current.jumpTo({
				center: [initialViewState.longitude, initialViewState.latitude],
				zoom: initialViewState.zoom,
			});
			(window as any).projectMapRef = projectMapRef.current; // Add this for debugging access
		}
	}, [initialViewState]);

	const getBasemapUrl = (basemap: "light" | "dark" | "streets"): string => {
		const baseUrl = new URL("https://api.maptiler.com/maps/");
		const key = config.maptilerApiKey;
		const stylePath = mapTilerBasemapNames[basemap];
		const url = new URL(`${stylePath}/style.json`, baseUrl);
		url.searchParams.set("key", key);
		console.log(url.href);
		return url.href;
	};

	let finalMapStyle: string | StyleSpecification;

	if (typeof style === "string") {
		finalMapStyle = getBasemapUrl(style);
	} else {
		finalMapStyle = style;
	}

	return (
		<div className={styles.container}>
			<MapGL
				ref={projectMapRef}
				initialViewState={initialViewState}
				mapStyle={finalMapStyle}
				minZoom={minZoom}
				style={{ width: "100%", height: "100%" }}
			>
				<NavigationControl position="top-left" />
				{children}
			</MapGL>
		</div>
	);
}
