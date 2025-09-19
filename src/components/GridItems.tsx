import googleMapsImage from "../img/google_maps_android.png";
import leafletMap from "../img/leaflet_map.png";
import QingDynasty from "../img/ming_cartocss.png";
import nightModeImage from "../img/new_night_mode.png";
import rmaAndroidImage from "../img/rma_history_android.png";
import rmaVisitorImage from "../img/rma_node_express.png";
import shadedReliefImage from "../img/shaded_relief.png";
import styles from "../styles/Grid.module.css";
import AboutMeCard from "./AboutMeCard";
import HomeGridTile from "./HomeGridTile";

export const gridItems = [
	{
		key: "aboutMe",
		className: `${styles.spanSquareLarge} ${styles.titleBox} ${styles.noShadow}`,
		transitionName: "AboutMe",
		title: "About Me",
		content: <AboutMeCard />,
	},
	{
		key: "rmaAndroid",
		className: styles.spanCenterpiece,
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
		className: `${styles.spanRectHorizontal} ${styles.rotateCell}`,
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
		className: styles.spanSquareSmall,
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
		className: styles.spanRectVertical,
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
		className: styles.spanSquareLarge,
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
		className: styles.shadedReliefBox,
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
		className: styles.expandableCell,
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
