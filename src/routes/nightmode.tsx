import { Text } from "@mantine/core";
import { createFileRoute } from "@tanstack/react-router";
import { easePolyOut } from "d3-ease";
import { useEffect } from "react";
import ProjectPage from "../components/ProjectPage";
import { type MapColor, useMapContext } from "../context/mapstyleContext";

import img2 from "../img/night_mode/Screenshot_20181130-023540.png";
import img3 from "../img/night_mode/Screenshot_20181130-023613.png";
import img4 from "../img/night_mode/Screenshot_20181130-023746.png";
import img5 from "../img/night_mode/Screenshot_20181130-023757.png";
import img6 from "../img/night_mode/Screenshot_20181130-023810.png";
import img1 from "../img/night_mode/Screenshot_20181130-023817.png";

const images = [img1, img2, img3, img4, img5, img6];
const title = "New MapQuest Night Navigation Mode";

const paragraphs = (
	<Text size="md">
		MapQuest's new night map style balances aesthetics and function, creating a
		simplified, focused experience for safe night navigation.
		<br />
		<br />
		We refined the style through competitive analysis, ensuring harmony with the
		day map for brand consistency while reducing complexity to minimize
		distractions at night.
	</Text>
);

const mapColor: MapColor = {
	background: "hsla(210, 16%, 23%, 1.00)",
	park: "hsla(105, 16%, 27%, 1.00)",
	water: "hsla(200, 25%, 13%, 1.00)",
	roadLow: "hsla(220, 30%, 10%, 0.99)",
	roadHigh: "hsla(39, 53%, 54%, 0.8)",
	mapOverlayOpacity: 0.05,
};

const viewport = {
	latitude: 39.7618,
	longitude: -104.8806,
	zoom: 12.5,
	bearing: -45,
	pitch: 45,
	padding: { top: 0, bottom: 0, left: 0, right: 0 },
};

const flyToDuration = 2000;
const easing = easePolyOut.exponent(1.5);

export const Route = createFileRoute("/nightmode")({
	component: NightmodeComponent,
});

function NightmodeComponent() {
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
				viewTransitionName: "NightMode",
				height: "100%",
				overflowY: "auto",
			}}
		>
			<ProjectPage
				title={title}
				images={images}
				paragraphs={paragraphs}
				darkMode
			/>
		</div>
	);
}
