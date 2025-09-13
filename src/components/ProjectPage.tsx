import { Icon } from '@iconify-icon/react'
import { Button } from '@mantine/core'
import { Link } from '@tanstack/react-router'
import styles from '../styles/ProjectPage.module.css'
import { ProjectPageDesc } from './ProjectPageDescription'
import { ProjectMedia } from './ProjectPageMedia'

interface ProjectPageComponentProps extends React.HTMLAttributes<HTMLDivElement> {
    title: string;
    images?: string[]; // optional - legacy image slider
    paragraphs: string[];
    // optional media node: e.g., a map component to render instead of images
    media?: React.ReactNode;
}

export default function ProjectPageComponent({ title, images, paragraphs, media }: ProjectPageComponentProps) {
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 530;
    return (
        <div className={styles.projectPageGridContainer}>
            <div className={styles.imageGrid}>
                {media ? (
                    // render provided media node (map, video, etc.)
                    media
                ) : (
                    // fallback to legacy image slider
                    <ProjectMedia title={title} images={images || []} />
                )}
            </div>
            <div className={styles.descriptionGrid}>
                <ProjectPageDesc title={title} paragraphs={paragraphs} />
            </div>
            {isMobile && (
                <div className={styles.bufferButton}>
                    <Button style={{ opacity: 0 }}>
                        &nbsp;
                    </Button>
                </div>
            )}
            <div className={styles.bottomNav}>
                <Button
                    component={Link}
                    to="/"
                    leftSection={<Icon icon="mdi:chevron-left" />}
                    variant='transparent'
                >
                    Back
                </Button>
            </div>
        </div>

    )
}