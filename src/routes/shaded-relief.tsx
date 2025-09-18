import { createFileRoute } from "@tanstack/react-router";
import ProjectPage from "../components/ProjectPage";

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

export const Route = createFileRoute("/shaded-relief")({
	component: ShadedReliefComponent,
});

function ShadedReliefComponent() {
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
