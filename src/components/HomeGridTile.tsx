import { Overlay, Paper, Text } from "@mantine/core";
import { Link } from "@tanstack/react-router";
import { useState } from "react";
import styles from '../styles/Grid.module.css';

interface HomeGridTileProps {
  imageSrc: string;
  title: string;
  link: string;
}

const HomeGridTile = ({ imageSrc, title, link }: HomeGridTileProps) => {
  const [hovered, setHovered] = useState(false);
  const imageClassName = link?.includes('rma-android') ? `${styles.gridTileImage} ${styles.spanCenterpiece}` : `${styles.gridTileImage}`
  console.log(`${link}`.includes('rma-android'))
  console.log('link:', link);
  console.log('imageClassName:', imageClassName);
  return (
    <Link to={link}>
      <Paper
        className={`${styles.gridChild} ${styles.gridTileWrapper} }`}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* The div below is used to display the background image.
        It is not the background of the Paper component for the neat hover zoom in effect */}
        <div
          className={imageClassName}
          style={{
            backgroundImage: `url(${imageSrc})`,
          }}
        />
        {hovered && (
          <Overlay backgroundOpacity={0.6} color="black" blur={1} className={styles.gridTileOverlay}>
            <Text className={styles.gridTileText}>
              {title}
            </Text>
          </Overlay>
        )}
      </Paper>
    </Link>
  );
};

export default HomeGridTile;