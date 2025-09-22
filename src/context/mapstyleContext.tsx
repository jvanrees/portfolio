import { useLocation } from "@tanstack/react-router";
import type React from "react";
import {
	createContext,
	type ReactNode,
	useCallback,
	useContext,
	useEffect,
	useMemo,
	useRef,
	useState,
} from "react";
import type {
	MapRef,
	StyleSpecification,
	ViewState,
} from "react-map-gl/maplibre";
import config from "../config/config";
import { getMapStyle } from "../config/MapBackgroundStyle";

export interface MapColor {
	background: string;
	park: string;
	water: string;
	roadLow: string;
	roadHigh: string;
	mapOverlayOpacity: number;
}

interface MapContextType {
	viewport: ViewState;
	setViewport: React.Dispatch<React.SetStateAction<ViewState>>;
	mapColor: MapColor;
	setMapColor: React.Dispatch<React.SetStateAction<MapColor>>;
	isMapLoaded: boolean;
	setIsMapLoaded: React.Dispatch<React.SetStateAction<boolean>>;
	mapGlRef: React.MutableRefObject<MapRef | null>;
	currentPath: string;
	mapsStyle: string | StyleSpecification;
	flyToViewport: (
		newViewport: ViewState,
		duration: number,
		transitionEasing: (t: number) => number,
	) => void;
}

export const defaultViewport: ViewState = {
	latitude: 40.5853,
	longitude: -105.0844,
	zoom: 12,
	bearing: 0,
	pitch: 0,
	padding: { top: 0, bottom: 0, left: 0, right: 0 },
};
export const defaultMapColor: MapColor = {
	background: "hsla(0, 0%, 100%, 1.00)",
	park: "hsla(105, 8%, 91%, 1.00)",
	water: "hsla(200, 24%, 62%, 1.00)",
	roadLow: "hsla(0, 0%, 100%, 1.00)",
	roadHigh: "hsla(0, 0%, 85%, 0.53)",
	mapOverlayOpacity: 0.4,
};
const MapContext = createContext<MapContextType>({
	viewport: defaultViewport,
	setViewport: () => {},
	mapColor: defaultMapColor,
	setMapColor: () => {},
	mapGlRef: { current: null },
	currentPath: "",
	mapsStyle: {} as StyleSpecification,
	flyToViewport: () => {},
	isMapLoaded: false,
	setIsMapLoaded: () => {},
});

const standardPaintTransition = {
	duration: 2000,
	delay: 250,
};

export const MapProvider: React.FC<{ children: ReactNode }> = ({
	children,
}) => {
	const [viewport, setViewport] = useState<ViewState>(defaultViewport);
	const [mapColor, setMapColorState] = useState<MapColor>(defaultMapColor);
	const mapGLRef = useRef<MapRef | null>(null);
	const currentPath = useLocation().pathname;
	const [isProjectPage, setIsProjectPage] = useState<boolean>(
		currentPath !== "/" && currentPath !== "/about",
	);
	const [isMapLoaded, setIsMapLoaded] = useState(false);
	const absoluteBaseURL = new URL(
		import.meta.env.BASE_URL,
		window.location.origin,
	);
	const API_KEY = config.maptilerApiKey;
	const MAPBOX_TOKEN = config.mapboxApiKey;

	const setMapColor = useCallback(
		(newMapColor: MapColor | ((prev: MapColor) => MapColor)) => {
			setTimeout(() => {
				setMapColorState(newMapColor);
			}, 1);
		},
		[],
	);

	useEffect(() => {
		const newIsProjectPage = currentPath !== "/" && currentPath !== "/about";
		if (isProjectPage && !newIsProjectPage) {
			// Delay when transitioning from true to false. This ensures map layers are still visible mid camera change.
			const timeoutId = setTimeout(() => {
				setIsProjectPage(newIsProjectPage);
			}, 1500);
			return () => clearTimeout(timeoutId);
		} else {
			// Immediate update for other transitions
			setIsProjectPage(newIsProjectPage);
		}
	}, [currentPath, isProjectPage]);

	const flyToViewport = useCallback(
		(
			newViewport: ViewState,
			duration: number,
			transitionEasing: (t: number) => number,
		) => {
			if (mapGLRef.current && typeof mapGLRef.current.flyTo === "function") {
				mapGLRef.current.flyTo({
					center: [newViewport.longitude, newViewport.latitude], // Map to center array
					zoom: newViewport.zoom,
					bearing: newViewport.bearing,
					pitch: newViewport.pitch,
					duration,
					// curve: 2, // default curve
					easing: transitionEasing,
				});
			} else {
				console.warn("Map not ready for flyTo; operation deferred.");
			}
		},
		[],
	);

	const mapsStyle: StyleSpecification = useMemo(
		() =>
			getMapStyle({
				API_KEY,
				MAPBOX_TOKEN,
				absoluteBaseURL,
				mapColor,
				isProjectPage,
				currentPath,
			}),
		[
			API_KEY,
			MAPBOX_TOKEN,
			absoluteBaseURL,
			mapColor,
			isProjectPage,
			currentPath,
		],
	);

	const contextValue = useMemo(
		() => ({
			viewport,
			setViewport,
			mapColor,
			setMapColor,
			isMapLoaded,
			setIsMapLoaded,
			mapGlRef: mapGLRef,
			currentPath,
			mapsStyle,
			flyToViewport,
		}),
		[
			viewport,
			mapColor,
			setMapColor,
			currentPath,
			mapsStyle,
			flyToViewport,
			isMapLoaded,
		],
	);

	return (
		<MapContext.Provider value={contextValue}>{children}</MapContext.Provider>
	);
};

export const useMapContext = (): MapContextType => {
	const context = useContext(MapContext);
	if (!context)
		throw new Error("useMapContext must be used within MapProvider");
	return context;
};
