import { Button, Card, Text } from "@mantine/core";
import { Link } from "@tanstack/react-router";
import styles from '../styles/Grid.module.css';

export const MantineButtonLink = (props: any) => {
    return <Button component={Link} {...props} />;
};

const HomeButton = () => (
    <Link
        to='/'
        activeProps={{
            className: 'font-bold',
        }}
    >
        <Button variant="outline" color="dark" size="lg" >Home</Button>
    </Link>
);


const DescriptionCard = ({ title, content }: { title: string; content: string }) => {
    return (
        <Card shadow="sm" padding="lg" radius="xs" withBorder className={styles.gridChild}>
            <h1>{title}</h1>
            <Text size="md">{content}</Text>
            <HomeButton />
        </Card>
    );
};


export default DescriptionCard
