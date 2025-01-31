import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";
import { useThemeContext } from "../context/theme";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  const { isTablet } = useThemeContext();
  const { t } = useTranslation();

  // Stato per la pagina attuale
  const [currentPage, setCurrentPage] = useState(0);
  const [slideDirection, setSlideDirection] = useState("left");
  // Per fermare l'auto-scroll
  const [isPaused, setIsPaused] = useState(false);
  // Barra di progresso
  const [progress, setProgress] = useState(0);

  // Dati dinamici per le card
  const cardData = t("skills.array", { returnObjects: true });

  // Numero di card visibili per pagina
  const cardsPerPage = isTablet ? 1 : 2;
  const totalPages = Math.ceil(cardData.length / cardsPerPage);

  const autoScrollTime = 4000; // 4 secondi

  // Scorrimento automatico
  useEffect(() => {
    if (isPaused) return; // Blocca lo scorrimento se l'utente interagisce

    const interval = setInterval(() => {
      setSlideDirection("left");
      setCurrentPage((prev) => (prev + 1) % totalPages);
      setProgress(0); // Reset barra di progresso
    }, autoScrollTime);

    return () => clearInterval(interval);
  }, [totalPages, isPaused]);

  // Barra di progresso per indicare il prossimo scorrimento
  useEffect(() => {
    if (isPaused) return;

    let startTime = Date.now();
    const updateProgress = () => {
      const elapsed = Date.now() - startTime;
      setProgress((elapsed / autoScrollTime) * 100);
      if (elapsed < autoScrollTime) {
        requestAnimationFrame(updateProgress);
      }
    };
    updateProgress();
  }, [currentPage, isPaused]);

  // Funzioni per navigazione manuale
  const handleNextPage = () => {
    setIsPaused(true);
    setSlideDirection("left");
    setCurrentPage((prev) => (prev + 1) % totalPages);
    setProgress(0);
  };

  // Funzioni per navigazione manuale
  const handlePrevPage = () => {
    setIsPaused(true);
    setSlideDirection("right");
    setCurrentPage((prev) => (prev > 0 ? prev - 1 : totalPages - 1));
    setProgress(0);
  };

  return {
    handlePrevPage,
    cardsPerPage,
    progress,
    slideDirection,
    totalPages,
    currentPage,
    cardData,
    setIsPaused,
    handleNextPage,
  };
};
