import { Button, Group, Image, Text, Title } from "@mantine/core";
import { createFileRoute, Link } from "@tanstack/react-router";
import notFoundSvg from "../img/404.svg";
import logoRow from "../img/logo_row.svg";
import aboutClasses from "../styles/About.module.css";
import gridClasses from "../styles/Grid.module.css";

export const Route = createFileRoute("/not-found")({
	component: NotFoundComponent,
});

function NotFoundComponent() {
	const isMobile = window.innerWidth < 520;

	return (
		<div
			className={`${gridClasses.gridChild} ${aboutClasses.fullGridOverlay} ${aboutClasses.noShadow} ${aboutClasses.flexColumn}`}
			style={{
				viewTransitionName: "NotFound",
				overflowY: "auto",
				width: "100%",
			}}
		>
			<div
				className={`${aboutClasses.aboutMeOpen} ${gridClasses.subGridChild}`}
			>
				<div
					className={`${aboutClasses.aboutMeOpenContent} ${gridClasses.subGridChild}`}
					style={{ height: "100%" }}
				>
					<div className={aboutClasses.mapLogoRow}>
						<Image w={"16rem"} src={logoRow} alt="Jeff Van Rees Map Logo." />
					</div>
					<div
						className={aboutClasses.aboutMeText}
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

						<Title order={1} className={aboutClasses.aboutMeSubTitles}>
							404 Destination Not Found
						</Title>
						<Text>You've gone off the map. Recalculating route...</Text>
					</div>
				</div>
			</div>

			<div
				className={
					isMobile
						? `${aboutClasses.footer} ${aboutClasses.buttonContainerShadow}`
						: `${aboutClasses.buttonContainerBottom} ${aboutClasses.white} ${aboutClasses.buttonContainerShadow} ${aboutClasses.buttonDesktopBack}`
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
