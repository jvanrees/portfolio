//This file contains the configuration for the maps API keys.

export const config = {
    maptilerApiKey: import.meta.env.PUBLIC_MAPTILER_API_KEY,
    mapboxApiKey: import.meta.env.PUBLIC_MAPBOX_API_KEY
}

if (!config.maptilerApiKey) {
    throw new Error("Missing MAPTILER_API_KEY in environment variables");
}

if (!config.mapboxApiKey) {
    throw new Error("Missing MAPBOX_API_KEY in environment variables");
}
