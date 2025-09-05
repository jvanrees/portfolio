import { Overlay, Paper, Text } from "@mantine/core";
import { Link } from "@tanstack/react-router";
import { useState } from "react";
import classes from '../styles/Grid.module.css';

interface HomeGridTileProps {
  imageSrc: string;
  title: string;
  link: string;
  className?: string;
}

const HomeGridTile = ({ imageSrc, title, link, className }: HomeGridTileProps) => {
  const [hovered, setHovered] = useState(false);

  return (
    <Link to={link}>
      <Paper
        className={`${classes.gridChild} ${classes.gridTileWrapper} ${className ? className : ''}`}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* The div below is used to display the background image.
        It is not the background of the Paper component for the neat hover zoom in effect */}
        <div
          className={classes.gridTileImage}
          style={{
            backgroundImage: `url(${imageSrc})`,
          }}
        />
        {hovered && (
          <Overlay backgroundOpacity={0.6} color="black" blur={1} className={classes.gridTileOverlay}>
            <Text className={classes.gridTileText}>
              {title}
            </Text>
          </Overlay>
        )}
      </Paper>
    </Link>
  );
};

export default HomeGridTile;