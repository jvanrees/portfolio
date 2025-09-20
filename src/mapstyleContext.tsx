import { useLocation } from "@tanstack/react-router";
import type React from "react";
import {
	createContext,
	type ReactNode,
	useContext,
	useEffect,
	useState,
} from "react";
import type { StyleSpecification, ViewState } from "react-map-gl/maplibre";
import config from "./config.ts";

interface MapColor {
	background: string;
	park: string;
	water: string;
	roadLow: string;
	roadHigh: string;
	mapOverlayOpacity: number;
}

interface MapContextType {
	viewport: ViewState;
	setViewport: React.Dispatch<React.SetStateAction<ViewState>>;
	mapColor: MapColor;
	setMapColor: React.Dispatch<React.SetStateAction<MapColor>>;
	currentPath: string;
	mapsStyle: string | StyleSpecification;
}

const defaultViewport: ViewState = {
	latitude: 40.5853,
	longitude: -105.0844,
	zoom: 12,
	bearing: 0,
	pitch: 0,
	padding: { top: 0, bottom: 0, left: 0, right: 0 },
};
const defaultMapColor: MapColor = {
	background: "hsla(0, 0%, 100%, 1.00)",
	park: "hsla(105, 8%, 91%, 1.00)",
	water: "hsla(200, 50%, 70%, 1.00)",
	roadLow: "hsla(0, 0%, 100%, 1.00)",
	roadHigh: "hsla(0, 0%, 85%, 0.53)",
	mapOverlayOpacity: 0.0,
};
const MapContext = createContext<MapContextType>({
	viewport: defaultViewport,
	setViewport: () => {},
	mapColor: defaultMapColor,
	setMapColor: () => {},
	currentPath: "",
	mapsStyle: {} as StyleSpecification,
});

export const MapProvider: React.FC<{ children: ReactNode }> = ({
	children,
}) => {
	const [viewport, setViewport] = useState<ViewState>(defaultViewport);
	const [mapColor, setMapColor] = useState<MapColor>(defaultMapColor);
	const currentPath = useLocation().pathname;
	const [isProjectPage, setIsProjectPage] = useState<boolean>(
		currentPath !== "/" && currentPath !== "/about",
	);

	const absoluteBaseURL = new URL(
		import.meta.env.BASE_URL,
		window.location.origin,
	);
	const API_KEY = config.maptilerApiKey;
	const MAPBOX_TOKEN = config.mapboxApiKey;

	useEffect(() => {
		setIsProjectPage(currentPath !== "/" && currentPath !== "/about");
	}, [currentPath]);

	const mapsStyle: StyleSpecification = {
		version: 8,
		name: "JVR Portfolio Background",
		metadata: {
			"openmaptiles:version": "3.x",
			modified_from: "https://github.com/openmaptiles/positron-gl-style",
			source_license:
				"BSD 3-Clause License (https://github.com/openmaptiles/positron-gl-style/blob/master/LICENSE.md)",
			source_design_license:
				"CC-BY 4.0 (https://creativecommons.org/licenses/by/4.0/)",
			attribution: "© OpenMapTiles © OpenStreetMap contributors",
		},
		sources: {
			openmaptiles: {
				type: "vector",
				url: `https://api.maptiler.com/tiles/v3/tiles.json?key=${API_KEY}`,
			},
			vector_mountain: {
				type: "vector",
				tiles: [
					`https://api.mapbox.com/v4/jvanrees.6lps1j6n/{z}/{x}/{y}.vector.pbf?access_token=${MAPBOX_TOKEN}`,
				],
			},
			historic_buildings: {
				type: "vector",
				tiles: [
					`https://api.mapbox.com/v4/jvanrees.dm8bkhvt/{z}/{x}/{y}.vector.pbf?access_token=${MAPBOX_TOKEN}`,
				],
			},
			historic_bldg_label_roads: {
				type: "vector",
				tiles: [
					`https://api.mapbox.com/v4/jvanrees.9n9jyp66/{z}/{x}/{y}.vector.pbf?access_token=${MAPBOX_TOKEN}`,
				],
			},
			rma_present_features: {
				type: "geojson",
				// data: `${fullURL}Present_Features_reorganized.geojson`,
				data: new URL("Present_Features_reorganized.geojson", absoluteBaseURL)
					.href,
			},
			natural_earth_raster: {
				type: "raster",
				tiles: [
					"https://klokantech.github.io/naturalearthtiles/tiles/natural_earth_2_shaded_relief.raster/{z}/{x}/{y}.png",
				],
				minzoom: 0,
				maxzoom: 6,
			},
			country_borders: {
				type: "geojson",
				data: new URL("countryBorders.geojson", absoluteBaseURL).href,
			},
		},
		sprite: new URL("portfolio_bg", absoluteBaseURL).href,
		glyphs: "mapbox://fonts/jvanrees/{fontstack}/{range}.pbf",
		layers: [
			{
				id: "regular_park",
				type: "fill",
				source: "openmaptiles",
				"source-layer": "park",
				filter: ["==", "$type", "Polygon"],
				layout: {
					visibility: "visible",
				},
				paint: {
					"fill-color": "hsla(105, 8%, 90%, 1.00)",
					//
				},
			},
			{
				id: "regular_water",
				type: "fill",
				source: "openmaptiles",
				"source-layer": "water",
				filter: ["==", "$type", "Polygon"],
				layout: {
					visibility: "visible",
				},
				paint: {
					"fill-color": "hsla(195, 8%, 78%, 1)",
				},
			},
			{
				id: "regular_landuse_residential",
				type: "fill",
				source: "openmaptiles",
				"source-layer": "landuse",
				filter: ["==", "class", "residential"],
				layout: {
					visibility: "visible",
				},
				paint: {
					"fill-color": "hsla(60, 6%, 92%, 1)",
				},
			},
			{
				id: "regular_landcover_wood",
				type: "fill",
				source: "openmaptiles",
				"source-layer": "landcover",
				minzoom: 10,
				filter: ["all", ["==", "$type", "Polygon"], ["==", "class", "wood"]],
				layout: {
					visibility: "visible",
				},
				paint: {
					"fill-color": "hsla(120, 6%, 90%, 1.00)",
					"fill-opacity": [
						"interpolate",
						["exponential", 1],
						["zoom"],
						8,
						0,
						12,
						1,
					],
				},
			},
			{
				id: "regular_waterway",
				type: "line",
				source: "openmaptiles",
				"source-layer": "waterway",
				filter: ["==", "$type", "LineString"],
				layout: {
					visibility: "visible",
				},
				paint: {
					"line-color": "hsla(193, 17%, 78%, 1)",
				},
			},
			{
				id: "regular_tunnel_motorway_casing",
				type: "line",
				source: "openmaptiles",
				"source-layer": "transportation",
				minzoom: 6,
				filter: [
					"all",
					["==", "$type", "LineString"],
					["all", ["==", "brunnel", "tunnel"], ["==", "class", "motorway"]],
				],
				layout: {
					"line-cap": "butt",
					"line-join": "miter",
					visibility: "visible",
				},
				paint: {
					"line-color": "hsla(0, 0%, 84%, 1.00)",
					"line-width": [
						"interpolate",
						["exponential", 1.4],
						["zoom"],
						5.8,
						0,
						6,
						3,
						20,
						40,
					],
					"line-opacity": 1,
				},
			},
			{
				id: "regular_tunnel_motorway_inner",
				type: "line",
				source: "openmaptiles",
				"source-layer": "transportation",
				minzoom: 6,
				filter: [
					"all",
					["==", "$type", "LineString"],
					["all", ["==", "brunnel", "tunnel"], ["==", "class", "motorway"]],
				],
				layout: {
					"line-cap": "round",
					"line-join": "round",
					visibility: "visible",
				},
				paint: {
					"line-color": "hsla(0, 0%, 95%, 1.00)",
					"line-width": [
						"interpolate",
						["exponential", 1.4],
						["zoom"],
						4,
						2,
						6,
						1.3,
						20,
						30,
					],
				},
			},
			{
				id: "regular_highway_path",
				type: "line",
				source: "openmaptiles",
				"source-layer": "transportation",
				filter: ["all", ["==", "$type", "LineString"], ["==", "class", "path"]],
				layout: {
					"line-cap": "round",
					"line-join": "round",
					visibility: "visible",
				},
				paint: {
					"line-color": "hsla(0, 0%, 92%, 1.00)",
					"line-width": [
						"interpolate",
						["exponential", 1.2],
						["zoom"],
						13,
						1,
						20,
						10,
					],
					"line-opacity": 1,
				},
			},
			{
				id: "regular_highway_minor",
				type: "line",
				source: "openmaptiles",
				"source-layer": "transportation",
				minzoom: 8,
				filter: [
					"all",
					["==", "$type", "LineString"],
					["in", "class", "minor", "service", "track"],
				],
				layout: {
					"line-cap": "round",
					"line-join": "round",
					visibility: "visible",
				},
				paint: {
					"line-color": "hsla(0, 0%, 88%, 1)",
					"line-width": [
						"interpolate",
						["exponential", 1.55],
						["zoom"],
						13,
						1.8,
						20,
						20,
					],
					"line-opacity": 0.8,
				},
			},
			{
				id: "regular_highway_major_casing",
				type: "line",
				source: "openmaptiles",
				"source-layer": "transportation",
				minzoom: 11,
				filter: [
					"all",
					["==", "$type", "LineString"],
					["in", "class", "primary", "secondary", "tertiary", "trunk"],
				],
				layout: {
					"line-cap": "butt",
					"line-join": "miter",
					visibility: "visible",
				},
				paint: {
					"line-color": "hsla(0, 0%, 85%, 1.00)",
					"line-dasharray": [12, 0],
					"line-width": [
						"interpolate",
						["exponential", 1.3],
						["zoom"],
						10,
						3,
						20,
						23,
					],
				},
			},
			{
				id: "regular_highway_major_inner",
				type: "line",
				source: "openmaptiles",
				"source-layer": "transportation",
				minzoom: 11,
				filter: [
					"all",
					["==", "$type", "LineString"],
					["in", "class", "primary", "secondary", "tertiary", "trunk"],
				],
				layout: {
					"line-cap": "round",
					"line-join": "round",
					visibility: "visible",
				},
				paint: {
					"line-color": "hsla(0, 0%, 98%, 1.00)",
					"line-width": [
						"interpolate",
						["exponential", 1.3],
						["zoom"],
						10,
						2,
						20,
						20,
					],
				},
			},
			{
				id: "regular_highway_major_subtle",
				type: "line",
				source: "openmaptiles",
				"source-layer": "transportation",
				maxzoom: 11,
				filter: [
					"all",
					["==", "$type", "LineString"],
					["in", "class", "primary", "secondary", "tertiary", "trunk"],
				],
				layout: {
					"line-cap": "round",
					"line-join": "round",
					visibility: "visible",
				},
				paint: {
					"line-color": "hsla(0, 0%, 92%, 0.69)",
					"line-width": 2,
				},
			},
			{
				id: "regular_highway_motorway_casing",
				type: "line",
				source: "openmaptiles",
				"source-layer": "transportation",
				minzoom: 6,
				filter: [
					"all",
					["==", "$type", "LineString"],
					[
						"all",
						["!in", "brunnel", "bridge", "tunnel"],
						["==", "class", "motorway"],
					],
				],
				layout: {
					"line-cap": "butt",
					"line-join": "miter",
					visibility: "visible",
				},
				paint: {
					"line-color": "hsla(0, 0%, 84%, 1.00)",
					"line-width": [
						"interpolate",
						["exponential", 1.4],
						["zoom"],
						5.8,
						0,
						6,
						3,
						20,
						40,
					],
					"line-dasharray": [2, 0],
					"line-opacity": 1,
				},
			},
			{
				id: "regular_highway_motorway_inner",
				type: "line",
				source: "openmaptiles",
				"source-layer": "transportation",
				minzoom: 6,
				filter: [
					"all",
					["==", "$type", "LineString"],
					[
						"all",
						["!in", "brunnel", "bridge", "tunnel"],
						["==", "class", "motorway"],
					],
				],
				layout: {
					"line-cap": "round",
					"line-join": "round",
					visibility: "visible",
				},
				paint: {
					"line-color": [
						"interpolate",
						["exponential", 1],
						["zoom"],
						5.8,
						"hsla(0, 0%, 90%, 0.53)",
						6,
						"hsla(0, 0%, 98%, 1.00)",
					],
					"line-width": [
						"interpolate",
						["exponential", 1.4],
						["zoom"],
						4,
						2,
						6,
						1.3,
						20,
						30,
					],
				},
			},
			{
				id: "regular_highway_motorway_subtle",
				type: "line",
				source: "openmaptiles",
				"source-layer": "transportation",
				maxzoom: 6,
				filter: [
					"all",
					["==", "$type", "LineString"],
					["==", "class", "motorway"],
				],
				layout: {
					"line-cap": "round",
					"line-join": "round",
					visibility: "visible",
				},
				paint: {
					"line-color": "hsla(0, 0%, 90%, 0.53)",
					"line-width": [
						"interpolate",
						["exponential", 1.4],
						["zoom"],
						4,
						2,
						6,
						1.3,
					],
				},
			},
			{
				id: "regular_highway_motorway_bridge_casing",
				type: "line",
				source: "openmaptiles",
				"source-layer": "transportation",
				minzoom: 6,
				filter: [
					"all",
					["==", "$type", "LineString"],
					["all", ["==", "brunnel", "bridge"], ["==", "class", "motorway"]],
				],
				layout: {
					"line-cap": "butt",
					"line-join": "miter",
					visibility: "visible",
				},
				paint: {
					"line-color": "hsla(0, 0%, 84%, 1.00)",
					"line-width": [
						"interpolate",
						["exponential", 1.4],
						["zoom"],
						5.8,
						0,
						6,
						5,
						20,
						45,
					],
					"line-dasharray": [2, 0],
					"line-opacity": 1,
				},
			},
			{
				id: "regular_highway_motorway_bridge_inner",
				type: "line",
				source: "openmaptiles",
				"source-layer": "transportation",
				minzoom: 6,
				filter: [
					"all",
					["==", "$type", "LineString"],
					["all", ["==", "brunnel", "bridge"], ["==", "class", "motorway"]],
				],
				layout: {
					"line-cap": "round",
					"line-join": "round",
					visibility: "visible",
				},
				paint: {
					"line-color": [
						"interpolate",
						["exponential", 1],
						["zoom"],
						5.8,
						"hsla(0, 0%, 90%, 0.53)",
						6,
						"hsla(0, 0%, 95%, 1.00)",
					],
					"line-width": [
						"interpolate",
						["exponential", 1.4],
						["zoom"],
						4,
						2,
						6,
						1.3,
						20,
						30,
					],
				},
			},

			{
				id: "night_background",
				type: "background",
				paint: {
					"background-color": mapColor.background,
					"background-opacity": isProjectPage ? 0.5 : 0,
					"background-opacity-transition": {
						duration: 2000,
						delay: 0,
					},
					"background-color-transition": {
						duration: 2000,
						delay: 0,
					},
				},
			},
			{
				id: "night_park",
				type: "fill",
				source: "openmaptiles",
				"source-layer": "park",
				filter: ["==", "$type", "Polygon"],
				layout: {
					visibility: "visible",
				},
				paint: {
					"fill-color": mapColor.park,
					"fill-opacity": isProjectPage ? 0.5 : 0,
					"fill-color-transition": {
						duration: 2000,
						delay: 0,
					},
					"fill-opacity-transition": {
						duration: 2000,
						delay: 0,
					},
				},
			},
			{
				id: "qing-bg_add",
				type: "background",
				layout: {
					visibility: currentPath === "/qing-dynasty-map" ? "visible" : "none",
				},
				paint: {
					"background-opacity": isProjectPage ? 0.5 : 0,
					"background-pattern": "qing_bg",
					"background-opacity-transition": { duration: 2000, delay: 0 },
				},
			},
			{
				id: "historic_park_add",
				type: "fill",
				source: "openmaptiles",
				"source-layer": "park",
				minzoom: 0,
				filter: ["==", "$type", "Polygon"],
				layout: {
					visibility: currentPath === "/rma-android" ? "visible" : "none",
				},
				paint: {
					"fill-pattern": "rma_historic_pebble_background4-2",
					"fill-opacity": isProjectPage ? 0.5 : 0,
					"fill-opacity-transition": { duration: 2000, delay: 0 },
				},
			},
			{
				id: "shaded_landcover_wood_add",
				type: "fill",
				source: "openmaptiles",
				"source-layer": "landcover",
				minzoom: 0,
				maxzoom: 20,
				filter: ["all", ["==", "$type", "Polygon"], ["==", "class", "wood"]],
				layout: {
					visibility: currentPath === "/shaded-relief" ? "visible" : "none",
				},
				paint: {
					"fill-opacity": isProjectPage ? 0.5 : 0,
					"fill-color": [
						"case",
						["match", ["get", "class"], ["wood"], true, false],
						"hsla(152, 100%, 20%, 1.00)",
						["match", ["get", "class"], ["grass"], true, false],
						"hsla(112, 19%, 68%, 1.00)",
						["match", ["get", "class"], ["snow"], true, false],
						"hsla(0, 0%, 95%, 1.00)",
						"hsla(77, 36%, 47%, 1.00)",
					],
					"fill-opacity-transition": { duration: 2000, delay: 0 },
				},
			},
			{
				id: "leaflet_country_borders_add",
				type: "fill",
				source: "country_borders",
				minzoom: 0,
				maxzoom: 24,
				layout: {
					visibility: currentPath === "/even-more-maps" ? "visible" : "none",
				},
				paint: {
					"fill-opacity": isProjectPage ? 0.5 : 0,
					"fill-color": ["get", "color"],
					"fill-opacity-transition": { duration: 2000, delay: 0 },
				},
			},
			{
				id: "leaflet_boundary_state",
				type: "line",
				source: "openmaptiles",
				"source-layer": "boundary",
				filter: ["==", "admin_level", 4],
				layout: {
					"line-cap": "round",
					"line-join": "round",
					visibility: currentPath === "/even-more-maps" ? "visible" : "none",
				},
				paint: {
					"line-color": "hsla(213, 75%, 20%, 1.00)",
					"line-width": [
						"interpolate",
						["exponential", 1.3],
						["zoom"],
						3,
						2,
						22,
						40,
					],
					"line-blur": 0.4,
					"line-dasharray": [1, 2, 3, 2],
					"line-opacity": isProjectPage ? 0.5 : 0,
					"line-opacity-transition": { duration: 2000, delay: 200 },
				},
			},
			{
				id: "google_map_natural_earth_raster_add",
				type: "raster",
				source: "natural_earth_raster",
				layout: {
					visibility: currentPath === "/google-maps-api" ? "visible" : "none",
				},
				paint: {
					"raster-opacity": isProjectPage ? 1 : 0,
					"raster-opacity-transition": { duration: 2000, delay: 250 },
				},
			},
			{
				id: "night_water",
				type: "fill",
				source: "openmaptiles",
				"source-layer": "water",
				filter: ["==", "$type", "Polygon"],
				layout: {
					visibility: "visible",
				},
				paint: {
					"fill-color": mapColor.water,
					"fill-antialias": true,
					"fill-opacity": isProjectPage ? 0.5 : 0,
					"fill-color-transition": {
						duration: 2000,
						delay: 0,
					},
				},
			},
			{
				id: "qing_water_pattern_add",
				type: "fill",
				source: "openmaptiles",
				"source-layer": "water",
				filter: ["==", "$type", "Polygon"],
				layout: {
					visibility: currentPath === "/qing-dynasty-map" ? "visible" : "none",
				},
				paint: {
					"fill-color": "hsla(201, 41%, 14%, 1.00)",
					"fill-antialias": true,
					"fill-opacity": isProjectPage ? 0.5 : 0,
					"fill-pattern": "vector_water_vector_water2",
					"fill-opacity-transition": { duration: 2000, delay: 0 },
				},
			},
			{
				id: "night_waterway",
				type: "line",
				source: "openmaptiles",
				"source-layer": "waterway",
				filter: ["==", "$type", "LineString"],
				layout: {
					visibility: "visible",
				},
				paint: {
					"line-color": mapColor.water,
					"line-opacity": isProjectPage ? 0.5 : 0,
					"line-color-transition": {
						duration: 2000,
						delay: 0,
					},
					"line-opacity-transition": {
						duration: 2000,
						delay: 0,
					},
				},
			},
			{
				id: "night_highway_path",
				type: "line",
				source: "openmaptiles",
				"source-layer": "transportation",
				filter: ["all", ["==", "$type", "LineString"], ["==", "class", "path"]],
				layout: {
					"line-cap": "round",
					"line-join": "round",
					visibility: "none",
				},
				paint: {
					"line-color": mapColor.roadLow,
					"line-width": [
						"interpolate",
						["exponential", 1.2],
						["zoom"],
						13,
						1,
						20,
						10,
					],
					"line-color-transition": {
						duration: 2000,
						delay: 0,
					},
					"line-opacity": isProjectPage ? 0.5 : 0,
					"line-opacity-transition": { duration: 2000, delay: 0 },
				},
			},
			{
				id: "night_highway_minor",
				type: "line",
				source: "openmaptiles",
				"source-layer": "transportation",
				minzoom: 8,
				filter: [
					"all",
					["==", "$type", "LineString"],
					["in", "class", "minor", "service", "track"],
				],
				layout: {
					"line-cap": "round",
					"line-join": "round",
					visibility: "none",
				},
				paint: {
					"line-color": mapColor.roadLow,
					"line-width": [
						"interpolate",
						["exponential", 1.55],
						["zoom"],
						13,
						1.8,
						20,
						20,
					],
					"line-opacity": isProjectPage ? 0.5 : 0,
					"line-color-transition": {
						duration: 2000,
						delay: 0,
					},
					"line-opacity-transition": {
						duration: 2000,
						delay: 0,
					},
				},
			},
			{
				id: "night_highway_major_casing",
				type: "line",
				source: "openmaptiles",
				"source-layer": "transportation",
				minzoom: 11,
				filter: [
					"all",
					["==", "$type", "LineString"],
					["in", "class", "primary", "secondary", "tertiary", "trunk"],
				],
				layout: {
					"line-cap": "butt",
					"line-join": "miter",
					visibility: "visible",
				},
				paint: {
					"line-color": mapColor.roadLow,
					"line-dasharray": [12, 0],
					"line-width": [
						"interpolate",
						["exponential", 1.3],
						["zoom"],
						10,
						3,
						20,
						23,
					],
					"line-opacity": isProjectPage ? 0.5 : 0,
					"line-color-transition": {
						duration: 2000,
						delay: 0,
					},
					"line-opacity-transition": {
						duration: 2000,
						delay: 0,
					},
				},
			},
			{
				id: "night_highway_major_inner",
				type: "line",
				source: "openmaptiles",
				"source-layer": "transportation",
				minzoom: 11,
				filter: [
					"all",
					["==", "$type", "LineString"],
					["in", "class", "primary", "secondary", "tertiary", "trunk"],
				],
				layout: {
					"line-cap": "round",
					"line-join": "round",
					visibility: "visible",
				},
				paint: {
					"line-color": mapColor.roadLow,
					"line-width": [
						"interpolate",
						["exponential", 1.3],
						["zoom"],
						10,
						2,
						20,
						20,
					],
					"line-opacity": isProjectPage ? 0.5 : 0,
					"line-color-transition": {
						duration: 2000,
						delay: 0,
					},
					"line-opacity-transition": {
						duration: 2000,
						delay: 0,
					},
				},
			},
			{
				id: "night_highway_major_subtle",
				type: "line",
				source: "openmaptiles",
				"source-layer": "transportation",
				maxzoom: 11,
				filter: [
					"all",
					["==", "$type", "LineString"],
					["in", "class", "primary", "secondary", "tertiary", "trunk"],
				],
				layout: {
					"line-cap": "round",
					"line-join": "round",
					visibility: "visible",
				},
				paint: {
					"line-color": mapColor.roadLow,
					"line-width": 2,
					"line-opacity": isProjectPage ? 0.5 : 0,
					"line-color-transition": {
						duration: 2000,
						delay: 0,
					},
					"line-opacity-transition": {
						duration: 2000,
						delay: 0,
					},
				},
			},
			{
				id: "night_highway_motorway_casing",
				type: "line",
				source: "openmaptiles",
				"source-layer": "transportation",
				minzoom: 6,
				filter: [
					"all",
					["==", "$type", "LineString"],
					[
						"all",
						["!in", "brunnel", "bridge", "tunnel"],
						["==", "class", "motorway"],
					],
				],
				layout: {
					"line-cap": "butt",
					"line-join": "miter",
					visibility: "visible",
				},
				paint: {
					"line-color": mapColor.roadHigh,
					"line-width": [
						"interpolate",
						["exponential", 1.4],
						["zoom"],
						5.8,
						0,
						6,
						3,
						20,
						40,
					],
					"line-dasharray": [2, 0],
					"line-opacity": isProjectPage ? 0.5 : 0,
					"line-color-transition": {
						duration: 2000,
						delay: 0,
					},
					"line-opacity-transition": {
						duration: 2000,
						delay: 0,
					},
				},
			},
			{
				id: "night_highway_motorway_inner",
				type: "line",
				source: "openmaptiles",
				"source-layer": "transportation",
				minzoom: 6,
				filter: [
					"all",
					["==", "$type", "LineString"],
					[
						"all",
						["!in", "brunnel", "bridge", "tunnel"],
						["==", "class", "motorway"],
					],
				],
				layout: {
					"line-cap": "round",
					"line-join": "round",
					visibility: "visible",
				},
				paint: {
					"line-color": [
						"interpolate",
						["exponential", 1],
						["zoom"],
						5.8,
						"hsla(39, 53%, 54%,0.8)",
						6,
						"hsla(39, 53%, 54%,0.8)",
					],
					"line-width": [
						"interpolate",
						["exponential", 1.4],
						["zoom"],
						4,
						2,
						6,
						1.3,
						20,
						30,
					],
					"line-opacity": isProjectPage ? 0.5 : 0,
					"line-opacity-transition": { duration: 2000, delay: 0 },
				},
			},
			{
				id: "night_highway_motorway_subtle",
				type: "line",
				source: "openmaptiles",
				"source-layer": "transportation",
				maxzoom: 6,
				filter: [
					"all",
					["==", "$type", "LineString"],
					["==", "class", "motorway"],
				],
				layout: {
					"line-cap": "round",
					"line-join": "round",
					visibility: "visible",
				},
				paint: {
					"line-color": mapColor.roadHigh,
					"line-width": [
						"interpolate",
						["exponential", 1.4],
						["zoom"],
						4,
						2,
						6,
						1.3,
					],
					"line-opacity": isProjectPage ? 0.5 : 0,
					"line-color-transition": {
						duration: 2000,
						delay: 0,
					},
					"line-opacity-transition": {
						duration: 2000,
						delay: 0,
					},
				},
			},
			{
				id: "night_highway_motorway_bridge_casing",
				type: "line",
				source: "openmaptiles",
				"source-layer": "transportation",
				minzoom: 6,
				filter: [
					"all",
					["==", "$type", "LineString"],
					["all", ["==", "brunnel", "bridge"], ["==", "class", "motorway"]],
				],
				layout: {
					"line-cap": "butt",
					"line-join": "miter",
					visibility: "visible",
				},
				paint: {
					"line-color": mapColor.roadHigh,
					"line-width": [
						"interpolate",
						["exponential", 1.4],
						["zoom"],
						5.8,
						0,
						6,
						5,
						20,
						45,
					],
					"line-dasharray": [2, 0],
					"line-opacity": isProjectPage ? 0.5 : 0,
					"line-color-transition": {
						duration: 2000,
						delay: 0,
					},
					"line-opacity-transition": {
						duration: 2000,
						delay: 0,
					},
				},
			},
			{
				id: "night_highway_motorway_bridge_inner",
				type: "line",
				source: "openmaptiles",
				"source-layer": "transportation",
				minzoom: 6,
				filter: [
					"all",
					["==", "$type", "LineString"],
					["all", ["==", "brunnel", "bridge"], ["==", "class", "motorway"]],
				],
				layout: {
					"line-cap": "round",
					"line-join": "round",
					visibility: "visible",
				},
				paint: {
					"line-color": [
						"interpolate",
						["exponential", 1],
						["zoom"],
						5.8,
						"hsla(39, 53%, 54%,0.8)",
						6,
						"hsla(39, 53%, 54%,0.8)",
					],
					"line-width": [
						"interpolate",
						["exponential", 1.4],
						["zoom"],
						4,
						2,
						6,
						1.3,
						20,
						30,
					],
					"line-opacity": isProjectPage ? 0.5 : 0,
					"line-opacity-transition": { duration: 2000, delay: 0 },
				},
			},
			{
				id: "map_overlay",
				type: "background",
				layout: {
					visibility: "visible",
				},
				paint: {
					"background-opacity": mapColor.mapOverlayOpacity,
					"background-pattern": "bg_overlay2",
					"background-opacity-transition": { duration: 2000, delay: 0 },
				},
			},
			{
				id: "qing_vector_mountain_add",
				type: "symbol",
				source: "vector_mountain",
				"source-layer": "updated_mountains-2hxde7",
				paint: {
					"icon-opacity": isProjectPage ? 0.5 : 0,
					"icon-opacity-transition": { duration: 2000, delay: 0 },
				},
				layout: {
					visibility: currentPath === "/qing-dynasty-map" ? "visible" : "none",
					"icon-size": 0.5,
					"icon-image": [
						"case",
						["match", ["get", "scalerank"], [1, 2], true, false],
						"vector_mountains",
						["match", ["get", "scalerank"], [3, 4], true, false],
						"mountain2",
						["match", ["get", "scalerank"], [4, 5], true, false],
						"mountain4",
						["match", ["get", "scalerank"], [6], true, false],
						"mountain%205",
						["match", ["get", "scalerank"], [7], true, false],
						"mountain4",
						"mountain6",
					],
				},
			},
			{
				id: "historic_buildings_shadow_add",
				type: "line",
				source: "historic_buildings",
				"source-layer": "Historic_Buildings_with_level-8lsqta",
				minzoom: 0,
				maxzoom: 20,
				layout: {
					visibility: currentPath === "/rma-android" ? "visible" : "none",
				},
				paint: {
					"line-width": 6,
					"line-translate": [0.5, 1],
					"line-color": "hsla(251, 0%, 0%, 0.41)",
					"line-blur": 2,
					"line-opacity": [
						"interpolate",
						["exponential", 1],
						["zoom"],
						14.8,
						0.75,
						14.9,
						1,
					],
				},
			},
			{
				id: "historic_buildings_shadowline_add",
				type: "line",
				source: "historic_buildings",
				"source-layer": "Historic_Buildings_with_level-8lsqta",
				minzoom: 0,
				maxzoom: 20,
				layout: {
					visibility: currentPath === "/rma-android" ? "visible" : "none",
				},
				paint: {
					"line-width": [
						"interpolate",
						["exponential", 1],
						["zoom"],
						14.8,
						1,
						15,
						3,
					],
					"line-blur": [
						"interpolate",
						["exponential", 1],
						["zoom"],
						14.8,
						0,
						15,
						1,
					],
					"line-color": "hsl(251, 0%, 0%)",
					"line-opacity": [
						"interpolate",
						["exponential", 1],
						["zoom"],
						12.999,
						0.75,
						13.9,
						1,
					],
				},
			},
			{
				id: "historic_buildings_add",
				type: "fill",
				source: "historic_buildings",
				"source-layer": "Historic_Buildings_with_level-8lsqta",
				minzoom: 0,
				maxzoom: 20,
				layout: {
					visibility: currentPath === "/rma-android" ? "visible" : "none",
				},
				paint: {
					"fill-color": "hsl(0, 0%, 90%)",
					"fill-opacity": [
						"interpolate",
						["exponential", 1],
						["zoom"],
						0.75,
						1,
						22,
						1,
					],
				},
			},
			{
				id: "historic_buildings_pattern_add",
				type: "fill",
				source: "historic_buildings",
				"source-layer": "Historic_Buildings_with_level-8lsqta",
				minzoom: 0,
				maxzoom: 20,
				layout: {
					visibility: currentPath === "/rma-android" ? "visible" : "none",
				},
				paint: {
					"fill-color": "hsl(0, 0%, 100%)",
					"fill-opacity": [
						"interpolate",
						["exponential", 1],
						["zoom"],
						14,
						0.75,
						15,
						isProjectPage ? 0.5 : 0,
					],
					"fill-pattern": "16_rma_historic_pebble_background4",
					"fill-opacity-transition": { duration: 2000, delay: 0 },
				},
			},
			{
				id: "historic_buildings_3d_color_add",
				type: "fill-extrusion",
				source: "historic_buildings",
				"source-layer": "Historic_Buildings_with_level-8lsqta",
				minzoom: 0,
				maxzoom: 20,
				layout: {
					visibility: currentPath === "/rma-android" ? "visible" : "none",
				},
				paint: {
					"fill-extrusion-height": [
						"interpolate",
						["linear"],
						["zoom"],
						17,
						["interpolate", ["linear"], ["get", "levels"], 1, 0.1, 7, 0.7],
						17.9,
						["interpolate", ["linear"], ["get", "levels"], 1, 4.3, 7, 30.1],
					],
					"fill-extrusion-color": "hsla(203, 25%, 72%, 1.00)",
					"fill-extrusion-opacity": 0.7,
				},
			},
			{
				id: "historic_buildings_label_add",
				type: "symbol",
				source: "historic_bldg_label_roads",
				"source-layer": "Historic_Buildings_Label",
				minzoom: 0,
				maxzoom: 24,
				layout: {
					visibility: currentPath === "/rma-android" ? "visible" : "none",
					"text-line-height": 0.8,
					"text-size": [
						"interpolate",
						["exponential", 1],
						["zoom"],
						13.9,
						0,
						14,
						6,
						18,
						14,
						20,
						35,
					],
					"text-transform": "uppercase",
					"text-font": [
						"Architects Daughter Regular",
						"Arial Unicode MS Regular",
					],
					"text-justify": "left",
					"text-padding": 8,
					"text-rotation-alignment": "map",
					"text-pitch-alignment": "viewport",
					"text-field": ["to-string", ["get", "description_of_structure"]],
					"text-max-width": 8,
					"icon-allow-overlap": false,
					"icon-ignore-placement": false,
					"icon-optional": false,
					"text-allow-overlap": true,
					"text-ignore-placement": true,
					"text-keep-upright": true,
				},
				paint: {
					"text-color": "hsl(40, 0%, 13%)",
					"text-halo-color": "hsla(0, 0%, 100%, 0.96)",
					"text-halo-width": 10,
				},
			},
			{
				id: "historic_buildings_3d_add",
				type: "fill-extrusion",
				source: "historic_buildings",
				"source-layer": "Historic_Buildings_with_level-8lsqta",
				minzoom: 0,
				maxzoom: 20,
				layout: {
					visibility: currentPath === "/rma-android" ? "visible" : "none",
				},
				paint: {
					"fill-extrusion-height": [
						"interpolate",
						["linear"],
						["zoom"],
						17.7,
						["interpolate", ["linear"], ["get", "levels"], 1, 0.1, 7, 0.7],
						17.9,
						["interpolate", ["linear"], ["get", "levels"], 1, 4.3, 7, 30.1],
					],
					"fill-extrusion-color": "hsla(203, 25%, 72%, 1.00)",
					"fill-extrusion-opacity": 0.7,
					"fill-extrusion-pattern": "16_rma_historic_pebble_background4",
				},
			},
			{
				id: "rma_present_features_add",
				type: "symbol",
				source: "rma_present_features",
				minzoom: 10,
				layout: {
					"text-field": "",
					"icon-image": "{marker}",
					visibility:
						currentPath === "/rma-visitor-postgis" ? "visible" : "none",
				},
				paint: {
					"icon-opacity": isProjectPage ? 0.5 : 0,
					"icon-opacity-transition": { duration: 2000, delay: 0 },
				},
			},
		],
		id: "jvr_portfolio_bg",
	};

	return (
		<MapContext.Provider
			value={{
				viewport,
				setViewport,
				mapColor,
				setMapColor,
				currentPath,
				mapsStyle,
			}}
		>
			{children}
		</MapContext.Provider>
	);
};

export const useMapContext = (): MapContextType => {
	const context = useContext(MapContext);
	if (!context)
		throw new Error("useMapContext must be used within MapProvider");
	return context;
};
