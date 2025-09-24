import { createFileRoute } from "@tanstack/react-router";
import { easeSinInOut } from "d3-ease";
import { useEffect } from "react";
import ProjectPage from "../components/ProjectPage";
import { type MapColor, useMapContext } from "../context/mapstyleContext";

import img4 from "../img/shaded_relief/finished_bike_map.png";
import img2 from "../img/shaded_relief/shaded_dem.png";
import img3 from "../img/shaded_relief/shaded_dom_classification.png";
import img1 from "../img/shaded_relief/shaded_relief_cropped.png";

const images = [img1, img2, img3, img4];
const title = "Shaded Relief";
const paragraphs = [
	`Cartography is a blend of art and information communication. The classic shaded relief, pioneered by Eduard Imhof, is an exemplary example of this.`,
	`Here, I used GIS tools, Photoshop, and Illustrator to create my take on a classic. The end result was a map for a hypothetical bike race that would tour our beautiful state.`,
];

const mapColor: MapColor = {
	background: "hsla(118, 34%, 46%, 1.00)",
	park: "hsla(80, 41%, 53%, 1.00)",
	water: "hsla(212, 86%, 58%, 1.00)",
	roadLow: "hsla(74, 42%, 58%, 1.00)",
	roadHigh: "hsla(73, 42%, 60%, 1.00)",
	mapOverlayOpacity: 0.5,
};

const viewport = {
	latitude: 40.3571,
	longitude: -106.3989,
	zoom: 10.14,
	bearing: -139.6,
	pitch: 35.264,
	padding: { top: 0, bottom: 0, left: 0, right: 0 },
};

const flyToDuration = 2000;
const easing = easeSinInOut;

export const Route = createFileRoute("/shaded-relief")({
	component: ShadedReliefComponent,
});

function ShadedReliefComponent() {
	const { flyToViewport, setMapColor, isMapLoaded } = useMapContext();

	useEffect(() => {
		if (isMapLoaded) {
			flyToViewport(viewport, flyToDuration, easing);
			setMapColor(mapColor);
		}
	}, [flyToViewport, setMapColor, isMapLoaded]);

	return (
		<div
			style={{
				viewTransitionName: "ShadedRelief",
				height: "100%",
				overflowY: "auto",
			}}
		>
			<ProjectPage title={title} images={images} paragraphs={paragraphs} />
		</div>
	);
}
