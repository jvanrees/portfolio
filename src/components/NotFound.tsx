import { Button, Group, Image, Text, Title } from "@mantine/core";
import { Link } from "@tanstack/react-router";
import { clsx } from "clsx";
import notFoundSvg from "../img/404.svg";
import logoRow from "../img/logo_row.svg";
import aboutStyles from "../styles/About.module.css";
import gridStyles from "../styles/Grid.module.css";

export default function NotFoundComponent() {
	const isMobile = window.innerWidth < 520;

	return (
		<div
			className={clsx(
				gridStyles.gridChild,
				aboutStyles.fullGridOverlay,
				aboutStyles.noShadow,
				aboutStyles.flexColumn,
			)}
			style={{
				viewTransitionName: "NotFound",
				overflowY: "auto",
				width: "100%",
			}}
		>
			<div className={clsx(aboutStyles.aboutMeOpen, gridStyles.subGridChild)}>
				<div
					className={clsx(
						aboutStyles.aboutMeOpenContent,
						gridStyles.subGridChild,
					)}
					style={{ height: "100%" }}
				>
					<div className={aboutStyles.mapLogoHeader}>
						<div className={aboutStyles.mapLogoContainer}>
							<Image w={"16rem"} src={logoRow} alt="Jeff Van Rees Map Logo." />
						</div>
					</div>

					<div
						className={aboutStyles.aboutMeText}
						style={{
							height: "100%",
							display: "flex",
							flexDirection: "column",
							justifyContent: "center",
							alignItems: "center",
							textAlign: "center",
						}}
					>
						<Image
							w={"45rem"}
							src={notFoundSvg}
							alt="404 Not Found Illustration"
							radius={"md"}
							style={{ marginBottom: "1rem" }}
						/>

						<Title order={1} className={aboutStyles.aboutMeSubTitles}>
							404 Destination Not Found
						</Title>
						<Text>You've gone off the map. Recalculating route...</Text>
					</div>
				</div>
			</div>

			<div
				className={
					isMobile
						? clsx(aboutStyles.footer, aboutStyles.buttonContainerShadow)
						: clsx(
								aboutStyles.buttonContainerBottom,
								aboutStyles.white,
								aboutStyles.buttonContainerShadow,
								aboutStyles.buttonDesktopBack,
							)
				}
			>
				<Group>
					<Button component={Link} to="/" leftSection="←" variant="transparent">
						Go to Homepage
					</Button>
				</Group>
			</div>
		</div>
	);
}
