import { Paper, Text } from "@mantine/core";
import { createFileRoute } from "@tanstack/react-router";
import { clsx } from "clsx";
import { easeSinInOut } from "d3-ease";
import { useEffect } from "react";
import { gridItems } from "../components/GridItems";
import {
	defaultMapColor,
	defaultViewport,
	type MapColor,
	useMapContext,
} from "../context/mapstyleContext";
import gridStyles from "../styles/Grid.module.css";
export const Route = createFileRoute("/")({
	component: RouteComponent,
});

export const mapColor: MapColor = defaultMapColor;

export const viewport = defaultViewport;

const flyToDuration = 4500;
const easing = easeSinInOut;

function RouteComponent() {
	const { flyToViewport, setMapColor } = useMapContext();

	useEffect(() => {
		flyToViewport(viewport, flyToDuration, easing);
		setMapColor(mapColor);
	}, [flyToViewport, setMapColor]);

	return (
		<div className={gridStyles.gridInner}>
			{gridItems.map((item) => (
				<Paper
					key={item.key}
					className={clsx(item.className, gridStyles.gridChild)}
					style={{ viewTransitionName: item.transitionName }}
				>
					<div style={{ width: "100%", height: "100%" }}>
						{item.content ? (
							<>{item.content}</>
						) : (
							<Text className={gridStyles.gridTileText}>
								Jeff, you forgot to add content to {item.title}.
							</Text>
						)}
					</div>
				</Paper>
			))}
		</div>
	);
}
