import { useEffect, useState } from "react";

interface InteractiveMediaProps {
	activeKey: string;
}

const urlMap: Record<string, string> = {
	"1": "https://s3.amazonaws.com/jvr-portfolio-examples/VanReesLab1/index.html",
	"2": "https://s3.amazonaws.com/jvr-portfolio-examples/d3_project/index.html",
	"3": "https://api.mapbox.com/styles/v1/jvanrees/cjspriaik1ata1fphzvcnoxkc.html?fresh=true&title=true&access_token=pk.eyJ1IjoianZhbnJlZXMiLCJhIjoiY2lzZGRvcmRhMDA0dTJ5cnRrbGRld3l0dCJ9.tYSjHXsUNgl5T6C_mOVyxQ#8.89/38.9046/-76.9874",
	"4": "https://api.mapbox.com/styles/v1/jvanrees/cjqrfjufv88ds2spcxadhcbbp.html?fresh=true&title=true&access_token=pk.eyJ1IjoianZhbnJlZXMiLCJhIjoiY2lzZGRvcmRhMDA0dTJ5cnRrbGRld3l0dCJ9.tYSjHXsUNgl5T6C_mOVyxQ#9.65/39.7447/-104.9111/-37.6/60",
};

export function InteractiveMedia({ activeKey }: InteractiveMediaProps) {
	const [currentUrl, setCurrentUrl] = useState(urlMap["1"]);

	useEffect(() => {
		const url = urlMap[activeKey];
		if (url) {
			setCurrentUrl(url);
		}
	}, [activeKey]);

	return (
		<div style={{ width: "100%", height: "100%" }}>
			<iframe
				src={currentUrl}
				style={{
					width: "100%",
					height: "100%",
					border: "none",
					minHeight: "400px",
				}}
				title="Interactive Map"
				allowFullScreen
			/>
		</div>
	);
}
