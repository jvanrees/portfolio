import 'maplibre-gl/dist/maplibre-gl.css';
import Map, { ViewState } from 'react-map-gl/maplibre';
import { config } from '../config';

const API_KEY = config.maptilerApiKey;

const MapBackground = ({
    viewport
}: {
    viewport: ViewState;
}) => {
    // ...map style logic (move from App.js here)...
    return (
        <div className='map'>
            <Map
                {...viewport}

                // style={{ position: "absolute", top: 0, left: 0, width: "100vw", height: "100vh", zIndex: 1 }}
                mapStyle={`https://api.maptiler.com/maps/streets/style.json?key=${API_KEY}`}
            >
                <div className='map-overlay'></div>
            </Map>
        </div>
    );
};

export default MapBackground;