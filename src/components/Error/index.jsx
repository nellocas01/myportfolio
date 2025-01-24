import { useEffect } from "react";
import { Alert, AlertTitle, Snackbar } from "@mui/material";
import { useAppContext } from "../../context/AppContext";

/**
 * #### <font color="cornflowerblue">Componente che si occupa della visualizzazione degli errori dell'app</font>
 *
 * @component
 * @class ERROR
 * @version 0.0.1
 * @author Nello
 * @description
 * Questo componente visualizza uno snackbar con un messaggio di errore.
 * È utile per mostrare notifiche di errore agli utenti in modo visibile e intuitivo.
 *
 * @param props - Le proprietà del componente.
 * @param props.error - Il messaggio di errore da visualizzare. Se è una stringa vuota o null, lo snackbar non viene visualizzato.
 *
 * @example
 * // Esempio di utilizzo del componente ERROR
 * <ERROR error="Si è verificato un errore durante il caricamento dei dati." />
 *
 * @returns ### <font color="forestgreen">Un snackbar visualizzabile solo in caso di errore, contente un alert col messaggio di errore specifico</font>
 */

// eslint-disable-next-line import/no-anonymous-default-export
export default ({ error }) => {
  const { setError } = useAppContext();

  // se c'è un errore crea un timer di 2 secondi
  // dopo i quali resetta l'errore a stringa vuota
  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => {
        // setError("");
        setError({
          isError: false,
          errMsg: "",
        });
      }, 2000);
      return () => clearTimeout(timer);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const errorMessage =
    typeof error.errMsg === "string"
      ? error.errMsg
      : error.errMsg || String(error.errMsg);

  // const errorMessage =
  //   typeof error === "string" ? error : error?.message || String(error);

  const handleClose = () => {
    setError({
      isError: false,
      errMsg: "",
    });
  };

  return (
    <Snackbar
      // open={Boolean(error)}
      open={error.isError}
      onClick={handleClose}
      data-testid="error-component"
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "center",
      }}
    >
      <Alert severity="error" variant="filled" sx={{ width: "100%" }}>
        <AlertTitle>ATTENZIONE</AlertTitle>
        {errorMessage}
      </Alert>
    </Snackbar>
  );
};
