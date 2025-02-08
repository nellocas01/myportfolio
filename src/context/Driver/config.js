import { createContext, useContext, useState, useEffect } from "react";
import { driver } from "driver.js";
import "driver.js/dist/driver.css";
import { useThemeContext } from "../theme";

const DriverContext = createContext();

export const DriverProvider = ({ children }) => {
  const { isMobile, isTablet } = useThemeContext();

  const [driverInstance, setDriverInstance] = useState(null);

  // Passi del tour con personalizzazione
  const steps = [
    {
      element: "#name",
      popover: {
        description: "Ciao, mi chiamo ",
      },
    },
    {
      element: "#sections",
      popover: { description: "Le sezioni del portfolio" },
    },
    {
      element: "#theme",
      popover: {
        description: "Scegli il tema",
      },
    },
    {
      element: "#language",
      popover: {
        description: "Imposta la lingua",
      },
    },
    // {
    //   element: "#drawer",
    //   popover: {
    //     description: "Visualizza la navbar",
    //   },
    // },
  ];

  // // Filtro i passi per escludere alcuni quando è mobile
  // const filteredSteps = isMobile
  //   ? steps.filter(
  //       (step) =>
  //         step.element !== "#sections" &&
  //         step.element !== "#theme" &&
  //         step.element !== "#language"
  //     )
  //   : steps.filter((step) => step.element !== "#drawer");

  // Inizializzazione del driver
  const initializeDriver = () => {
    const newDriver = driver({
      animate: true,
      overlayColor: "rgba(40, 8, 146, 0.7)", // Colore dello sfondo sovrapposto
      highlightColor: "#FF5733", // Colore del bordo evidenziato dell'elemento selezionato
      allowClose: true, // Permetti la chiusura manuale del tour
      showProgress: true, // Mostra il progresso
      progressText: "Passo {{current}} di {{total}}", // Testo per il progresso
      stagePadding: 10, // Padding per ogni step
      steps: steps, // Usa i passi filtrati
    });
    setDriverInstance(newDriver);
    return newDriver;
  };

  useEffect(() => {
    // Inizializza l'istanza di Driver.js quando il contesto viene montato
    initializeDriver();
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
    <DriverContext.Provider value={{ startTour }}>
      {children}
    </DriverContext.Provider>
  );
};

export { DriverContext };
