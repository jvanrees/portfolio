import { Accordion, Text } from "@mantine/core";
import { createFileRoute } from "@tanstack/react-router";
import clsx from "clsx";
import { useState } from "react";
import { Layer, Source } from "react-map-gl/maplibre";
import { EvenMoreMapsItems } from "../components/EvenMoreMapsItems";
import ProjectPageBottomNav from "../components/ProjectPageBottomNav";
import ProjectPageMap from "../components/ProjectPageMap";
import styles from "../styles/ProjectPage.module.css";

export const Route = createFileRoute("/even-more-maps")({
	component: EvenMoreComponent,
});

function EvenMoreComponent() {
	const [activeKey, setActiveKey] = useState("1");

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
