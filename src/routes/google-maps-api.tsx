import { createFileRoute } from "@tanstack/react-router";
import { easeCircleInOut } from "d3-ease";
import { useEffect } from "react";
import ProjectPage from "../components/ProjectPage";
import { type MapColor, useMapContext } from "../context/mapstyleContext";

import img1 from "../img/google_maps/desktop_screenshot.png";
import img2 from "../img/google_maps/disastermng_db.png";
import img3 from "../img/google_maps/ihateeclipse.png";

const images = [img1, img2, img3];
const title = "Disaster Management Android & Web App";
const paragraphs = [
	`For GEOG 576 at Wisconsin we were tasked to create a disaster management application using the Google Maps API, java servlet, and a PostGIS database. Over the course of the semester this project evolved into a mobile application. Users can query the database, and post to it using interactive forms.`,
];

const mapColor: MapColor = {
	background: "hsla(45, 13%, 94%, 1.00)",
	park: "hsla(104, 51%, 80%, 1.00)",
	water: "hsla(207, 100%, 65%, 1.00)",
	roadLow: "hsla(0, 0%, 100%, 1.00)",
	roadHigh: "hsla(51, 97%, 85%, 1.00)",
	mapOverlayOpacity: 0.02,
};

const viewport = {
	latitude: 0,
	longitude: 0,
	zoom: 1.2,
	bearing: 0,
	pitch: 0,
	padding: { top: 0, bottom: 0, left: 0, right: 0 },
};

const flyToDuration = 4000;
const easing = easeCircleInOut;

export const Route = createFileRoute("/google-maps-api")({
	component: GoogleMapsComponent,
});

function GoogleMapsComponent() {
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
				viewTransitionName: "GoogleMaps",
				height: "100%",
				overflowY: "auto",
			}}
		>
			<ProjectPage title={title} images={images} paragraphs={paragraphs} />
		</div>
	);
}
