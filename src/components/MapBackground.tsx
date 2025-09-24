import clsx from "clsx";
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
			>
				<div className={overlayClassName}></div>
			</MapGL>
		</div>
	);
};

export default MapBackground;
