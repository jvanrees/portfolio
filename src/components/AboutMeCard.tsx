import { Box, Button, Group, Stack, Text, Title } from '@mantine/core';
import { Link } from '@tanstack/react-router';
import linkedinIcon from '../img/icon_linkedin.svg';
import mailIcon from '../img/icon_mail.svg';
import logo from '../img/logo.svg';

interface AboutMeCardProps {
    children?: React.ReactNode;
}

const AboutMeCard = ({ children }: AboutMeCardProps) => {
    return (
        <Box style={{ height: '100%' }}>
            <div style={{ display: 'flex', flexDirection: 'column', height: '100%', padding: 'none' }}>
                <div style={{ display: 'flex', backgroundColor: '#61dafb', padding: '1rem' }}>
                    <div style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
                        <img src={logo} alt="Jeff Van Rees Map Logo" style={{ height: '6rem' }} />
                    </div>
                    <div style={{ width: '80px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
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
                <div style={{ flex: 1, padding: '1rem' }}>
                    <Title order={4} mb="sm">
                        Hello, I'm Jeff and I make maps on the internet.
                    </Title>
                    <Text size="sm" mb="md">
                        I transform complex questions and data into meaningful and digestible interactive visual experiences. Let's build the future of spatial together.
                    </Text>
                    {children}
                </div>

                <Group justify="right">
                    <Link to="/about">
                        <Button variant="transparent">About Me</Button>
                    </Link>
                </Group>
            </div>
        </Box>
    );
};

export default AboutMeCard;
