import { createFileRoute } from "@tanstack/react-router";
import ProjectPage from "../components/ProjectPage";
import ProjectPageMap from "../components/ProjectPageMap";
import config from "../config";

const MAPTILER_API_KEY = config.maptilerApiKey;
const MAPBOX_API_KEY = config.mapboxApiKey;

const title = "Qing Dynasty";
const paragraphs = [
	`Inspired by Qing Dynasty watercolor maps, I recreated their water and mountain aesthetics as my first web map using CartoCSS in Mapbox Studio Classic.`,
	`The project taught me to tailor detail and imagery per zoom level. This was my first artistic map and I later reworked it. See the original Qing map here: https://theme.npm.edu.tw/exh105/GreenBorderlands/ch/page-2.html`,
];

// Minimal inline Qing style (adapted from the preview HTML)
const qingStyle: any = {
	version: 8,
	name: "Qing",
	metadata: {},
	sources: {
		openmaptiles: {
			type: "vector",
			url: `https://api.maptiler.com/tiles/v3/tiles.json?key=${MAPTILER_API_KEY}`,
		},
		vector_mountain: {
			type: "vector",
			// use the tilejson (JSON) URL so the vector source can be loaded as a tileset description
			url: `https://api.mapbox.com/v4/jvanrees.6lps1j6n.json?secure&access_token=${MAPBOX_API_KEY}`,
		},
	},
	sprite: "https://s3.amazonaws.com/jvr-portfolio-examples/portfolio_bg",
	glyphs: `https://api.mapbox.com/fonts/v1/jvanrees/{fontstack}/{range}.pbf?access_token=${MAPBOX_API_KEY}`,
	layers: [
		{
			id: "background",
			type: "background",
			paint: { "background-color": "#DCBA92" },
		},
		{
			id: "regular_park",
			type: "fill",
			source: "openmaptiles",
			"source-layer": "park",
			layout: { visibility: "visible" },
			paint: { "fill-color": "hsl(80, 11%, 95%)" },
		},
		{
			id: "regular_water",
			type: "fill",
			source: "openmaptiles",
			"source-layer": "water",
			layout: { visibility: "visible" },
			paint: { "fill-color": "hsl(193, 20%, 81%)", "fill-antialias": true },
		},
		{
			id: "map_overlay",
			type: "background",
			layout: { visibility: "visible" },
			paint: {
				"background-opacity": 0.09,
				"background-pattern": "bg_overlay2",
			},
		},
		{
			id: "qing-bg_add",
			type: "background",
			layout: { visibility: "visible" },
			paint: { "background-opacity": 1, "background-pattern": "qing_bg" },
		},
		{
			id: "qing_water_pattern_add",
			type: "fill",
			source: "openmaptiles",
			"source-layer": "water",
			layout: { visibility: "visible" },
			paint: {
				"fill-color": "#152832",
				"fill-antialias": true,
				"fill-opacity": 1,
				"fill-pattern": "vector_water_vector_water2",
			},
		},
		{
			id: "qing_vector_mountain_add",
			type: "symbol",
			source: "vector_mountain",
			"source-layer": "updated_mountains-2hxde7",
			layout: {
				visibility: "visible",
				"icon-size": 0.5,
				"icon-image": [
					"case",
					["match", ["get", "scalerank"], [1, 2], true, false],
					"vector_mountains",
					["match", ["get", "scalerank"], [3, 4], true, false],
					"vector_mountains",
					"vector_mountains",
				],
			},
			paint: { "icon-opacity": 1 },
		},
	],
};

const initialView = { longitude: 90, latitude: 20.0, zoom: 3.5 };

export const Route = createFileRoute("/qing-dynasty-map")({
	component: QingDynastyComponent,
});

function QingDynastyComponent() {
	return (
		<div
			style={{
				viewTransitionName: "CartoCSS",
				height: "100%",
				overflowY: "auto",
			}}
		>
			<ProjectPage
				title={title}
				paragraphs={paragraphs}
				media={
					<ProjectPageMap mapStyle={qingStyle} initialViewState={initialView} />
				}
			/>
		</div>
	);
}
