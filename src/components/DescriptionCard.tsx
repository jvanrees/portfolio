import { Button, Card, Text } from "@mantine/core";
import { Link } from "@tanstack/react-router";

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
        <Button variant="outline" color="dark" size="lg" className="button">Home</Button>
    </Link>
);


const DescriptionCard = ({ title, content }: { title: string; content: string }) => {
    return (
        <Card shadow="sm" padding="lg" radius="md" withBorder className={'grid-child'}>
            <h1>{title}</h1>
            <Text size="md">{content}</Text>
            <HomeButton />
        </Card>
    );
};


export default DescriptionCard
