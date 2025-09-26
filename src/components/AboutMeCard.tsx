import { Box, Button, Stack, Text, Title } from "@mantine/core";
import { Link } from "@tanstack/react-router";
import type React from "react";
import linkedinIcon from "../img/icon_linkedin.svg";
import mailIcon from "../img/icon_mail.svg";
import logo from "../img/logo.svg";
import aboutStyles from "../styles/About.module.css";

interface AboutMeCardProps extends React.HTMLAttributes<HTMLDivElement> {
	children?: React.ReactNode;
	transitionName?: string;
}

function AboutMeCard({ children, className }: AboutMeCardProps) {
	return (
		<Box className={`${aboutStyles.aboutMeCard} ${className ?? ""}`}>
			<div className={aboutStyles.aboutMeCardContainer}>
				<div className={aboutStyles.aboutMeCardHeader}>
					<div className={aboutStyles.aboutMeCardLogoContainer}>
						<img
							src={logo}
							alt="Jeff Van Rees Map Logo"
						/>
					</div>
					<div className={aboutStyles.aboutMeCardButtons}>
						<Stack gap="sm">
							<Button
								component="a"
								href="mailto:jeff@jvanrees.com"
								variant="subtle"
								size="sm"
							>
								<img src={mailIcon} alt="Email" style={{ height: '2em' }} />
							</Button>
							<Button
								component="a"
								href="https://www.linkedin.com/in/jeffvanrees/"
								variant="subtle"
								size="sm"
							>
								<img src={linkedinIcon} alt="LinkedIn"style={{ height: '2em' }} />
							</Button>
						</Stack>
					</div>
				</div>
				<div className={aboutStyles.aboutMeCardContent}>
					<Title order={3} mb="sm">
						Hello, I'm Jeff and I make maps on the internet.
					</Title>
					<Text
						fz={{
							base: "0.875rem",
							sm: "0.875rem",
							md: "0.9rem",
							lg: "1.1rem",
							xl: "1.25rem",

						}}
						mb="md"
					>
						I transform complex questions and data into meaningful and
						digestible interactive visual experiences. Let's build the future of
						spatial together.
					</Text>
					{children}
				</div>

				<Link
					to="/about"
					viewTransition
					className={aboutStyles.aboutMeCardButton}
				>
					<Button variant="transparent">About Me</Button>
				</Link>
			</div>
		</Box>
	);
}

export default AboutMeCard;
