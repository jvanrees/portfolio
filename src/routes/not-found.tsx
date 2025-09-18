import { Button, Group, Image, Title } from "@mantine/core";
import { createFileRoute, Link } from "@tanstack/react-router";
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
				className={aboutClasses.aboutMeOpen + " " + gridClasses.subGridChild}
			>
				<div
					className={
						aboutClasses.aboutMeOpenContent + " " + gridClasses.subGridChild
					}
				>
					<div className={aboutClasses.mapLogoRow}>
						<Image w={"16rem"} src={logoRow} alt="Jeff Van Rees Map Logo." />
					</div>
					<div className={aboutClasses.aboutMeText}>
						<Title order={3} className={aboutClasses.aboutMeSubTitles}>
							404 - Page Not Found
						</Title>
					</div>
				</div>
			</div>

			<div
				className={
					isMobile
						? aboutClasses.footer + " " + aboutClasses.buttonContainerShadow
						: aboutClasses.buttonContainerBottom +
							" " +
							aboutClasses.white +
							" " +
							aboutClasses.buttonContainerShadow +
							" " +
							aboutClasses.buttonDesktopBack
				}
				style={{ height: "100%" }}
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
