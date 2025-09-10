import { Paper, Text } from "@mantine/core";
import styles from '../styles/Grid.module.css';

export function RmaAndroidDesc() {
    return (
        <Paper p="md" className={styles.gridChild + styles.noShadow}>
            <h1>Rocky Mountain Arsenal Android App</h1>
            <Text size="md">
                The Rocky Mountain Arsenal National Wildlife Refuge is one of the nation’s largest urban wildlife
                preserves. The open space it provides, just 10 miles from downtown Denver, for wildlife and
                recreators is courtesy the location’s complex history as a manufacturing facility for weapons and
                chemicals. It is a story that includes both environmental damage and restoration, and reflects our
                increasing recognition of the value of wildlife and open space.
            </Text>
            <Text size="md" mt="md">
                The data, digitized scanned government documents, and the application itself were built from the
                ground up. I enjoy challenging myself and learning new technologies.
            </Text>
            <br />
        </Paper>
    );
}
