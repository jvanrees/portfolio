import { Text } from "@mantine/core";
import type { LayerSpecification } from "maplibre-gl";
import type { ViewState } from "react-map-gl/maplibre";
import config from "../config/config";

const MAPBOX_TOKEN = config.mapboxApiKey;

export interface DataLayer {
	sourceName: string;
	sourceType:
		| "vector"
		| "raster"
		| "raster-dem"
		| "geojson"
		| "video"
		| "image";
	url: string;
	mapLayers: LayerSpecification[];
}

export interface MapConfig {
	style: string;
	initialViewState: ViewState;
	minZoom?: number;
	dataLayers: DataLayer[];
}

export interface EvenMoreMapItemInterface {
	key: string;
	title: string;
	description: React.ReactNode;
	map: MapConfig;
}

export const EvenMoreMapsItems: EvenMoreMapItemInterface[] = [
	{
		key: "1",
		title: "Census Dot Map",
		description: (
			<Text size="md">
				This map, inspired by the{" "}
				<a
					href="http://demographics.virginia.edu/DotMap/"
					target="_blank"
					rel="noopener noreferrer"
				>
					University of Virginia's Racial Dot Map
				</a>
				, shows one dot per person by race in the Washington DC combined
				statistical area (CSA).
				<br />
				I've loaded ACS 5yr Census data into a Postgres/PostGIS database
				allowing for the rapid creation of maps across the United States. Dots
				were created within census block groups. Then the data was converted to
				vector tiles with points dropped at lower zoom levels and uploaded to
				Mapbox.
			</Text>
		),
		map: {
			style: "dark",
			initialViewState: {
				longitude: -76.96417543059914,
				latitude: 38.90679867244859,
				zoom: 8.868734873694233,
				bearing: 0,
				pitch: 0,
				padding: { top: 0, bottom: 0, left: 0, right: 0 },
			},
			dataLayers: [
				{
					sourceName: "dc_census_dotmap_source",
					sourceType: "vector",
					url: `https://api.mapbox.com/v4/jvanrees.4cgu9pm2.json?secure&access_token=${MAPBOX_TOKEN}`,
					mapLayers: [
						{
							id: "dc_census_dotmap_layer",
							type: "circle",
							source: "dc_census_dotmap_source",
							"source-layer": "dotmap_dc_race",
							paint: {
								"circle-radius": [
									"interpolate",
									["exponential", 1.11],
									["zoom"],
									6,
									0.75,
									22,
									7.5,
								],
								"circle-color": [
									"match",
									["get", "race_ethnicity"],
									["african american"],
									"hsl(118, 41%, 49%)",
									["asian and pacific"],
									"hsl(207, 54%, 47%)",
									["hispanic"],
									"hsl(359, 80%, 50%)",
									["native american"],
									"hsl(30, 100%, 50%)",
									["white"],
									"hsl(292, 35%, 47%)",
									"#000000",
								],
								"circle-opacity": 0.69,
								"circle-blur": 1,
							},
						},
					],
				},
			],
		},
	},
	{
		key: "2",
		title: "Census Hexbin Map",
		description: (
			<Text size="md">
				Demonstrating another way to visualize census data, this map uses
				extruding hexagons to visualize population. I created PL/pgSQL functions
				that create hexagons over an area and then calculates a value from any
				census table to the hexagon.
			</Text>
		),
		map: {
			style: "light",

			initialViewState: {
				longitude: -104.9111,
				latitude: 39.7447,
				zoom: 9.65,
				pitch: -37.6,
				bearing: 60,
				padding: { top: 0, bottom: 0, left: 0, right: 0 },
			},
			minZoom: 9,
			dataLayers: [
				{
					sourceName: "dc_census_hexbin_source",
					sourceType: "vector",
					url: `https://api.mapbox.com/v4/jvanrees.daadmuiw.json?secure&access_token=${MAPBOX_TOKEN}`,
					mapLayers: [
						{
							id: "census-hexbins-0-73",
							type: "fill-extrusion",
							source: "dc_census_hexbin_source",
							"source-layer": "hexbin_co_512-afvytj",
							filter: ["<", ["get", "b01001001_2010"], 73],
							paint: {
								"fill-extrusion-height": [
									"interpolate",
									["linear"],
									["zoom"],
									0,
									[
										"interpolate",
										["linear"],
										["get", "b01001001_2010"],
										0,
										10,
										3800,
										20000,
									],
									9.07,
									[
										"interpolate",
										["cubic-bezier", 1, 1, 1, 1],
										["get", "b01001001_2010"],
										0,
										10,
										3800,
										15000,
									],
									12,
									[
										"interpolate",
										["cubic-bezier", 1, 1, 1, 1],
										["get", "b01001001_2010"],
										0,
										10,
										3800,
										55000,
									],
								],
								"fill-extrusion-color": "hsl(60, 100%, 85%)",
								"fill-extrusion-opacity": 0.25,
							},
						},
						{
							id: "census-hexbins-73-245",
							type: "fill-extrusion",
							source: "dc_census_hexbin_source",
							"source-layer": "hexbin_co_512-afvytj",
							filter: [
								"all",
								[">=", ["get", "b01001001_2010"], 73],
								["<", ["get", "b01001001_2010"], 245],
							],
							paint: {
								"fill-extrusion-height": [
									"interpolate",
									["linear"],
									["zoom"],
									0,
									[
										"interpolate",
										["linear"],
										["get", "b01001001_2010"],
										0,
										10,
										3800,
										20000,
									],
									9.07,
									[
										"interpolate",
										["cubic-bezier", 1, 1, 1, 1],
										["get", "b01001001_2010"],
										0,
										10,
										3800,
										15000,
									],
									12,
									[
										"interpolate",
										["cubic-bezier", 1, 1, 1, 1],
										["get", "b01001001_2010"],
										0,
										10,
										3800,
										55000,
									],
								],
								"fill-extrusion-color": "hsl(44, 99%, 73%)",
								"fill-extrusion-opacity": 0.35,
							},
						},
						{
							id: "census-hexbins-245-498",
							type: "fill-extrusion",
							source: "dc_census_hexbin_source",
							"source-layer": "hexbin_co_512-afvytj",
							filter: [
								"all",
								[">=", ["get", "b01001001_2010"], 245],
								["<", ["get", "b01001001_2010"], 498],
							],
							paint: {
								"fill-extrusion-height": [
									"interpolate",
									["linear"],
									["zoom"],
									0,
									[
										"interpolate",
										["linear"],
										["get", "b01001001_2010"],
										0,
										10,
										3800,
										20000,
									],
									9.07,
									[
										"interpolate",
										["cubic-bezier", 1, 1, 1, 1],
										["get", "b01001001_2010"],
										0,
										10,
										3800,
										15000,
									],
									12,
									[
										"interpolate",
										["cubic-bezier", 1, 1, 1, 1],
										["get", "b01001001_2010"],
										0,
										10,
										3800,
										55000,
									],
								],
								"fill-extrusion-color": "hsl(34, 99%, 65%)",
								"fill-extrusion-opacity": 0.45,
							},
						},
						{
							id: "census-hexbins-498-823",
							type: "fill-extrusion",
							source: "dc_census_hexbin_source",
							"source-layer": "hexbin_co_512-afvytj",
							filter: [
								"all",
								[">=", ["get", "b01001001_2010"], 498],
								["<", ["get", "b01001001_2010"], 823],
							],
							paint: {
								"fill-extrusion-height": [
									"interpolate",
									["linear"],
									["zoom"],
									0,
									[
										"interpolate",
										["linear"],
										["get", "b01001001_2010"],
										0,
										10,
										3800,
										20000,
									],
									9.07,
									[
										"interpolate",
										["cubic-bezier", 1, 1, 1, 1],
										["get", "b01001001_2010"],
										0,
										10,
										3800,
										15000,
									],
									12,
									[
										"interpolate",
										["cubic-bezier", 1, 1, 1, 1],
										["get", "b01001001_2010"],
										0,
										10,
										3800,
										55000,
									],
								],
								"fill-extrusion-color": "hsl(25, 98%, 61%)",
								"fill-extrusion-opacity": 0.6,
							},
						},
						{
							id: "census-hexbins-823-1260",
							type: "fill-extrusion",
							source: "dc_census_hexbin_source",
							"source-layer": "hexbin_co_512-afvytj",
							filter: [
								"all",
								[">=", ["get", "b01001001_2010"], 823],
								["<", ["get", "b01001001_2010"], 1260],
							],
							paint: {
								"fill-extrusion-height": [
									"interpolate",
									["linear"],
									["zoom"],
									0,
									[
										"interpolate",
										["linear"],
										["get", "b01001001_2010"],
										0,
										10,
										3800,
										20000,
									],
									9.07,
									[
										"interpolate",
										["cubic-bezier", 1, 1, 1, 1],
										["get", "b01001001_2010"],
										0,
										10,
										3800,
										15000,
									],
									12,
									[
										"interpolate",
										["cubic-bezier", 1, 1, 1, 1],
										["get", "b01001001_2010"],
										0,
										10,
										3800,
										55000,
									],
								],
								"fill-extrusion-color": "hsl(10, 97%, 58%)",
								"fill-extrusion-opacity": 0.7,
							},
						},
						{
							id: "census-hexbins-1260-2258",
							type: "fill-extrusion",
							source: "dc_census_hexbin_source",
							"source-layer": "hexbin_co_512-afvytj",
							filter: [
								"all",
								[">=", ["get", "b01001001_2010"], 1260],
								["<", ["get", "b01001001_2010"], 2258],
							],
							paint: {
								"fill-extrusion-height": [
									"interpolate",
									["linear"],
									["zoom"],
									0,
									[
										"interpolate",
										["linear"],
										["get", "b01001001_2010"],
										0,
										10,
										3800,
										20000,
									],
									9.07,
									[
										"interpolate",
										["cubic-bezier", 1, 1, 1, 1],
										["get", "b01001001_2010"],
										0,
										10,
										3800,
										15000,
									],
									12,
									[
										"interpolate",
										["cubic-bezier", 1, 1, 1, 1],
										["get", "b01001001_2010"],
										0,
										10,
										3800,
										55000,
									],
								],
								"fill-extrusion-color": "hsl(359, 79%, 50%)",
								"fill-extrusion-opacity": 0.8,
							},
						},
						{
							id: "census-hexbins-2258-plus",
							type: "fill-extrusion",
							source: "dc_census_hexbin_source",
							"source-layer": "hexbin_co_512-afvytj",
							filter: [">=", ["get", "b01001001_2010"], 2258],
							paint: {
								"fill-extrusion-height": [
									"interpolate",
									["linear"],
									["zoom"],
									0,
									[
										"interpolate",
										["linear"],
										["get", "b01001001_2010"],
										0,
										10,
										3800,
										20000,
									],
									9.07,
									[
										"interpolate",
										["cubic-bezier", 1, 1, 1, 1],
										["get", "b01001001_2010"],
										0,
										10,
										3800,
										15000,
									],
									12,
									[
										"interpolate",
										["cubic-bezier", 1, 1, 1, 1],
										["get", "b01001001_2010"],
										0,
										10,
										3800,
										55000,
									],
								],
								"fill-extrusion-color": "hsl(347, 100%, 35%)",
								"fill-extrusion-opacity": 0.9,
							},
						},
					],
				},
			],
		},
	},
];
