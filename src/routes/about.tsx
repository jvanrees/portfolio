import { Icon } from "@iconify-icon/react";
import { Button, Group, Image, Text, Title } from "@mantine/core";
import { createFileRoute, Link } from "@tanstack/react-router";
import { clsx } from "clsx";
import headshot from "../img/headshot_b.jpg";
import logoRow from "../img/logo_row.svg";
import aboutClasses from "../styles/About.module.css";
import gridClasses from "../styles/Grid.module.css";

export const Route = createFileRoute("/about")({
	component: AboutComponent,
});

function AboutComponent() {
	const isMobile = window.innerWidth < 520;

	return (
		<div
			className={clsx(gridClasses.gridChild, aboutClasses.fullGridOverlay, aboutClasses.noShadow, aboutClasses.flexColumn)}
			style={{ viewTransitionName: "AboutMe", overflowY: "auto" }}
		>
			<div
				className={clsx(aboutClasses.aboutMeOpen, gridClasses.subGridChild)}
			>
				<div
					className={clsx(aboutClasses.aboutMeOpenContent, gridClasses.subGridChild)}
				>
					<div className={aboutClasses.mapLogoHeader}>
						<div className={clsx(aboutClasses.mapLogoContainer)}>
							<Image src={logoRow} alt="Jeff Van Rees Map Logo." />
						</div>
					</div>
					<div className={aboutClasses.aboutMeText}>
						<div className={aboutClasses.headshotCnt}>
							<Image
								className={aboutClasses.headshot}
								alt="Jeff's Headshot."
								src={headshot}
							/>
						</div>
						<Title order={3} className={aboutClasses.aboutMeSubTitles}>
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
						<div className={aboutClasses.contactTable}>
							<Title order={3} className={aboutClasses.aboutMeSubTitles}>
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
				className={clsx(aboutClasses.aboutMeResume, gridClasses.subGridChild)}
			>
				<div className={aboutClasses.aboutMeStatsRow}>
					<div className={aboutClasses.aboutMeStatsContent}>
						<Title order={4} className={aboutClasses.aboutMeSubTitles}>
							Education
						</Title>
						<Title order={5} className={aboutClasses.aboutMeSubTitlesConnect}>
							Colorado State University
						</Title>
						<Text className={aboutClasses.aboutMeSubTitlesConnect}>
							<b>Bachelor of Science, Anthropology w/ minor in Geography</b>
						</Text>
						<br />
						<Title order={5} className={aboutClasses.aboutMeSubTitlesConnect}>
							University of Wisconsin-Madison
						</Title>
						<Text className={aboutClasses.aboutMeSubTitlesConnect}>
							Master of Science Cartography/GIS Development
						</Text>
					</div>
					<div className={aboutClasses.aboutMeStatsContent}>
						<Title order={4} className={aboutClasses.aboutMeSubTitles}>
							Experience
						</Title>
						<Title order={5} className={aboutClasses.aboutMeSubTitlesConnect}>
							Verizon Location Services (MapQuest)
						</Title>
						<Text className={aboutClasses.aboutMeSubTitlesConnect}>
							Cartographer
						</Text>
						<br />
						<Title order={5} className={aboutClasses.aboutMeSubTitlesConnect}>
							Center for Environmental Management of Military Lands
						</Title>
						<Text className={aboutClasses.aboutMeSubTitlesConnect}>
							Data Technician
						</Text>
					</div>
					<div className={aboutClasses.aboutMeStatsContent}>
						<Title order={5} className={aboutClasses.aboutMeSubTitlesConnect}>
							Likes
						</Title>
						<Text className={aboutClasses.aboutMeSubTitlesConnect}>
							Bunnies, FOSS, Mapbox, Deck.GL, QGIS, PostGIS
						</Text>
						<br />
						<Title order={5} className={aboutClasses.aboutMeSubTitlesConnect}>
							Dislikes
						</Title>
						<Text className={aboutClasses.aboutMeSubTitlesConnect}>
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
						? `${aboutClasses.footer} ${aboutClasses.buttonContainerShadow}`
						: `${aboutClasses.buttonContainerBottom} ${aboutClasses.white} ${aboutClasses.buttonContainerShadow} ${aboutClasses.buttonDesktopBack}`
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
