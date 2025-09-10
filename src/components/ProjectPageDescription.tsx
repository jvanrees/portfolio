import { Paper, Text } from "@mantine/core";
import styles from '../styles/Grid.module.css';

export interface ProjectMediaProps {
    title: string;
    paragraphs: string[];
}

export function ProjectPageDesc({ title, paragraphs }: ProjectMediaProps) {
    return (
        <Paper p="md" className={styles.gridChild + styles.noShadow}>
            <h1>{title}</h1>
            {paragraphs.map((paragraph, index) => (
                <Text key={index} size="md" mt="md">
                    {paragraph}
                </Text>
            ))}
            <br />
        </Paper>
    );
}
