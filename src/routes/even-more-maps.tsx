import { Accordion, Text } from "@mantine/core";
import { createFileRoute } from "@tanstack/react-router";
import clsx from "clsx";
import { easeSinInOut } from "d3-ease";
import { useEffect, useState } from "react";
import { Layer, Source, type ViewState } from "react-map-gl/maplibre";
import { EvenMoreMapsItems } from "../components/EvenMoreMapsItems";
import ProjectPageBottomNav from "../components/ProjectPageBottomNav";
import ProjectPageMap from "../components/ProjectPageMap";
import { type MapColor, useMapContext } from "../context/mapstyleContext";
import styles from "../styles/ProjectPage.module.css";

export const Route = createFileRoute("/even-more-maps")({
	component: EvenMoreComponent,
});

const viewport: ViewState = {
	latitude: 40.32,
	longitude: -94.34,
	bearing: 0,
	pitch: 0,
	zoom: 3.35,
	padding: { top: 0, bottom: 0, left: 0, right: 0 },
};

const mapColor: MapColor = {
	background: "hsla(80, 11%, 95%, 1.00)",
	park: "hsla(50, 94%, 69%, 0.00)",
	water: "hsla(210, 94%, 93%, 1.00)",
	roadLow: "hsla(49, 93%, 68%, 0.00)",
	roadHigh: "hsla(49, 93%, 68%, 0.00)",
	mapOverlayOpacity: 0.09,
};

const flyToDuration = 2000;
const easing = easeSinInOut;

function EvenMoreComponent() {
	const [activeKey, setActiveKey] = useState("1");
	const { flyToViewport, setMapColor, isMapLoaded } = useMapContext();
	useEffect(() => {
		if (isMapLoaded) {
			flyToViewport(viewport, flyToDuration, easing);
			setMapColor(mapColor);
		}
	}, [flyToViewport, setMapColor, isMapLoaded]);

	const handleActiveChange = (value: string | null) => {
		if (value) {
			setActiveKey(value);
		}
	};

	const activeItem = EvenMoreMapsItems.find((item) => item.key === activeKey);

	return (
		<div
			style={{
				viewTransitionName: "EvenMoreMaps",
				height: "100%",
				overflowY: "auto",
			}}
		>
			<div className={styles.projectPageGridContainer}>
				<div className={styles.imageGrid}>
					{activeItem && (
						<ProjectPageMap
							style={activeItem.map.style as "light" | "dark" | "streets"}
							initialViewState={activeItem.map.initialViewState}
							{...(activeItem.map.minZoom && {
								minZoom: activeItem.map.minZoom,
							})}
						>
							{activeItem.map.dataLayers.map((dataLayer) => (
								<Source
									key={dataLayer.sourceName}
									id={dataLayer.sourceName}
									type={dataLayer.sourceType as any}
									url={dataLayer.url}
								>
									{dataLayer.mapLayers.map((layer) => (
										<Layer key={layer.id} {...layer} />
									))}
								</Source>
							))}
						</ProjectPageMap>
					)}
				</div>
				<div className={clsx(styles.descriptionGrid)}>
					<div style={{ padding: "1rem" }}>
						<h2>Even More Maps</h2>
						<Accordion value={activeKey} onChange={handleActiveChange}>
							{EvenMoreMapsItems.map((item) => (
								<Accordion.Item key={item.key} value={item.key}>
									<Accordion.Control>
										<Text>{item.title}</Text>
									</Accordion.Control>
									<Accordion.Panel>{item.description}</Accordion.Panel>
								</Accordion.Item>
							))}
						</Accordion>
					</div>
				</div>
				<ProjectPageBottomNav />
			</div>
		</div>
	);
}
