import projectPageIFrameStyles from "../styles/ProjectPageIFrame.module.css";

interface ProjectPageIFrameProps {
	src: string;
	title?: string;
}

export default function ProjectPageIFrame({
	src,
	title = "Embedded Application",
}: ProjectPageIFrameProps) {
	return (
		<div className={projectPageIFrameStyles.container}>
			<iframe
				src={src}
				title={title}
				className={projectPageIFrameStyles.iframe}
				frameBorder="0"
				allowFullScreen
			/>
		</div>
	);
}
