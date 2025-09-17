import styles from '../styles/ProjectPageIFrame.module.css';

interface ProjectPageIFrameProps {
    src: string;
    title?: string;
}

export default function ProjectPageIFrame({ src, title = 'Embedded Application' }: ProjectPageIFrameProps) {
    return (
        <div className={styles.container}>
            <iframe
                src={src}
                title={title}
                className={styles.iframe}
                frameBorder="0"
                allowFullScreen
            />
        </div>
    );
}