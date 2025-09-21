import "maplibre-gl/dist/maplibre-gl.css";
import MapGL from "react-map-gl/maplibre";
import { useMapContext } from "../mapstyleContext";
import styles from "../styles/MapBackground.module.css";

const MapBackground = () => {
	const {
		viewport,
		mapsStyle,
		mapGlRef,
		setViewport,
		setIsMapLoaded,
		mapColor,
	} = useMapContext();

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
				<div
					className={styles.mapOverlay}
					style={{ opacity: mapColor.mapOverlayOpacity + 0.2 }}
				></div>
			</MapGL>
		</div>
	);
};

export default MapBackground;
