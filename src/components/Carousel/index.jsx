import React, { useState } from "react";
import { Box, IconButton, Stack, Slide } from "@mui/material";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import CardComponent from "./card";
import { useThemeContext } from "../../context/theme";
import { useTranslation } from "react-i18next";
// Import delle immagini
import certificate1 from "../../assets/certificate1.png";
import certificate2 from "../../assets/certificate2.png";
import certificate3 from "../../assets/certificate3.png";
import certificate4 from "../../assets/certificate4.png";
import certificate5 from "../../assets/certificate5.png";
import certificate6 from "../../assets/certificate6.png";
import certificate7 from "../../assets/certificate7.png";
import certificate8 from "../../assets/certificate8.png";
import certificate9 from "../../assets/certificate9.png";
import certificate10 from "../../assets/certificate10.png";
import certificate from "../../assets/certificate.png";

// mappa delle immagini locali
const imageMap = {
  img1: certificate1,
  img2: certificate2,
  img3: certificate3,
  img4: certificate4,
  img5: certificate5,
  img6: certificate6,
  img7: certificate7,
  img8: certificate8,
  img9: certificate9,
  img10: certificate10,
  img11: certificate,
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
  const { isMobile } = useThemeContext();
  const { t } = useTranslation();
  // Stato per la pagina attuale
  const [currentPage, setCurrentPage] = useState(0);
  const [slideDirection, setSlideDirection] = useState("left");
  // Dati dinamici per le card
  const cardData = t("skills.array", { returnObjects: true });

  // Numero di card visibili per pagina
  const cardsPerPage = isMobile ? 1 : 2;
  const totalPages = Math.ceil(cardData.length / cardsPerPage);

  // Funzioni per navigazione
  const handleNextPage = () => {
    if (currentPage < totalPages - 1) {
      setSlideDirection("left");
      setCurrentPage((prev) => prev + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 0) {
      setSlideDirection("right");
      setCurrentPage((prev) => prev - 1);
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "40px",
      }}
    >
      {/* Bottone sinistro */}
      <IconButton
        onClick={handlePrevPage}
        sx={{ margin: 2 }}
        disabled={currentPage === 0}
      >
        <NavigateBeforeIcon />
      </IconButton>

      {/* Contenitore principale del carosello */}
      <Box sx={{ width: `${cardsPerPage * 250}px`, overflow: "hidden" }}>
        <Slide direction={slideDirection} in={true} timeout={500}>
          <Stack
            direction="row"
            spacing={2}
            sx={{
              width: `${totalPages * 100}%`,
              display: "flex",
              transform: `translateX(-${currentPage * (100 / totalPages)}%)`,
              transition: "transform 0.5s ease-in-out",
            }}
          >
            {/* **Mappiamo solo le card visibili nella pagina corrente** */}
            {cardData
              .slice(
                currentPage * cardsPerPage,
                currentPage * cardsPerPage + cardsPerPage
              )
              .map((card, index) => (
                <Box key={index} sx={{ width: `${100 / cardsPerPage}%` }}>
                  <CardComponent
                    image={getImageUrl(card.image)}
                    title={card.title}
                    description={card.description}
                    buttonText={card.buttonText}
                  />
                </Box>
              ))}
          </Stack>
        </Slide>
      </Box>

      {/* Bottone destro */}
      <IconButton
        onClick={handleNextPage}
        sx={{ margin: 2 }}
        disabled={currentPage >= totalPages - 1}
      >
        <NavigateNextIcon />
      </IconButton>
    </Box>
  );
};
