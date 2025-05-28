import { Button, Card } from '@mantine/core';
import { Link } from '@tanstack/react-router';
import googleMapsImage from '../img/google_maps_android.png';
import leafletMap from '../img/leaflet_map.png';
import QingDynasty from '../img/ming_cartocss.png';
import nightModeImage from '../img/new_night_mode.png';
import rmaAndroidImage from '../img/rma_history_android.png';
import rmaVisitorImage from '../img/rma_node_express.png';
import shadedReliefImage from '../img/shaded_relief.png';
import HomeGridTile from './HomeGridTile';

export const gridItems = [
  {
    key: "aboutMe",
    className: "span-square-large titleBox no-shadow",
    flipId: "AboutMe",
    title: "About Me",
    content: (
      <Card radius="lg">
        <h1>About Me Placeholder</h1>
        <Link to='/about'>
          <Button variant="outline" color="dark" size="lg" className="button">About Me</Button>
        </Link>
      </Card>
    ),
  },
  {
    key: "rmaAndroid",
    className: "span-centerpiece",
    flipId: "RmaAndroid",
    title: "Arsenal Android App",
    content: (
      <HomeGridTile imageSrc={rmaAndroidImage} title={"Android Arsenal App"} link={"/rma-android"} />
    ),
  },
  {
    key: "googleMapsApi",
    className: "span-rect-horizontal rotate-cell",
    flipId: "GoogleMaps",
    title: "Google Maps API",
    content: (
      <HomeGridTile imageSrc={googleMapsImage} title={"Google Maps API"} link={"/google-maps-api"} />
    ),
  },
  {
    key: "rmaVisitor",
    className: "span-square-small",
    flipId: "RmaVisitor",
    title: "PostGIS WebApp",
    content: (
      <HomeGridTile imageSrc={rmaVisitorImage} title={"PostGIS WebApp"} link={"/rma-visitor-postgis"} />
    ),
  },
  {
    key: "qingMap",
    className: "span-rect-vertical",
    flipId: "CartoCSS",
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
    className: "span-square-large",
    flipId: "NightMode",
    title: "MapQuest Night Mode",
    content: (
      <HomeGridTile imageSrc={nightModeImage} title={"MapQuest  Night Mode"} link={"/nightmode"} />
    ),
  },
  {
    key: "shadedRelief",
    className: "span-shadedReliefBox shadedReliefBox",
    flipId: "ShadedRelief",
    title: "Shaded Relief",
    content: (
      <HomeGridTile imageSrc={shadedReliefImage} title={"Shaded Relief"} link={"/shaded-relief"} />
    ),
  },
  {
    key: "evenMoreMaps",
    className: "span-square-small expandable-cell",
    flipId: "EvenMoreMaps",
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
