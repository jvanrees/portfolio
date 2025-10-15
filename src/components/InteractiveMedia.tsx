import { useEffect, useState } from "react";
import { Layer, Source } from "react-map-gl/maplibre";
import config from "../util/config";
import ProjectPageMap from "./ProjectPageMap";

interface InteractiveMediaProps {
	activeKey: string;
}

const urlMap: Record<string, string> = {
	"2": "https://api.mapbox.com/styles/v1/jvanrees/cjqrfjufv88ds2spcxadhcbbp.html?fresh=true&title=true&access_token=pk.eyJ1IjoianZhbnJlZXMiLCJhIjoiY2lzZGRvcmRhMDA0dTJ5cnRrbGRld3l0dCJ9.tYSjHXsUNgl5T6C_mOVyxQ#9.65/39.7447/-104.9111/-37.6/60",
};

export function InteractiveMedia({ activeKey }: InteractiveMediaProps) {
	const [currentUrl, setCurrentUrl] = useState(urlMap["2"]);

	useEffect(() => {
		const url = urlMap[activeKey];
		if (url) {
			setCurrentUrl(url);
		}
	}, [activeKey]);

	if (activeKey === "1") {
		return (
			<ProjectPageMap
				style="dark"
				initialViewState={{
					longitude: -76.96417543059914,
					latitude: 38.90679867244859,
					zoom: 8.868734873694233,
					bearing: 0,
					pitch: 0,
					padding: { top: 0, bottom: 0, left: 0, right: 0 },
				}}
			>
				<Source
					id="dotmap-dc-race"
					type="vector"
					url={`https://api.mapbox.com/v4/jvanrees.4cgu9pm2.json?secure&access_token=${config.mapboxApiKey}`}
				>
					<Layer
						id="dotmap-dc-race"
						type="circle"
						source="dotmap-dc-race"
						source-layer="dotmap_dc_race"
						paint={{
							"circle-radius": [
								"interpolate",
								["exponential", 1.11],
								["zoom"],
								6,
								0.75,
								22,
								7.5,
							],
							"circle-color": [
								"match",
								["get", "race_ethnicity"],
								["african american"],
								"hsl(118, 41%, 49%)",
								["asian and pacific"],
								"hsl(207, 54%, 47%)",
								["hispanic"],
								"hsl(359, 80%, 50%)",
								["native american"],
								"hsl(30, 100%, 50%)",
								["white"],
								"hsl(292, 35%, 47%)",
								"#000000",
							],
							"circle-opacity": 0.69,
							"circle-blur": 1,
						}}
					/>
				</Source>
			</ProjectPageMap>
		);
	} else {
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
}
