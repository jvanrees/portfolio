import clsx from "clsx";
import type { MapMouseEvent } from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import MapGL from "react-map-gl/maplibre";
import { useMapContext } from "../context/mapstyleContext";
import styles from "../styles/MapBackground.module.css";

const MapBackground = () => {
	const {
		viewport,
		mapsStyle,
		mapGlRef,
		setViewport,
		setIsMapLoaded,
		currentPath,
	} = useMapContext();

	const overlayClassName = clsx(styles.mapOverlay, {
		[styles.overlayNightmode]: currentPath === "/nightmode",
		[styles.overlayRmaAndroid]: currentPath === "/rma-android",
		[styles.overlayQingDynastyMap]: currentPath === "/qing-dynasty-map",
	});

	const handleMapClick = (event: MapMouseEvent) => {
		const map = mapGlRef.current?.getMap();
		if (!map) {
			console.log("Map not available");
			return;
		}

		// Get all features at the clicked point
		const features = map.queryRenderedFeatures(event.point);

		// Get unique layer IDs from the features
		const layerIds = [...new Set(features.map((feature) => feature.layer.id))];

		// Get layer information for layers that have features at this point
		const layers = map.getStyle().layers;
		const clickedLayerInfo = layers
			.filter((layer) => layerIds.includes(layer.id))
			.map((layer) => ({
				id: layer.id,
				type: layer.type,
				paint: layer.paint || {},
				layout: layer.layout || {},
				features: features.filter((feature) => feature.layer.id === layer.id),
			}));

		console.log(
			"Layers and paint attributes at clicked point:",
			clickedLayerInfo,
		);
		console.log("Raw features at clicked point:", features);
		return clickedLayerInfo;
	};

	return (
		<div className={styles.backgroundMap}>
			<MapGL
				ref={mapGlRef}
				initialViewState={viewport}
				onMoveEnd={(event) => setViewport(event.viewState)}
				mapStyle={mapsStyle}
				onLoad={() => {
					setIsMapLoaded(true);
					// Uncomment for debugging.
					// window.mapBackgroundMap = mapGlRef.current?.getMap();
				}}
				onClick={handleMapClick}
			>
				<div className={overlayClassName}></div>
			</MapGL>
		</div>
	);
};

export default MapBackground;
