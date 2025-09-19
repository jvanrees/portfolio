import "maplibre-gl/dist/maplibre-gl.css";
import MapGL from "react-map-gl/maplibre";
import config from "../config.ts";
import { useMapContext } from "../mapstyleContext";
import styles from "../styles/MapBackground.module.css";

const MAP_TILER_API_KEY = config.maptilerApiKey;
const MAPBOX_API_KEY = config.mapboxApiKey;

const MapBackground = () => {
	const { viewport, mapsStyle } = useMapContext();

	return (
		<div className={styles.backgroundMap}>
			<MapGL {...viewport} mapStyle={mapsStyle}>
				<div className={styles.mapOverlay}></div>
			</MapGL>
		</div>
	);
};

export default MapBackground;
