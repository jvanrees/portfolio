import { createFileRoute } from "@tanstack/react-router";
import clsx from "clsx";
import { useState } from "react";
import { AccordionDescription } from "../components/AccordionDescription";
import { InteractiveMedia } from "../components/InteractiveMedia";
import styles from "../styles/ProjectPage.module.css";

export const Route = createFileRoute("/even-more-maps")({
	component: EvenMoreComponent,
});

function EvenMoreComponent() {
	const [activeKey, setActiveKey] = useState("1");

	const handleActiveChange = (key: string) => {
		setActiveKey(key);
	};

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
					<InteractiveMedia activeKey={activeKey} />
				</div>
				<div className={clsx(styles.descriptionGrid)}>
					<AccordionDescription onActiveChange={handleActiveChange} />
				</div>
			</div>
		</div>
	);
}
