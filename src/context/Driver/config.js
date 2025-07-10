import { createContext, useState, useEffect } from "react";
import { driver } from "driver.js";
import "driver.js/dist/driver.css";
import { useTranslation } from "react-i18next";

const DriverContext = createContext();

export const DriverProvider = ({ children }) => {
  const { t } = useTranslation();
  const [driverInstance, setDriverInstance] = useState(null);

  // step dinamici a seconda della lingua scelta
  const getSteps = () => [
    {
      element: "#language",
      popover: {
        description: t("tour.languageDescription"),
      },
    },
    {
      element: "#name",
      popover: {
        description: t("tour.nameDescription"),
      },
    },
    {
      element: "#sections",
      popover: {
        description: t("tour.sectionsDescription"),
      },
    },
    {
      element: "#theme",
      popover: {
        description: t("tour.themeDescription"),
      },
    },
  ];

  // Inizializzazione del driver
  const initializeDriver = () => {
    const newDriver = driver({
      animate: true,
      overlayColor: "rgba(40, 8, 146, 0.7)", // Colore dello sfondo sovrapposto
      highlightColor: "#FF5733", // Colore del bordo evidenziato dell'elemento selezionato
      allowClose: true, // Permetti la chiusura manuale del tour
      showProgress: true, // Mostra il progresso
      doneBtnText: t("tour.doneBtn"),
      nextBtnText: t("tour.nextBtn"),
      prevBtnText: t("tour.prevBtn"),
      progressText: t("tour.progressText"), // Testo per il progresso
      stagePadding: 10, // Padding per ogni step
      steps: getSteps(), // Usa i passi dinamici
    });
    setDriverInstance(newDriver);
    return newDriver;
  };

  useEffect(() => {
    // Inizializza l'istanza di Driver.js quando il contesto viene montato
    initializeDriver();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // L'array di dipendenze vuoto indica che l'effetto viene eseguito solo una volta

  // Funzione per avviare il tour
  const startTour = () => {
    if (!driverInstance) {
      console.log("🔍 Driver instance non ancora inizializzata.");
      return;
    }
    driverInstance.drive();
  };

  return (
    <DriverContext.Provider value={{ startTour, initializeDriver }}>
      {children}
    </DriverContext.Provider>
  );
};

export { DriverContext };
