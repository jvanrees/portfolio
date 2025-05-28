import { Box, Image, Overlay, Text } from "@mantine/core";
import { Link } from "@tanstack/react-router";
import { useState } from "react";

interface HomeGridTileProps {
  imageSrc: string;
  title: string;
  link: string;
}

const HomeGridTile = ({ imageSrc, title, link }: HomeGridTileProps) => {
  const [hovered, setHovered] = useState(false);

  return (
    <Link to={link}>
      <Box
        style={{ position: "relative", display: "inline-block", width: "300px", height: "200px" }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <Image src={imageSrc} alt={title} radius="lg" style={{ width: "100%", height: "100%" }} />

        {hovered && (
          <>
            <Overlay
              backgroundOpacity={0.6}
              color="black"
              blur={1}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
              }}
            >
              <Text
                c="#fff"
                size="2rem"
                fw={500}
                ta={"center"}
                ff={"Lato"}
                lts={"0.2em"}
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  textShadow: "0 3 3px hsl(210, 35%, 7%)",
                  zIndex: 201
                }}
              >
                {title}
              </Text>
            </Overlay>
          </>
        )}
      </Box>
    </Link >
  );
};

export default HomeGridTile;