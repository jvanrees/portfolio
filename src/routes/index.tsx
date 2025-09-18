import { Paper, Text } from "@mantine/core";
import { createFileRoute } from "@tanstack/react-router";
import { gridItems } from "../components/GridItems";
import classes from "../styles/Grid.module.css";

export const Route = createFileRoute("/")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<div className={classes.gridInner}>
			{gridItems.map((item) => (
				<Paper
					key={item.key}
					className={`${item.className} ${classes.gridChild}`}
					style={{ viewTransitionName: item.transitionName }}
				>
					<div style={{ width: "100%", height: "100%" }}>
						{item.content ? (
							<>{item.content}</>
						) : (
							<Text className={classes.gridTileText}>
								Jeff, you forgot to add content to {item.title}.
							</Text>
						)}
					</div>
				</Paper>
			))}
		</div>
	);
}
