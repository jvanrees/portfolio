import { Button, Card } from '@mantine/core';
import { createFileRoute, Link } from '@tanstack/react-router';
import { Flipped, Flipper } from 'react-flip-toolkit';

export const Route = createFileRoute('/')({
  component: RouteComponent,
})

const gridItems = [
  {
    key: "aboutMe",
    className: "grid-child span-square-large titleBox no-shadow",
    flipId: "AboutMe",
    title: "About Me",
    content: (
      <Card radius="lg">
        <h1>About Me Placeholder</h1>
        <Link
          to='/about'
          activeProps={{
            className: 'font-bold',
          }}
        >
          <Button variant="outline" color="dark" size="lg" className="button">About Me</Button>
        </Link>
      </Card>
    ),
  },
  {
    key: "rmaAndroid",
    className: "grid-child span-centerpiece",
    flipId: "RmaAndroid",
    title: "Arsenal Android App",
    content: (
      <Link
        to="/rma-android"
        activeProps={{
          className: 'font-bold',
        }}
      >
        <Card radius="lg">
          <h1>RMA Android Placeholder</h1>


        </Card>
      </Link>
    ),
  },
  {
    key: "googleMapsApi",
    className: "grid-child span-rect-horizontal rotate-cell",
    flipId: "GoogleMaps",
    title: "Google Maps API",
    content: (
      <Link
        to="/google-maps-api"
        activeProps={{
          className: 'font-bold',
        }}
      >
        <Card radius="lg">
          <h1>Google Maps Placeholder</h1>


        </Card>
      </Link>
    ),
  },
  {
    key: "rmaVisitor",
    className: "grid-child span-square-small",
    flipId: "RmaVisitor",
    title: "PostGIS WebApp",
    content: (
      <Link
        to="/rma-visitor-postgis"
        activeProps={{
          className: 'font-bold',
        }}
      >
        <Card radius="lg">
          <h1>RMA Visitor Placeholder</h1>


        </Card>
      </Link>
    ),
  },
  {
    key: "qingMap",
    className: "grid-child span-rect-vertical",
    flipId: "CartoCSS",
    title: "Qing Dynasty",
    content: (
      <Link
        to="/qing-dynasty-map"
        activeProps={{
          className: 'font-bold',
        }}
      >
        <Card radius="lg">
          <h1>Qing Dynasty Placeholder</h1>
        </Card>
      </Link>
    ),
  },
  {
    key: "nightMode",
    className: "grid-child span-square-large",
    flipId: "NightMode",
    title: "MapQuest Night Mode",
    content: (
      <Link
        to="/nightmode"
        activeProps={{
          className: 'font-bold',
        }}
      >
        <Card radius="lg">
          <h1>Nightmode Placeholder</h1>


        </Card>
      </Link>
    ),
  },
  {
    key: "shadedRelief",
    className: "grid-child span-shadedReliefBox shadedReliefBox",
    flipId: "ShadedRelief",
    title: "Shaded Relief",
    content: (
      <Link
        to="/shaded-relief"
        activeProps={{
          className: 'font-bold',
        }}
      >
        <Card radius="lg">
          <h1>Shaded Relief Placeholder</h1>
        </Card>
      </Link>
    ),
  },
  {
    key: "evenMoreMaps",
    className: "grid-child span-square-small expandable-cell",
    flipId: "EvenMoreMaps",
    title: "More...",
    content: (
      <Link
        to="/even-more-maps"
        activeProps={{
          className: 'font-bold',
        }}
      >
        <Card radius="lg">
          <h1>Even More Maps Placeholder</h1>
        </Card>
      </Link>
    ),
  },
];



function RouteComponent() {
  return (
    <Flipper flipKey={gridItems.map(item => item.key).join('-')}>
      <div className="grid-container">
        {gridItems.map(item => (
          <div key={item.key} className={item.className}>
            <Flipped flipId={item.flipId}>
              <div>
                {item.content ? (
                  <>
                    {item.content}
                  </>
                ) : (
                  <div className={item.className}>
                    <div className="grid-title">
                      <div className="grid-title-text w1">{item.title}</div>
                    </div>
                  </div>
                )}
              </div>
            </Flipped>
          </div>
        ))}
      </div>
    </Flipper>
  );
}
