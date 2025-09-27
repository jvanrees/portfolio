import { Button, Paper, Text } from "@mantine/core";
import { Link } from "@tanstack/react-router";
import { forwardRef } from "react";
import gridStyles from "../styles/Grid.module.css";

export const MantineButtonLink = (props: any) => {
	return <Button component={Link} {...props} />;
};

const HomeButton = () => (
	<Link
		to="/"
		activeProps={{
			className: "font-bold",
		}}
	>
		<Button variant="outline" color="dark" size="lg">
			Home
		</Button>
	</Link>
);

const DescriptionCard = forwardRef<
	HTMLDivElement,
	{ title: string; content: string }
>((props, ref) => {
	const { title, content } = props;
	return (
		<Paper ref={ref} shadow="sm" p="lg" withBorder className={gridStyles.gridChild}>
			<h1>{title}</h1>
			<Text size="md">{content}</Text>
			<HomeButton />
		</Paper>
	);
});

export default DescriptionCard;
