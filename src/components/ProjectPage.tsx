import clsx from "clsx";
import styles from "../styles/ProjectPage.module.css";
import ProjectPageBottomNav from "./ProjectPageBottomNav";
import { ProjectPageDesc } from "./ProjectPageDescription";
import { ProjectMedia } from "./ProjectPageMedia";

interface ProjectPageComponentProps
	extends React.HTMLAttributes<HTMLDivElement> {
	title: string;
	images?: string[];
	paragraphs: string[];
	media?: React.ReactNode;
	darkMode?: boolean;
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

			<ProjectPageBottomNav darkMode={darkMode} />
		</div>
	);
}
