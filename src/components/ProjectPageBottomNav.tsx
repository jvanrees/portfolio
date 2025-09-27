import { Icon } from "@iconify-icon/react";
import { Button } from "@mantine/core";
import { Link } from "@tanstack/react-router";
import clsx from "clsx";
import projectPageStyles from "../styles/ProjectPage.module.css";

interface ProjectPageBottomNavProps {
	darkMode?: boolean;
}

export default function ProjectPageBottomNav({
	darkMode = false,
}: ProjectPageBottomNavProps) {
	return (
		<div className={clsx(projectPageStyles.bottomNav, darkMode && projectPageStyles.bottomNavDark)}>
			<Button
				component={Link}
				to="/"
				leftSection={<Icon icon="mdi:chevron-left" />}
				variant="transparent"
				className={clsx(darkMode && projectPageStyles.backButtonDark)}
			>
				Back
			</Button>
		</div>
	);
}
