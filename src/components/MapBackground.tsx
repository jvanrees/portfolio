import clsx from "clsx";
import "maplibre-gl/dist/maplibre-gl.css";
import MapGL from "react-map-gl/maplibre";
import { useMapContext } from "../context/mapstyleContext";
import mapBackgroundStyles from "../styles/MapBackground.module.css";

const MapBackground = () => {
	const {
		viewport,
		mapsStyle,
		mapGlRef,
		setViewport,
		setIsMapLoaded,
		currentPath,
	} = useMapContext();

	const overlayClassName = clsx(mapBackgroundStyles.mapOverlay, {
		[mapBackgroundStyles.overlayNightmode]: currentPath === "/nightmode",
		[mapBackgroundStyles.overlayRmaAndroid]: currentPath === "/rma-android",
		[mapBackgroundStyles.overlayQingDynastyMap]: currentPath === "/qing-dynasty-map",
	});

	return (
		<div className={mapBackgroundStyles.backgroundMap}>
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
