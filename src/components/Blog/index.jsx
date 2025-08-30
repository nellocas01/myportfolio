import React, { useRef } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  Typography,
  IconButton,
} from "@mui/material";
import ColoredText from "../Text/index";
import { NavbarData } from "../../mockup";
import { useTranslation } from "react-i18next";
import { useThemeContext } from "../../context/theme";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

import imgTest from "../../assets/testingImg.jpg";
import imgDoc from "../../assets/documentImg.png";
import imgTS from "../../assets/typescriptImg.jpg";
import imgStonksball from "../../assets/capstonePageFE.jpg";

// Mappa delle immagini locali degli articoli
const imageMap = {
  imgStonksball: imgStonksball,
  imgTest: imgTest,
  imgDoc: imgDoc,
  imgTS: imgTS,
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
  const { isMobile, isTablet, isDarkMode } = useThemeContext();
  const blogs = t("blogs", { returnObjects: true });

  // hook per lo scroll manuale
  const carouselRef = useRef(null);

  const GAP_PX = 16;
  const cardsToShow = isMobile ? 1 : isTablet ? 2 : 3;
  const CARD_MAX = 320;
  const CARD_MIN = 260;

  const scroll = (direction) => {
    if (!carouselRef.current) return;
    const slot = carouselRef.current.querySelector("[data-slot]");
    if (!slot) return;
    const step = slot.getBoundingClientRect().width + GAP_PX;
    carouselRef.current.scrollBy({
      left: direction === "left" ? -step : step,
      behavior: "smooth",
    });
  };

  return (
    <>
      <Container id="blog" sx={{ marginY: "5rem", padding: isMobile ? 0 : 1 }}>
        <ColoredText
          variant={isMobile ? "h5" : "h4"}
          text={t("blogs.title")}
          colors={isDarkMode ? NavbarData.colors : NavbarData.colorsLight}
          style={{
            marginBottom: 1,
            justifyContent: isMobile ? "center" : "end",
          }}
        />

        <Box
          sx={{
            position: "relative",
            width: "100%",
            display: "flex",
            alignItems: "center",
            mt: 3,
          }}
        >
          {/* Pulsante sinistra */}
          <IconButton
            onClick={() => scroll("left")}
            sx={{
              margin: 1,
              transition: "0.3s",
              "&:hover": { transform: "scale(1.2)", color: "primary.main" },
            }}
          >
            <NavigateBeforeIcon />
          </IconButton>

          {/* Contenitore carosello */}
          <Box
            ref={carouselRef}
            sx={{
              display: "flex",
              gap: 2,
              overflowX: "hidden",
              width: "100%",
              scrollBehavior: "smooth",
            }}
          >
            {blogs.cards.map((blog, index) => (
              <Box
                key={index}
                data-slot
                sx={{
                  flex: `0 0 calc((100% - ${
                    (cardsToShow - 1) * GAP_PX
                  }px) / ${cardsToShow})`,
                  display: "flex",
                  justifyContent: "center",
                  scrollSnapAlign: "start",
                }}
              >
                <Card
                  sx={{
                    width: "100%",
                    maxWidth: `${CARD_MAX}px`,
                    minWidth: `${CARD_MIN}px`,
                    backgroundColor: "transparent",
                  }}
                >
                  <CardContent>
                    <Typography variant="subtitle1">{blog.title}</Typography>
                    <Typography
                      variant="subtitle2"
                      component="div"
                      sx={{ color: "text.secondary" }}
                    >
                      {blog.subheader}
                    </Typography>
                  </CardContent>
                  <CardMedia
                    component="img"
                    image={getImageUrl(blog.image)}
                    alt={blog.alt}
                    className="image"
                    sx={{ width: "100%", height: "50%" }}
                  />
                  <Button
                    href={blog.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {blog.btn}
                  </Button>
                </Card>
              </Box>
            ))}
          </Box>

          {/* Pulsante destra */}
          <IconButton
            onClick={() => scroll("right")}
            sx={{
              margin: 1,
              transition: "0.3s",
              "&:hover": { transform: "scale(1.2)", color: "primary.main" },
            }}
          >
            <NavigateNextIcon />
          </IconButton>
        </Box>
      </Container>
    </>
  );
};
