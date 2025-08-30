import React, { useRef } from "react";
import { Box, Container, Divider, IconButton } from "@mui/material";
import { useTranslation } from "react-i18next";
import ColoredText from "../Text/index";
import { NavbarData } from "../../mockup/index";
import Cards from "../Card/index";
import { useThemeContext } from "../../context/theme";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

// Import manuale delle immagini
import soccerballicn from "../../assets/capstonePageFE.jpg";
import soccerballbwicn from "../../assets/capstonePageBE.jpg";
import linkedinIcn from "../../assets/linkedinPage.jpg";
import spotifyicn from "../../assets/spotifyPage.jpg";
import netflixicn from "../../assets/netflixPage.jpg";
import meteoicn from "../../assets/meteoPage.png";
import calcolatriceicn from "../../assets/calculatorPage.png";
import benchmarkicn from "../../assets/benchmarkPage.png";
import mediumicn from "../../assets/mediumPage.png";
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
  const { isMobile, isDarkMode, isTablet } = useThemeContext();
  const projects = t("projects.cards", { returnObjects: true });
  // hook per controllare lo scroll manualmente
  const carouselRef = useRef(null);

  const GAP_PX = 16;
  const CARD_MAX = 320;
  const cardsToShow = isMobile ? 1 : isTablet ? 2 : 3;

  // funzione per gestire lo scroll al click sulle frecce
  const scrollByOne = (dir) => {
    if (!carouselRef.current) return;
    const item = carouselRef.current.querySelector("[data-card-item]");
    if (!item) return;
    const step = item.getBoundingClientRect().width + GAP_PX; // slot + gap
    carouselRef.current.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  const scrollLeft = () => scrollByOne(-1);
  const scrollRight = () => scrollByOne(1);

  return (
    <>
      <Container
        id="projects"
        sx={{ marginY: "5rem", padding: isMobile ? 0 : 1 }}
      >
        <ColoredText
          variant={isMobile ? "h5" : "h4"}
          text={t("projects.title")}
          colors={isDarkMode ? NavbarData.colors : NavbarData.colorsLight}
          style={{
            marginBottom: 1,
            justifyContent: isMobile ? "center" : "start",
          }}
        />
        {/* <Box
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
      </Box> */}

        {/* Contenitore del carosello */}
        <Box
          sx={{
            position: "relative",
            width: "100%",
            display: "flex",
            alignItems: "center",
            mt: 5,
            overflowX: isMobile ? "auto" : "visible",
            paddingX: isMobile ? 1 : 0,
            scrollSnapType: isMobile ? "x mandatory" : "none",
            WebkitOverflowScrolling: "touch", // per iOS
            "&::-webkit-scrollbar": {
              height: "6px",
            },
            "&::-webkit-scrollbar-thumb": {
              backgroundColor: "#ccc",
              borderRadius: "10px",
            },
          }}
        >
          {/* Pulsante Sinistra */}
          <IconButton
            onClick={scrollLeft}
            sx={{
              margin: 2,
              transition: "0.3s",
              "&:hover": { transform: "scale(1.2)", color: "primary.main" },
            }}
          >
            <NavigateBeforeIcon />
          </IconButton>

          {/* Scroller delle Cards */}
          <Box
            ref={carouselRef}
            sx={{
              display: "flex",
              gap: 2,
              overflowX: "hidden",
              width: "100%",
              scrollSnapType: "x mandatory",
              scrollBehavior: "smooth",
            }}
          >
            {projects.map((project, index) => (
              <Box
                key={index}
                data-card-item
                sx={{
                  // N slot esatti visibili, inclusi i gap
                  flex: `0 0 calc((100% - ${
                    (cardsToShow - 1) * GAP_PX
                  }px) / ${cardsToShow})`,
                  scrollSnapAlign: "start",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                {/* card centrata e limitata, lo slot resta largo quanto serve */}
                <Box sx={{ width: "100%", maxWidth: `${CARD_MAX}px` }}>
                  <Cards
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
                </Box>
              </Box>
            ))}
          </Box>

          {/* Pulsante Destra */}
          <IconButton
            onClick={scrollRight}
            sx={{
              margin: 2,
              transition: "0.3s",
              "&:hover": { transform: "scale(1.2)", color: "primary.main" },
            }}
          >
            <NavigateNextIcon />
          </IconButton>
        </Box>
      </Container>
      <Divider />
    </>
  );
};
