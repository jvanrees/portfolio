import { Overlay, Paper, Text } from "@mantine/core";
import { Link } from "@tanstack/react-router";
import React, { forwardRef, useState } from 'react';
import styles from '../styles/Grid.module.css';

interface HomeGridTileProps extends React.HTMLAttributes<HTMLDivElement> {
  imageSrc: string;
  title: string;
  link: string;
  transitionName?: string;
}

const HomeGridTile = forwardRef<HTMLDivElement, HomeGridTileProps>(({ imageSrc, title, link, className, style, transitionName, ...rest }, ref) => {
  const [hovered, setHovered] = useState(false);
  const imageClassName = link?.includes('rma-android') ? `${styles.gridTileImage} ${styles.spanCenterpiece}` : `${styles.gridTileImage}`

  return (
    <Link to={link}>
      <Paper
        ref={ref}
        className={`${styles.gridChild} ${styles.gridTileWrapper} ${className ?? ''}`}
        style={{ ...style, viewTransitionName: transitionName }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        {...rest}
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
});

export default HomeGridTile;