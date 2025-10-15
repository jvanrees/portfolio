import clsx from "clsx";
import projectPageStyles from "../styles/ProjectPage.module.css";
import ProjectPageBottomNav from "./ProjectPageBottomNav";
import { ProjectPageDesc } from "./ProjectPageDescription";
import { ProjectMedia } from "./ProjectPageMedia";

interface ProjectPageComponentProps
	extends React.HTMLAttributes<HTMLDivElement> {
	title: string;
	images?: string[];
	paragraphs: React.ReactNode;
	media?: React.ReactNode;
	controls?: React.ReactNode;
	darkMode?: boolean;
}

export default function ProjectPageComponent({
	title,
	images,
	paragraphs,
	media,
	controls,
	darkMode = false,
}: ProjectPageComponentProps) {
	return (
		<div className={projectPageStyles.projectPageGridContainer}>
			<div className={projectPageStyles.imageGrid}>
				{media ? media : <ProjectMedia title={title} images={images || []} />}
			</div>
			<div
				className={clsx(
					projectPageStyles.descriptionGrid,
					darkMode && projectPageStyles.descriptionGridDark,
				)}
			>
				<ProjectPageDesc
					title={title}
					paragraphs={paragraphs}
					darkMode={darkMode}
					controls={controls}
				/>
			</div>

			<ProjectPageBottomNav darkMode={darkMode} />
		</div>
	);
}
