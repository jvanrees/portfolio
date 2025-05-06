//This file contains the configuration for the MapTiler API key.

export const config = {
    maptilerApiKey: import.meta.env.PUBLIC_MAPTILER_API_KEY
}

if (!config.maptilerApiKey) {
    throw new Error("Missing MAPTILER_API_KEY in environment variables");
}
