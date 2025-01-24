import { useEffect, useState } from "react";
import "./App.css";
import { Box } from "@mui/material";
import Main from "../Main";
import Loading from "../Loading/index";

// eslint-disable-next-line import/no-anonymous-default-export
export default ({ configuration }) => {
  // stato che gestisce l'inizializzazione dell'app
  const [initialized, setInitialized] = useState(false);

  // avvia l'inizializzazione dell'app, passando la configurazione iniziale
  const startInitialize = async (configuration) => {
    // inizializzazione configurazione
    // await initializeApi(configuration);
    setInitialized(true);
  };

  // effetto che avvia l'inizializzazione
  useEffect(() => {
    if (!initialized) startInitialize(configuration);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initialized]);

  if (!initialized)
    return <Loading open={true} loading="Inizializzazione in corso..." />;
  // return (
  //   <Error
  //     error={{
  //       isError: true,
  //       errMsg: "Inizializzazione fallita",
  //     }}
  //   />
  // );

  return (
    <Box className="app_cnt">
      <Main />
    </Box>
  );
};
