import { Accordion, Text } from "@mantine/core";
import { useState } from "react";

interface AccordionDescriptionProps {
	onActiveChange: (key: string) => void;
}

export function AccordionDescription({
	onActiveChange,
}: AccordionDescriptionProps) {
	const [active, setActive] = useState<string | null>("1");

	const handleChange = (value: string | null) => {
		setActive(value);
		if (value) {
			onActiveChange(value);
		}
	};

	return (
		<div style={{ padding: "1rem" }}>
			<h2>Even More Maps</h2>
			<Accordion value={active} onChange={handleChange}>
				<Accordion.Item value="1">
					<Accordion.Control>
						<h3>Leaflet Time Series</h3>
					</Accordion.Control>
					<Accordion.Panel>
						<Text size="md">
							Displaying spatiotemporal data has been a challenge for
							cartographers, but with interactive mapping temporal data can be
							communicated more clearly than ever. Here a jQuery slider is used
							to change years of data. Proportional symbols calculated on the
							fly to show spatial differences. As the husband of a foreign
							spouse, I was taken aback by recent anti-immigrant sentiment.
							Thus, I made this map to see if there were significant changes in
							the foreign born population that would lead some to hold a grudge.
							Looking at the map it doesn't appear that much changed in the time
							preceding 2016.
						</Text>
					</Accordion.Panel>
				</Accordion.Item>

				<Accordion.Item value="2">
					<Accordion.Control>
						<h3>D3 Coordinated Visualization</h3>
					</Accordion.Control>
					<Accordion.Panel>
						<Text size="md">
							Interactivity is one of the strongest attributes of mapping and
							data visualization on the internet. Here, D3 is used to link a
							chart with an interactive map. A mouseover event on the map will
							highlight the corresponding bar in the chart. The user can select
							different years to see a different set of data, and the chart
							reorganizes itself from high to low and colors are automatically
							assigned using D3's quantile method.
							<br />
							Check it out{" "}
							<a
								href="https://s3.amazonaws.com/jvr-portfolio-examples/d3_project/index.html"
								target="_blank"
								rel="noopener noreferrer"
							>
								here.
							</a>
						</Text>
					</Accordion.Panel>
				</Accordion.Item>

				<Accordion.Item value="3">
					<Accordion.Control>
						<h3>Census Dot Map Preview</h3>
					</Accordion.Control>
					<Accordion.Panel>
						<Text size="md">
							A project I'm working on in my free time is demonstrating
							different ways to visualize census data. This map, inspired by the{" "}
							<a
								href="http://demographics.virginia.edu/DotMap/"
								target="_blank"
								rel="noopener noreferrer"
							>
								University of Virginia's Racial Dot Map
							</a>
							, shows one dot per person by race in the Washington DC combined
							statistical area (CSA).
							<br />
							I've loaded ACS 5yr Census data into a Postgres/PostGIS database
							allowing for the rapid creation of maps across the United States.
							Dots were created within census block groups. Then the data was
							converted to vector tiles with points dropped at lower zoom levels
							and uploaded to Mapbox.
						</Text>
					</Accordion.Panel>
				</Accordion.Item>

				<Accordion.Item value="4">
					<Accordion.Control>
						<h3>Census Hexbin Preview</h3>
					</Accordion.Control>
					<Accordion.Panel>
						<Text size="md">
							Demonstrating another way to visualize census data, this map uses
							extruding hexagons to visualize population. I created PL/pgSQL
							functions that create hexagons over an area and then calculates a
							value from any census table to the hexagon.
						</Text>
					</Accordion.Panel>
				</Accordion.Item>
			</Accordion>
		</div>
	);
}
