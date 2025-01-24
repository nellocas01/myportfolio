import React from "react";
import { createContext, useCallback, useContext, useState } from "react";
import Loading from "../components/Loading";
import Error from "../components/Error";

// creazione contesto
const AppContext = createContext();

// custom hook per utilizzare il context
export const useAppContext = () => useContext(AppContext);

export const DEFAULT_MESSAGE = "Operazione in corso";

// componente Provider
export const AppProvider = ({ children }) => {
  // stato che gestisce gli errori
  const [error, setError] = useState({
    isError: false,
    errMsg: "",
  });
  // stato che gestisce i messaggi di errore
  const [message, setMessage] = useState(DEFAULT_MESSAGE);
  // stato che gestisce il caricamento
  const [loading, setLoading] = useState(false);
  // funzione che gestisce il caricamento dei componenti settando messaggi e loading
  const setIsLoading = useCallback(
    (status, msg) => {
      setLoading(status);
      setMessage(msg?.length ? msg : DEFAULT_MESSAGE);
    },
    [setLoading]
  );

  return (
    <AppContext.Provider
      value={{
        error,
        setError,
        message,
        setMessage,
        loading,
        setLoading,
        setIsLoading,
      }}
    >
      <>
        <Loading open={loading} loading={message}>
          {message}
        </Loading>
        <Error error={error} />
        {children}
      </>
    </AppContext.Provider>
  );
};
