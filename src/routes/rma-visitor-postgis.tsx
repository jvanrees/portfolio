import { createFileRoute } from "@tanstack/react-router";
import { easeSinInOut } from "d3-ease";
import { useEffect } from "react";
import ProjectPage from "../components/ProjectPage";
import ProjectPageIFrame from "../components/ProjectPageIFrame";
import { type MapColor, useMapContext } from "../context/mapstyleContext";

const title = "RMA Visitor PostGIS";
const paragraphs = [
	`This is an older project showcasing a visitor management system built with Node.js and PostGIS.`,
	`It demonstrates integration of geospatial data with web applications, allowing users to interact with location-based information.`,
];

const mapColor: MapColor = {
	background: "hsla(80, 11%, 95%, 1.00)",
	park: "hsl(111, 29%, 68%)",
	water: "hsl(193, 20%, 81%)",
	roadLow: "hsl(60, 5%, 95%)",
	roadHigh: "hsl(60, 5%, 95%)",
	mapOverlayOpacity: 0.0,
};

const viewport = {
	latitude: 39.82324,
	longitude: -104.85331,
	zoom: 14.63,
	bearing: 146,
	pitch: 60,
	padding: { top: 0, bottom: 0, left: 0, right: 0 },
};

const flyToDuration = 3500;
const easing = easeSinInOut;

export const Route = createFileRoute("/rma-visitor-postgis")({
	component: RmaVisitorComponent,
});

function RmaVisitorComponent() {
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
				viewTransitionName: "RmaVisitor",
				height: "100%",
				overflowY: "auto",
			}}
		>
			<ProjectPage
				title={title}
				paragraphs={paragraphs}
				media={
					<ProjectPageIFrame
						src="/rma_node/index.html"
						title="RMA Visitor Application"
					/>
				}
			/>
		</div>
	);
}
