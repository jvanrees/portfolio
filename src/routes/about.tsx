import { Icon } from "@iconify-icon/react";
import { Button, Group, Image, Text, Title } from "@mantine/core";
import { createFileRoute, Link } from "@tanstack/react-router";
import { clsx } from "clsx";
import headshot from "../img/headshot_b.jpg";
import logoRow from "../img/logo_row.svg";
import aboutStyles from "../styles/About.module.css";
import gridStyles from "../styles/Grid.module.css";

export const Route = createFileRoute("/about")({
	component: AboutComponent,
});

function AboutComponent() {
	const isMobile = window.innerWidth < 520;

	return (
		<div
			className={clsx(gridStyles.gridChild, aboutStyles.fullGridOverlay, aboutStyles.noShadow, aboutStyles.flexColumn)}
			style={{ viewTransitionName: "AboutMe", overflowY: "auto" }}
		>
			<div
				className={clsx(aboutStyles.aboutMeOpen, gridStyles.subGridChild)}
			>
				<div
					className={clsx(aboutStyles.aboutMeOpenContent, gridStyles.subGridChild)}
				>
					<div className={aboutStyles.mapLogoHeader}>
						<div className={clsx(aboutStyles.mapLogoContainer)}>
							<Image src={logoRow} alt="Jeff Van Rees Map Logo." />
						</div>
					</div>
					<div className={aboutStyles.aboutMeText}>
						<div className={aboutStyles.headshotCnt}>
							<Image
								className={aboutStyles.headshot}
								alt="Jeff's Headshot."
								src={headshot}
							/>
						</div>
						<Title order={3} className={aboutStyles.aboutMeSubTitles}>
							About
						</Title>
						<Text>
							Hello, I'm Jeff and I make maps on the internet. I transform
							complex questions and data into meaningful and digestible
							interactive visual experiences. Let's build the future of spatial
							together. I live in Fort Collins, CO with my wife and two young
							sons. Growing up in Estes Park, CO the walls of my room were
							covered in maps and I carry that love of maps with me today. Over
							the course of my studies and career I have gravitated toward open
							source tech. I'm particularly passionate about PostGIS and the
							Mapbox stack.
						</Text>
						<div className={aboutStyles.contactTable}>
							<Title order={3} className={aboutStyles.aboutMeSubTitles}>
								Connect
							</Title>
							<Group>
								<Button
									component="a"
									href="tel:9709805199"
									variant="transparent"
									leftSection={<Icon icon="mdi:phone" />}
								>
									Phone
								</Button>
								<Button
									component="a"
									href="mailto:jeff@jvanrees.com"
									variant="transparent"
									leftSection={<Icon icon="mdi:email" />}
								>
									Email
								</Button>
								<Button
									component="a"
									href="https://www.linkedin.com/in/jeffvanrees/"
									variant="transparent"
									leftSection={<Icon icon="mdi:linkedin" />}
								>
									LinkedIn
								</Button>
							</Group>
						</div>
					</div>
				</div>
			</div>
			<div
				className={clsx(aboutStyles.aboutMeResume, gridStyles.subGridChild)}
			>
				<div className={aboutStyles.aboutMeStatsRow}>
					<div className={aboutStyles.aboutMeStatsContent}>
						<Title order={4} className={aboutStyles.aboutMeSubTitles}>
							Education
						</Title>
						<Title order={5} className={aboutStyles.aboutMeSubTitlesConnect}>
							Colorado State University
						</Title>
						<Text className={aboutStyles.aboutMeSubTitlesConnect}>
							<b>Bachelor of Science, Anthropology w/ minor in Geography</b>
						</Text>
						<br />
						<Title order={5} className={aboutStyles.aboutMeSubTitlesConnect}>
							University of Wisconsin-Madison
						</Title>
						<Text className={aboutStyles.aboutMeSubTitlesConnect}>
							Master of Science Cartography/GIS Development
						</Text>
					</div>
					<div className={aboutStyles.aboutMeStatsContent}>
						<Title order={4} className={aboutStyles.aboutMeSubTitles}>
							Experience
						</Title>
						<Title order={5} className={aboutStyles.aboutMeSubTitlesConnect}>
							Verizon Location Services (MapQuest)
						</Title>
						<Text className={aboutStyles.aboutMeSubTitlesConnect}>
							Cartographer
						</Text>
						<br />
						<Title order={5} className={aboutStyles.aboutMeSubTitlesConnect}>
							Center for Environmental Management of Military Lands
						</Title>
						<Text className={aboutStyles.aboutMeSubTitlesConnect}>
							Data Technician
						</Text>
					</div>
					<div className={aboutStyles.aboutMeStatsContent}>
						<Title order={5} className={aboutStyles.aboutMeSubTitlesConnect}>
							Likes
						</Title>
						<Text className={aboutStyles.aboutMeSubTitlesConnect}>
							Bunnies, FOSS, Mapbox, Deck.GL, QGIS, PostGIS
						</Text>
						<br />
						<Title order={5} className={aboutStyles.aboutMeSubTitlesConnect}>
							Dislikes
						</Title>
						<Text className={aboutStyles.aboutMeSubTitlesConnect}>
							Wasps, Shapefiles, Front Lawns, esri
						</Text>
					</div>
				</div>
			</div>
			{isMobile && (
				<div style={{ visibility: "visible", padding: "0.5rem" }}>
					<Button>&nbsp;</Button>
				</div>
			)}
			<div
				className={
					isMobile
						? `${aboutStyles.footer} ${aboutStyles.buttonContainerShadow}`
						: `${aboutStyles.buttonContainerBottom} ${aboutStyles.white} ${aboutStyles.buttonContainerShadow} ${aboutStyles.buttonDesktopBack}`
				}
			>
				<Group>
					<Button
						component={Link}
						to="/"
						leftSection={<Icon icon="mdi:chevron-left" />}
						variant="transparent"
					>
						Back
					</Button>
					<Button
						onClick={() => window.open("VanRees_Jeffrey_resume.pdf", "_blank")}
						variant="transparent"
					>
						Resume
					</Button>
				</Group>
			</div>
		</div>
	);
}
