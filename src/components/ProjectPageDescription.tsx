import { Box, Text } from "@mantine/core";
import clsx from "clsx";
import projectStyles from "../styles/ProjectPage.module.css";

export interface ProjectMediaProps {
	title: string;
	paragraphs: string[];
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
			{paragraphs.map((paragraph, index) => (
				<Text key={index} size="md" mt="md">
					{paragraph}
				</Text>
			))}
			<br />
		</Box>
	);
}
