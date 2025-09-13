import 'maplibre-gl/dist/maplibre-gl.css';
import { useEffect, useRef } from 'react';
import Map, { MapRef, NavigationControl } from 'react-map-gl/maplibre';
import { config } from '../config';
import styles from '../styles/QingMap.module.css';

const MAPTILER_API_KEY = config.maptilerApiKey;
const MAPBOX_API_KEY = config.mapboxApiKey;

// Minimal inline Qing style (adapted from the preview HTML)
const qingStyle: any = {
    version: 8,
    name: 'Qing',
    metadata: {},
    sources: {
        openmaptiles: {
            type: 'vector',
            url: `https://api.maptiler.com/tiles/v3/tiles.json?key=${MAPTILER_API_KEY}`
        },
        vector_mountain: {
            type: 'vector',
            // leave access token blank; this layer may fail if a Mapbox token isn't available
            url: `https://api.mapbox.com/v4/jvanrees.6lps1j6n/{z}/{x}/{y}.pbf?access_token=${MAPBOX_API_KEY}`
        }
    },
    sprite: 'https://s3.amazonaws.com/jvr-portfolio-examples/portfolio_bg',
    glyphs: `https://api.mapbox.com/fonts/v1/jvanrees/{fontstack}/{range}.pbf?access_token=${MAPBOX_API_KEY}`,
    layers: [
        {
            id: 'background',
            type: 'background',
            paint: { 'background-color': '#DCBA92' }
        },
        {
            id: 'regular_park',
            type: 'fill',
            source: 'openmaptiles',
            'source-layer': 'park',
            layout: { visibility: 'visible' },
            paint: { 'fill-color': 'hsl(80, 11%, 95%)' }
        },
        {
            id: 'regular_water',
            type: 'fill',
            source: 'openmaptiles',
            'source-layer': 'water',
            layout: { visibility: 'visible' },
            paint: { 'fill-color': 'hsl(193, 20%, 81%)', 'fill-antialias': true }
        },
        {
            id: 'map_overlay',
            type: 'background',
            layout: { visibility: 'visible' },
            paint: { 'background-opacity': 0.09, 'background-pattern': 'bg_overlay2' }
        },
        {
            id: 'qing-bg_add',
            type: 'background',
            layout: { visibility: 'visible' },
            paint: { 'background-opacity': 1, 'background-pattern': 'qing_bg' }
        },
        {
            id: 'qing_water_pattern_add',
            type: 'fill',
            source: 'openmaptiles',
            'source-layer': 'water',
            layout: { visibility: 'visible' },
            paint: { 'fill-color': '#152832', 'fill-antialias': true, 'fill-opacity': 1, 'fill-pattern': 'vector_water_vector_water2' }
        },
        {
            id: 'qing_vector_mountain_add',
            type: 'symbol',
            source: 'vector_mountain',
            'source-layer': 'updated_mountains-2hxde7',
            layout: {
                visibility: 'visible',
                'icon-size': 0.5,
                'icon-image': ['case', ['match', ['get', 'scalerank'], [1, 2], true, false], 'vector_mountains', ['match', ['get', 'scalerank'], [3, 4], true, false], 'vector_mountains', 'vector_mountains']
            },
            paint: { 'icon-opacity': 1 }
        }
    ]
};

const QingMap = () => {
    const mapRef = useRef<MapRef | null>(null);

    useEffect(() => {
        const map = mapRef.current?.getMap();
        if (!map) return;

        const onStyleImageMissing = (e: any) => console.log('missing image:', e.id);
        const onError = (e: any) => console.log('map error', e.error || e);

        map.on('styleimagemissing', onStyleImageMissing);
        map.on('error', onError);

        return () => {
            map.off('styleimagemissing', onStyleImageMissing);
            map.off('error', onError);
        };
    }, []);

    return (
        <div className={styles.container}>
            <Map
                ref={mapRef}
                initialViewState={{ longitude: 79.24, latitude: 5.0, zoom: 4.53 }}
                mapStyle={qingStyle}
                style={{ width: '100%', height: '100%' }}
            >
                <NavigationControl position="top-left" />
            </Map>

            <div className={styles.info}>Qing style preview — centered on (5.0, 79.24)</div>
        </div>
    );
};

export default QingMap;
