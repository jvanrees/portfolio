import clsx from "clsx";
import projectPageStyles from "../styles/ProjectPage.module.css";
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
				/>
			</div>

			<ProjectPageBottomNav darkMode={darkMode} />
		</div>
	);
}
