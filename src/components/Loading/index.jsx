import { Box, Modal } from "@mui/material";

/**
 * #### <font color="cornflowerblue">Componente che gestisce il loading con un apposito stile e messaggio passandolo come prop</font>
 *
 * @component
 * @class PRELOADER
 * @version 0.0.1
 * @author Nello
 * @param props - Le proprietà del componente.
 * @param props.open - Booleano che gestisce l'apertura e chiusura del modale.
 * @param props.loading - Stringa contenente il messaggio di attesa.
 *
 * @example
 * // Esempio di utilizzo del componente PRELOADER
 * <PRELOADER open={true} loading="Caricamento in corso..." />
 *
 * @returns ### <font color="forestgreen">Un contenitore stilizzato col messaggio all'interno di un modale</font>
 */

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "1px solid #000",
  boxShadow: 24,
  p: 2,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default ({ open, loading, sx = {} }) => {
  return (
    <>
      <Modal open={open} data-testid="loading-component">
        <Box sx={{ ...style, ...sx }}>{loading}</Box>
      </Modal>
    </>
  );
};
