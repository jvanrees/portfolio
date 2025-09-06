import { Box, Button, Group, Stack, Text, Title } from '@mantine/core';
import { Link } from '@tanstack/react-router';
import React from 'react';
import linkedinIcon from '../img/icon_linkedin.svg';
import mailIcon from '../img/icon_mail.svg';
import logo from '../img/logo.svg';
import aboutStyles from '../styles/About.module.css';

interface AboutMeCardProps extends React.HTMLAttributes<HTMLDivElement> {
    children?: React.ReactNode;
    transitionName?: string;
}

function AboutMeCard({ children, className }: AboutMeCardProps) {
    return (
        <Box
            className={`${aboutStyles.aboutMeCard} ${className ?? ''}`}
        >
            <div className={aboutStyles.aboutMeCardContainer}>
                <div className={aboutStyles.aboutMeCardHeader}>
                    <div className={aboutStyles.aboutMeCardLogoContainer}>
                        <img src={logo} alt="Jeff Van Rees Map Logo" className={aboutStyles.aboutMeCardLogo} />
                    </div>
                    <div className={aboutStyles.aboutMeCardButtons}>
                        <Stack gap="sm">
                            <Button
                                component="a"
                                href="mailto:jeff@jvanrees.com"
                                variant="subtle"
                                size="sm"
                            >
                                <img src={mailIcon} alt="Email" height={32} />
                            </Button>
                            <Button
                                component="a"
                                href="https://www.linkedin.com/in/jeffvanrees/"
                                variant="subtle"
                                size="sm"
                            >
                                <img src={linkedinIcon} alt="LinkedIn" height={32} />
                            </Button>
                        </Stack>
                    </div>
                </div>
                <div className={aboutStyles.aboutMeCardContent}>
                    <Title order={4} mb="sm">
                        Hello, I'm Jeff and I make maps on the internet.
                    </Title>
                    <Text size="sm" mb="md">
                        I transform complex questions and data into meaningful and digestible interactive visual experiences. Let's build the future of spatial together.
                    </Text>
                    {children}
                </div>

                <Group justify="right">
                    <Link to="/about" viewTransition>
                        <Button variant="transparent">About Me</Button>
                    </Link>
                </Group>
            </div>
        </Box>
    );
};

export default AboutMeCard;
