import { clsx } from "clsx";
import googleMapsImage from "../img/google_maps_android.png";
import leafletMap from "../img/leaflet_map.png";
import QingDynasty from "../img/ming_cartocss.png";
import nightModeImage from "../img/new_night_mode.png";
import rmaAndroidImage from "../img/rma_history_android.png";
import rmaVisitorImage from "../img/rma_node_express.png";
import shadedReliefImage from "../img/shaded_relief.png";
import gridStyles from "../styles/Grid.module.css";
import AboutMeCard from "./AboutMeCard";
import HomeGridTile from "./HomeGridTile";

export const gridItems = [
	{
		key: "aboutMe",
		className: clsx(gridStyles.spanSquareLarge, gridStyles.titleBox, gridStyles.noShadow),
		transitionName: "AboutMe",
		title: "About Me",
		content: <AboutMeCard />,
	},
	{
		key: "rmaAndroid",
		className: gridStyles.spanCenterpiece,
		transitionName: "RmaAndroid",
		title: "Arsenal Android App",
		content: (
			<HomeGridTile
				imageSrc={rmaAndroidImage}
				title={"Android Arsenal App"}
				link={"/rma-android"}
			/>
		),
	},
	{
		key: "googleMapsApi",
		className: clsx(gridStyles.spanRectHorizontal, gridStyles.rotateCell),
		transitionName: "GoogleMaps",
		title: "Google Maps API",
		content: (
			<HomeGridTile
				imageSrc={googleMapsImage}
				title={"Google Maps API"}
				link={"/google-maps-api"}
			/>
		),
	},
	{
		key: "rmaVisitor",
		className: gridStyles.spanSquareSmall,
		transitionName: "RmaVisitor",
		title: "PostGIS WebApp",
		content: (
			<HomeGridTile
				imageSrc={rmaVisitorImage}
				title={"PostGIS WebApp"}
				link={"/rma-visitor-postgis"}
			/>
		),
	},
	{
		key: "qingMap",
		className: gridStyles.spanRectVertical,
		transitionName: "CartoCSS",
		title: "Qing Dynasty",
		content: (
			<HomeGridTile
				imageSrc={QingDynasty}
				title={"Qing Dynasty Map"}
				link={"/qing-dynasty-map"}
			/>
		),
	},
	{
		key: "nightMode",
		className: gridStyles.spanSquareLarge,
		transitionName: "NightMode",
		title: "MapQuest Night Mode",
		content: (
			<HomeGridTile
				imageSrc={nightModeImage}
				title={"MapQuest  Night Mode"}
				link={"/nightmode"}
			/>
		),
	},
	{
		key: "shadedRelief",
		className: gridStyles.shadedReliefBox,
		transitionName: "ShadedRelief",
		title: "Shaded Relief",
		content: (
			<HomeGridTile
				imageSrc={shadedReliefImage}
				title={"Shaded Relief"}
				link={"/shaded-relief"}
			/>
		),
	},
	{
		key: "evenMoreMaps",
		className: gridStyles.expandableCell,
		transitionName: "EvenMoreMaps",
		title: "More...",
		content: (
			<HomeGridTile
				imageSrc={leafletMap}
				title={"More Maps"}
				link={"/even-more-maps"}
			/>
		),
	},
];
