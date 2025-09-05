import 'maplibre-gl/dist/maplibre-gl.css';
import Map, { ViewState } from 'react-map-gl/maplibre';
import { config } from '../config';
import styles from '../styles/MapBackground.module.css';

const API_KEY = config.maptilerApiKey;

const MapBackground = ({
    viewport
}: {
    viewport: ViewState;
}) => {
    return (
        <div className={styles.backgroundMap}>
            <Map
                {...viewport}
                mapStyle={`https://api.maptiler.com/maps/dataviz/style.json?key=${API_KEY}`}
            >
                <div className={styles.mapOverlay}></div>
            </Map>
        </div>
    );
};

export default MapBackground;