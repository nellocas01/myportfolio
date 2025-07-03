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
  const { isMobile } = useThemeContext();
  const [status, setStatus] = useState(null);

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
          colors={NavbarData.colors}
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
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
