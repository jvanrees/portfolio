import { Overlay, Paper, Text } from "@mantine/core";
import { Link } from "@tanstack/react-router";
import clsx from "clsx";
import type React from "react";
import gridStyles from "../styles/Grid.module.css";

interface HomeGridTileProps extends React.HTMLAttributes<HTMLDivElement> {
	imageSrc: string;
	title: string;
	link: string;
}

function HomeGridTile({ imageSrc, title, link, className }: HomeGridTileProps) {
	const imageClassName = clsx(
		gridStyles.gridTileImage,
		link?.includes("rma-android") && gridStyles.spanCenterpiece,
	);

	const textClassName = clsx(gridStyles.gridTileText, {
		[gridStyles.w1]: !(
			link?.includes("rma-android") || link?.includes("nightmode")
		),
	});
	return (
		<Link to={link} viewTransition>
			<Paper
				className={clsx(gridStyles.gridChild, gridStyles.gridTileWrapper, className)}
			>
				{/* The div below is used to display the background image.
          It is not the background of the Paper component for the neat hover zoom in effect */}
				<div
					className={imageClassName}
					style={{
						backgroundImage: `url(${imageSrc})`,
					}}
				/>

				<Overlay
					color="hsla(0, 0%, 0%, 0.4)"
					className={gridStyles.gridTileOverlay}
				>
					<Text className={textClassName}>{title}</Text>
				</Overlay>
			</Paper>
		</Link>
	);
}
export default HomeGridTile;
