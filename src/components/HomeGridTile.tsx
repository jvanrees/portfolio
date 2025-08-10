import { Box, Image, Overlay, Paper, Text } from "@mantine/core";
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
  const radius = "xs";

  return (
    <Link to={link}>
      <Box
        className={`${classes.gridChild} ${classes.gridTileWrapper} ${className ? className : ''}`}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <Paper radius={radius} withBorder className={classes.gridTilePaper}>
          <Image
            src={imageSrc}
            alt={title}
            radius={radius}
            className={classes.gridTileImage}
          />
        </Paper>
        {hovered && (
          <Overlay backgroundOpacity={0.6} color="black" blur={1} className={classes.gridTileOverlay}>
            <Text className={classes.gridTileText}            >
              {title}
            </Text>
          </Overlay>
        )}
      </Box>
    </Link>
  );
};

export default HomeGridTile;