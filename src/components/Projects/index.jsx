import React from "react";
import { Box, Container } from "@mui/material";
import { useTranslation } from "react-i18next";
import ColoredText from "../Text/index";
import { NavbarData } from "../../mockup/index";
import Cards from "../Card/index";
// Import manuale delle immagini
import soccerballicn from "../../assets/soccerball.png";
import soccerballbwicn from "../../assets/soccerballbw.png";
import linkedinIcn from "../../assets/linkedinicn.png";
import spotifyicn from "../../assets/spotifyicn.png";

// Mappa delle immagini locali
const imageMap = {
  img1: soccerballicn,
  img2: soccerballbwicn,
  img3: linkedinIcn,
  img4: spotifyicn,
};

// Funzione per ottenere l'URL corretto
const getImageUrl = (image) => {
  if (image.startsWith("http")) {
    return image; // Se è un URL, lo restituisce direttamente
  }
  return imageMap[image] || ""; // Se è locale, cerca nella mappa
};

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  const { t } = useTranslation();
  const projects = t("projects.array", { returnObjects: true });

  return (
    <Container sx={{ marginY: 5 }}>
      <ColoredText
        variant={"h4"}
        text={t("projects.title")}
        colors={NavbarData.colors}
        style={{ justifyContent: "start", marginBottom: 1 }}
      />
      <Box
        sx={{
          display: "grid",
          marginY: 5,
          width: "100%",
          gap: 5,
          gridTemplateColumns:
            "repeat(auto-fill, minmax(min(300px, 100%), 300px))",
        }}
      >
        {projects.map((project, index) => (
          <Cards
            key={index}
            bgAvatarColor={project.bgAvatarColor}
            avatar={project.avatar}
            title={project.title}
            subheader={project.subheader}
            image={getImageUrl(project.image)}
            alt={project.alt}
            cardContent={project.cardContent}
            btn={project.btn}
          />
        ))}
      </Box>
    </Container>
  );
};
