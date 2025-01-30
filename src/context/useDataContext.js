import { createContext, useContext } from "react";
import useCarousel from "../customhooks/index";

// creazione contesto
const DataContext = createContext();

// customhook per utilizzare il contesto
export const useDataContext = () => useContext(DataContext);

// componente DataProvider
export const DataProvider = ({ children }) => {
  //const { setIsLoading, setError } = useAppContext();

  const {
    handlePrevPage,
    cardsPerPage,
    progress,
    slideDirection,
    totalPages,
    currentPage,
    cardData,
    setIsPaused,
    handleNextPage,
  } = useCarousel();

  return (
    <DataContext.Provider
      value={{
        // ============ carousel ============
        handlePrevPage,
        cardsPerPage,
        progress,
        slideDirection,
        totalPages,
        currentPage,
        cardData,
        setIsPaused,
        handleNextPage,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
