import { createFileRoute } from "@tanstack/react-router";
import ProjectPage from "../components/ProjectPage";

import img1 from "../img/android_app/Screenshot_20181103-203245_Rocky Mountain Arsenal History.jpg";
import img2 from "../img/android_app/Screenshot_20181103-203534_Rocky Mountain Arsenal History.jpg";
import img3 from "../img/android_app/Screenshot_20181103-203554_Rocky Mountain Arsenal History.jpg";
import img4 from "../img/android_app/Screenshot_20181103-204001_Rocky Mountain Arsenal History.jpg";
import img5 from "../img/android_app/Screenshot_20181103-204113_Rocky Mountain Arsenal History.jpg";

const images = [img1, img2, img3, img4, img5];
const title = "Rocky Mountain Arsenal Android App";
const paragraphs = [
	`The Rocky Mountain Arsenal National Wildlife Refuge is one of the nation’s largest urban wildlife preserves. The open space it provides, just 10 miles from downtown Denver, for wildlife and recreators is courtesy the location’s complex history as a manufacturing facility for weapons and chemicals. It is a story that includes both environmental damage and restoration, and reflects our increasing recognition of the value of wildlife and open space.`,
	`The data, digitized scanned government documents, and the application itself were built from the ground up. I enjoy challenging myself and learning new technologies.`,
];
export const Route = createFileRoute("/rma-android")({
	component: RmaAndroidComponent,
});

function RmaAndroidComponent() {
	return (
		<div
			style={{
				viewTransitionName: "RmaAndroid",
				height: "100%",
				overflowY: "auto",
			}}
		>
			<ProjectPage title={title} images={images} paragraphs={paragraphs} />
		</div>
	);
}
