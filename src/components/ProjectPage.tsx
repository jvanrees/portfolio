import { Icon } from '@iconify-icon/react'
import { Button } from '@mantine/core'
import { Link } from '@tanstack/react-router'
import styles from '../styles/ProjectPage.module.css'
import { RmaAndroidDesc } from './ProjectPageDescription'
import { ProjectMedia } from './ProjectPageMedia'

interface ProjectPageComponentProps extends React.HTMLAttributes<HTMLDivElement> {
    children?: React.ReactNode;
    transitionName?: string;
}

export function ProjectPageComponent({ transitionName }: ProjectPageComponentProps) {
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 530;
    return (
        <div style={{ viewTransitionName: transitionName, height: '100%', overflowY: 'auto' }}>
            <div className={styles.projectPageGridContainer}>
                <div className={styles.imageGrid}>
                    <ProjectMedia />
                </div>
                <div className={styles.descriptionGrid}>
                    <RmaAndroidDesc />
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
        </div>
    )
}