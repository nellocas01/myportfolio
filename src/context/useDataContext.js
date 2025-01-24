import { useAppContext } from "./AppContext";
import { createContext, useContext } from "react";

// creazione contesto
const DataContext = createContext();

// customhook per utilizzare il contesto
export const useDataContext = () => useContext(DataContext);

// componente DataProvider
export const DataProvider = ({ children }) => {
  const { setIsLoading, setError } = useAppContext();

  return (
    <DataContext.Provider
      value={
        {
          // qui andranno i dati/valori da tenere a disposizione
          // a livello globale
        }
      }
    >
      {children}
    </DataContext.Provider>
  );
};
