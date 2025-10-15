import { Button, CloseButton, Modal, Portal, Text } from "@mantine/core";
import { createFileRoute } from "@tanstack/react-router";
import { easePolyOut } from "d3-ease";
import { useEffect, useState } from "react";
import ProjectPage from "../components/ProjectPage";
import ProjectPageIFrame from "../components/ProjectPageIFrame";
import { type MapColor, useMapContext } from "../context/mapstyleContext";
import img1 from "../img/android_app/Screenshot_20181103-203245_Rocky Mountain Arsenal History.jpg";
import img2 from "../img/android_app/Screenshot_20181103-203534_Rocky Mountain Arsenal History.jpg";
import img3 from "../img/android_app/Screenshot_20181103-203554_Rocky Mountain Arsenal History.jpg";
import img4 from "../img/android_app/Screenshot_20181103-204001_Rocky Mountain Arsenal History.jpg";
import img5 from "../img/android_app/Screenshot_20181103-204113_Rocky Mountain Arsenal History.jpg";
import projectPageClasses from "../styles/ProjectPage.module.css";

const images = [img1, img2, img3, img4, img5];
const title = "Rocky Mountain Arsenal Android App";
const paragraphs = (
	<Text size="md">
		The Rocky Mountain Arsenal National Wildlife Refuge is one of the nation's
		largest urban wildlife preserves. The open space it provides, just 10 miles
		from downtown Denver, for wildlife and recreators is courtesy the location's
		complex history as a manufacturing facility for weapons and chemicals. It is
		a story that includes both environmental damage and restoration, and
		reflects our increasing recognition of the value of wildlife and open space.
		<br />
		<br />
		The data, digitized scanned government documents, and the application itself
		were built from the ground up. I enjoy challenging myself and learning new
		technologies.
	</Text>
);
export const Route = createFileRoute("/rma-android")({
	component: RmaAndroidComponent,
});

const mapColor: MapColor = {
	background: "hsla(0, 0%, 100%, 1.00)",
	park: "hsla(0, 0%, 100%, 1.00)",
	water: "hsla(212, 11%, 70%, 1.00)",
	roadLow: "hsla(0, 0%, 71%, 1.00)",
	roadHigh: "hsla(0, 0%, 75%, 1.00)",
	mapOverlayOpacity: 0.1,
};

const viewport = {
	latitude: 39.822666,
	longitude: -104.84492,
	zoom: 17.99,
	bearing: -28.3,
	pitch: 60,
	padding: { top: 0, bottom: 0, left: 0, right: 0 },
};
const flyToDuration = 4500;
const easing = easePolyOut.exponent(1.5);

function RmaAndroidComponent() {
	const { flyToViewport, setMapColor, isMapLoaded } = useMapContext();

	const [opened, setOpened] = useState(false);

	useEffect(() => {
		if (isMapLoaded) {
			flyToViewport(viewport, flyToDuration, easing);
			setMapColor(mapColor);
		}
	}, [flyToViewport, setMapColor, isMapLoaded]);

	// media is left undefined so ProjectPage renders the default slider
	const mediaNode = undefined;

	const controls = (
		<>
			<Button
				className="mediaToggleButton"
				variant="outline"
				onClick={() => setOpened(true)}
			>
				Open Mobile App
			</Button>
		</>
	);

	return (
		<div
			style={{
				viewTransitionName: "RmaAndroid",
				height: "100%",
				overflowY: "auto",
			}}
		>
			<ProjectPage
				title={title}
				images={images}
				paragraphs={paragraphs}
				media={mediaNode}
				controls={controls}
			/>

			{/* Mantine Modal to show the mobile app in a phone-like overlay */}
			<Modal
				opened={opened}
				onClose={() => setOpened(false)}
				size="auto"
				padding={0}
				title={null}
				withCloseButton={false}
				centered
				styles={{
					content: {
						background: "transparent",
						boxShadow: "none",
						padding: 0,
						position: "relative",
					},
					inner: {
						padding: 0,
						margin: 0,
					},
				}}
			>
				{/* Close button is rendered in a Portal (see below) to avoid being contained by modal transforms */}

				<div className={projectPageClasses.phoneAspect}>
					<ProjectPageIFrame
						src="/rma-react-native-web/"
						title="RMA Mobile Web"
					/>
				</div>
			</Modal>

			{/* Portal-mounted close button so it sits on the viewport top-right and is not affected by modal transform/positioning */}
			<Portal>
				{opened && (
					<CloseButton
						aria-label="Close mobile app"
						onClick={() => setOpened(false)}
						// use inline styles to pin to viewport top-right
						style={{
							position: "fixed",
							top: 24,
							right: 24,
							zIndex: 9999,
							padding: 0,
							background: "rgba(0,0,0,0.6)",
							color: "#fff",
							boxShadow: "0 2px 8px rgba(0,0,0,0.3)",
						}}
					/>
				)}
			</Portal>
		</div>
	);
}
