import { createFileRoute } from "@tanstack/react-router";
import ProjectPage from "../components/ProjectPage";

import img2 from "../img/night_mode/Screenshot_20181130-023540.png";
import img3 from "../img/night_mode/Screenshot_20181130-023613.png";
import img4 from "../img/night_mode/Screenshot_20181130-023746.png";
import img5 from "../img/night_mode/Screenshot_20181130-023757.png";
import img6 from "../img/night_mode/Screenshot_20181130-023810.png";
import img1 from "../img/night_mode/Screenshot_20181130-023817.png";

const images = [img1, img2, img3, img4, img5, img6];
const title = "New MapQuest Night Navigation Mode";

const paragraphs = [
	`MapQuest’s new night map style balances aesthetics and function, creating a simplified, focused experience for safe night navigation.`,
	`We refined the style through competitive analysis, ensuring harmony with the day map for brand consistency while reducing complexity to minimize distractions at night.`,
];

export const Route = createFileRoute("/nightmode")({
	component: NightmodeComponent,
});
function NightmodeComponent() {
	return (
		<div
			style={{
				viewTransitionName: "NightMode",
				height: "100%",
				overflowY: "auto",
			}}
		>
			<ProjectPage title={title} images={images} paragraphs={paragraphs} />
		</div>
	);
}
