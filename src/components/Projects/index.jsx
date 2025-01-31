import React from "react";
import { Box, Container } from "@mui/material";
import { useTranslation } from "react-i18next";
import ColoredText from "../Text/index";
import { NavbarData } from "../../mockup/index";
import Cards from "../Card/index";
import { useThemeContext } from "../../context/theme";

// Import manuale delle immagini
import soccerballicn from "../../assets/soccerball.png";
import soccerballbwicn from "../../assets/soccerballbw.png";
import linkedinIcn from "../../assets/linkedinicn.png";
import spotifyicn from "../../assets/spotifyicn.png";
import netflixicn from "../../assets/netflixicn.png";
import meteoicn from "../../assets/meteoicn.png";
import calcolatriceicn from "../../assets/calcolatriceicn.png";
import benchmarkicn from "../../assets/benchmarkicn.png";
import mediumicn from "../../assets/mediumicn.png";
import avataricn from "../../assets/AvatarMaker.png";

// Mappa delle immagini locali dei progetti
const imageMap = {
  img10: avataricn,
  img1: soccerballicn,
  img2: soccerballbwicn,
  img3: linkedinIcn,
  img4: spotifyicn,
  img5: netflixicn,
  img9: mediumicn,
  img6: meteoicn,
  img8: benchmarkicn,
  img7: calcolatriceicn,
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
  const { isMobile } = useThemeContext();
  const projects = t("projects.cards", { returnObjects: true });

  return (
    <Container sx={{ marginY: "5rem", padding: isMobile ? 0 : 1 }}>
      <ColoredText
        variant={isMobile ? "h5" : "h4"}
        text={t("projects.title")}
        colors={NavbarData.colors}
        style={{
          marginBottom: 1,
          justifyContent: isMobile ? "center" : "start",
        }}
      />
      <Box
        sx={{
          display: "grid",
          justifyContent: "center",
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
            repoUrl={project.repoUrl}
            dialog={project.dialog}
          />
        ))}
      </Box>
    </Container>
  );
};
