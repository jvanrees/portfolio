import { Paper, Text } from "@mantine/core";
import styles from '../styles/Grid.module.css';

export function RmaAndroidDesc() {
    return (
        <Paper shadow="sm" p="lg" withBorder className={styles.gridChild}>
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
            <a
                href='https://play.google.com/store/apps/details?id=com.rmahistory&hl=en&utm_source=2&pcampaignid=MKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'
                target="_blank"
                rel="noopener noreferrer"
            >
                <img
                    alt='Get it on Google Play'
                    style={{ width: "50%", marginLeft: "auto", marginRight: "auto" }}
                    src='https://play.google.com/intl/en_us/badges/images/generic/en_badge_web_generic.png'
                />
            </a>
        </Paper>
    );
}
