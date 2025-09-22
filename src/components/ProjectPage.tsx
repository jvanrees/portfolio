import { Icon } from "@iconify-icon/react";
import { Button } from "@mantine/core";
import { Link } from "@tanstack/react-router";
import clsx from "clsx";
import styles from "../styles/ProjectPage.module.css";
import { ProjectPageDesc } from "./ProjectPageDescription";
import { ProjectMedia } from "./ProjectPageMedia";

interface ProjectPageComponentProps
	extends React.HTMLAttributes<HTMLDivElement> {
	title: string;
	images?: string[]; // optional - legacy image slider
	paragraphs: string[];
	// optional media node: e.g., a map component to render instead of images
	media?: React.ReactNode;
	darkMode?: boolean; // optional - dark mode styling
}

export default function ProjectPageComponent({
	title,
	images,
	paragraphs,
	media,
	darkMode = false,
}: ProjectPageComponentProps) {
	const isMobile = typeof window !== "undefined" && window.innerWidth < 530;
	return (
		<div className={styles.projectPageGridContainer}>
			<div className={styles.imageGrid}>
				{media ? (
					// render provided media node (map, video, etc.)
					media
				) : (
					// fallback to legacy image slider
					<ProjectMedia title={title} images={images || []} />
				)}
			</div>
			<div
				className={clsx(
					styles.descriptionGrid,
					darkMode && styles.descriptionGridDark,
				)}
			>
				<ProjectPageDesc
					title={title}
					paragraphs={paragraphs}
					darkMode={darkMode}
				/>
			</div>
			{isMobile && (
				<div className={styles.bufferButton}>
					<Button style={{ opacity: 0 }}>&nbsp;</Button>
				</div>
			)}
			<div className={clsx(styles.bottomNav, darkMode && styles.bottomNavDark)}>
				<Button
					component={Link}
					to="/"
					leftSection={<Icon icon="mdi:chevron-left" />}
					variant="transparent"
					className={clsx(darkMode && styles.backButtonDark)}
				>
					Back
				</Button>
			</div>
		</div>
	);
}
