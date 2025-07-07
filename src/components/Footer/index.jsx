import React, { useRef, useState } from "react";
import {
  Box,
  Container,
  Typography,
  IconButton,
  TextField,
  Button,
  useTheme,
  Grid2,
  Alert,
  Modal,
} from "@mui/material";
import { GitHub, LinkedIn } from "@mui/icons-material";
import emailjs from "@emailjs/browser";
import { useAppContext } from "../../context/AppContext";
import { NavbarData } from "../../mockup";
import ColoredText from "../Text/index";
import { useThemeContext } from "../../context/theme";

const Footer = () => {
  const { setIsLoading, setError, loading } = useAppContext();
  const theme = useTheme();
  const formRef = useRef();
  const { isMobile, isDarkMode } = useThemeContext();
  const [status, setStatus] = useState(null);
  const [open, setOpen] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();

    try {
      setIsLoading(true, "Invio email in corso...");

      await emailjs.sendForm(
        "service_g9fvvbm",
        "template_hm7jnzq",
        formRef.current,
        "hcUktQriLr6rx6b2t"
      );

      setStatus("success");
      formRef.current.reset();
    } catch (error) {
      console.error("Errore invio email:", error);
      setStatus("error");
      setError(error);
    } finally {
      setIsLoading(false, "");
      setStatus(null);
    }
  };

  return (
    <>
      <Box
        component="footer"
        sx={{
          backgroundColor: "transparent",
          color: theme.palette.text.primary,
          py: 6,
        }}
      >
        <Container maxWidth="lg" id="contacts">
          <ColoredText
            variant={isMobile ? "h5" : "h4"}
            text={"Contatti"}
            colors={isDarkMode ? NavbarData.colors : NavbarData.colorsLight}
            style={{
              marginBottom: 5,
              justifyContent: isMobile ? "center" : "start",
            }}
          />
          <Grid2 container spacing={4}>
            {/* SOCIAL */}
            <Grid2 size={{ xs: 12, md: 6 }}>
              <Typography variant="h6" gutterBottom>
                Canali social
              </Typography>
              <Box>
                <IconButton
                  href="https://github.com/nellocas01"
                  target="_blank"
                  rel="noopener"
                  sx={{ color: theme.palette.text.primary }}
                >
                  <GitHub />
                </IconButton>
                <IconButton
                  href="https://www.linkedin.com/in/casolla-aniello/"
                  target="_blank"
                  rel="noopener"
                  sx={{ color: theme.palette.text.primary }}
                >
                  <LinkedIn />
                </IconButton>
              </Box>
            </Grid2>

            {/* CONTATTO */}
            <Grid2 size={{ xs: 12, md: 6 }}>
              <Typography variant="h6" gutterBottom>
                Scrivimi una email
              </Typography>
              <form ref={formRef} onSubmit={sendEmail}>
                <TextField
                  name="user_name"
                  fullWidth
                  label="Nome"
                  variant="outlined"
                  margin="dense"
                  sx={{ backgroundColor: "transparent" }}
                  required
                />
                <TextField
                  name="user_email"
                  fullWidth
                  label="Email"
                  variant="outlined"
                  margin="dense"
                  type="email"
                  sx={{ backgroundColor: "transparent" }}
                  required
                />
                <TextField
                  name="message"
                  fullWidth
                  label="Messaggio"
                  variant="outlined"
                  margin="dense"
                  multiline
                  rows={4}
                  sx={{ backgroundColor: "transparent" }}
                  required
                />

                <Button
                  type="submit"
                  variant="contained"
                  sx={{ mt: 2 }}
                  disabled={loading}
                >
                  {loading ? "Invio in corso..." : "Invia"}
                </Button>
              </form>
              {status === "success" && (
                <Alert severity="success" sx={{ mt: 2 }}>
                  Messaggio inviato con successo!
                </Alert>
              )}
              {status === "error" && (
                <Alert severity="error" sx={{ mt: 2 }}>
                  Errore durante l'invio. Riprova più tardi.
                </Alert>
              )}
            </Grid2>
          </Grid2>

          {/* BOTTOM */}
          <Box mt={5} textAlign="center">
            <Typography variant="body2" color="text.secondary">
              © 2025 Casolla Aniello. Tutti i diritti riservati. —
            </Typography>
            <Button onClick={() => setOpen(true)}>Privacy Policy</Button>
          </Box>
        </Container>
      </Box>
      <Modal open={open} onClose={() => setOpen(false)}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 350,
            bgcolor: "background.paper",
            border: "2px solid #000",
            boxShadow: 24,
            p: 2,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              overflowY: "auto",
              maxHeight: "70vh",
            }}
          >
            Privacy Policy Ultimo aggiornamento: [07 Luglio 2025] Questo sito
            web è gestito da [Aniello Casolla]. Il sito ha lo scopo di
            presentare i miei progetti professionali e offrire un modo per
            contattarmi. Il titolare del trattamento dei dati è: [Casolla
            Aniello] Dati raccolti Tramite il modulo di contatto, vengono
            raccolti i seguenti dati: - Nome (campo obbligatorio) - Indirizzo
            email (campo obbligatorio) - Messaggio (campo libero) I dati vengono
            inviati direttamente alla mia casella di posta elettronica e non
            vengono salvati in alcun database. Finalità del trattamento I dati
            forniti vengono utilizzati esclusivamente per rispondere al tuo
            messaggio. Non verranno utilizzati per finalità di marketing né
            condivisi con terze parti. Base giuridica Il trattamento dei dati è
            basato sul consenso dell’utente, espresso tramite l’invio volontario
            del modulo. Conservazione dei dati I dati sono conservati
            all’interno della mia casella di posta elettronica per il tempo
            necessario a gestire la comunicazione. Cookie Questo sito non
            utilizza cookie di profilazione. Tuttavia, Vercel, il provider di
            hosting, potrebbe impostare cookie tecnici per motivi di sicurezza o
            prestazioni. Per maggiori informazioni, visita la [Privacy Policy di
            Vercel](https://vercel.com/legal/privacy-policy). Diritti
            dell’utente Hai il diritto di: - Accedere ai tuoi dati - Chiederne
            la rettifica o la cancellazione - Revocare il consenso - Opporsi al
            trattamento Modifiche Questa policy può essere aggiornata. La
            versione attuale è sempre disponibile su questa pagina.
          </div>
          <Button onClick={() => setOpen(false)}>Chiudi</Button>
        </Box>
      </Modal>
    </>
  );
};

export default Footer;
