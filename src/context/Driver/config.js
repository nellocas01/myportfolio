import { createContext, useContext, useState, useEffect } from "react";
import { driver } from "driver.js"; // ✅ Import corretto
import "driver.js/dist/driver.css";

const DriverContext = createContext();

export const DriverProvider = ({ children }) => {
  const [driverInstance, setDriverInstance] = useState(null);

  // Passi del tour con personalizzazione
  const steps = [
    {
      element: "#navbar",
      popover: {
        title: "Navigazione",
        description: "Qui puoi esplorare il portfolio.",
      },
    },
    {
      element: "#name",
      popover: {
        title: "Nome: ",
        description: "Ciao, il mio nome è",
      },
    },
    {
      element: "#sections",
      popover: { title: "Sezioni", description: "Le zezioni del portfolio" },
    },
    {
      element: "#theme",
      popover: {
        title: "Tema: ",
        description: "Scegli il tema",
      },
    },
    {
      element: "#language",
      popover: {
        title: "Lingua: ",
        description: "Imposta la lingua",
      },
    },
  ];

  // Inizializzazione del driver
  const initializeDriver = () => {
    const newDriver = driver({
      animate: true,
      overlayColor: "rgba(168, 12, 12, 0.7)", // Colore dello sfondo sovrapposto
      highlightColor: "#FF5733", // Colore del bordo evidenziato dell'elemento selezionato
      allowClose: true, // Permetti la chiusura manuale del tour
      showProgress: true, // Mostra il progresso
      progressText: "Passo {{current}} di {{total}}", // Testo per il progresso
      stagePadding: 10, // Padding per ogni step
      steps: steps,
    });
    setDriverInstance(newDriver);
    return newDriver;
  };

  useEffect(() => {
    // Inizializza l'istanza di Driver.js quando il contesto viene montato
    initializeDriver();
  }, []);

  // Funzione per avviare il tour
  const startTour = () => {
    if (!driverInstance) {
      console.log("🔍 Driver instance non ancora inizializzata.");
      return;
    }
    driverInstance.drive();
  };

  // Avvia automaticamente il tour quando la navbar viene montata
  useEffect(() => {
    startTour();
  }, [startTour]); // Assicurati che la funzione `startTour` venga passata come dipendenza

  return (
    <DriverContext.Provider value={{ startTour }}>
      {children}
    </DriverContext.Provider>
  );
};

export { DriverContext };
