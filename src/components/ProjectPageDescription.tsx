import { Box } from "@mantine/core";
import clsx from "clsx";
import projectStyles from "../styles/ProjectPage.module.css";

export interface ProjectMediaProps {
	title: string;
	paragraphs: React.ReactNode;
	darkMode: boolean;
}

export function ProjectPageDesc({
	title,
	paragraphs,
	darkMode,
}: ProjectMediaProps) {
	return (
		<Box
			p="md"
			className={clsx(
				projectStyles.noShadow,
				darkMode && projectStyles.descriptionGridDark,
			)}
		>
			<h1>{title}</h1>
			{paragraphs}
			<br />
			<br />
		</Box>
	);
}
