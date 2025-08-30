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
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { setIsLoading, setError, loading } = useAppContext();
  const theme = useTheme();
  const formRef = useRef();
  const { isMobile, isDarkMode } = useThemeContext();
  const { t } = useTranslation();
  const footer = t("footer", { returnObjects: true });
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
            text={t("footer.text")}
            colors={isDarkMode ? NavbarData.colors : NavbarData.colorsLight}
            style={{
              marginBottom: 5,
              justifyContent: isMobile ? "center" : "start",
            }}
          />
          <Grid2 container spacing={4}>
            {/* SOCIAL */}
            <Grid2 size={{ xs: 12, md: 6 }}>
              {/* <Typography variant="h6" gutterBottom>
                {footer.title}
              </Typography> */}
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
                {footer.email}
              </Typography>
              <form ref={formRef} onSubmit={sendEmail}>
                <TextField
                  name="user_name"
                  fullWidth
                  label={footer.lblname}
                  variant="outlined"
                  margin="dense"
                  sx={{ backgroundColor: "transparent" }}
                  required
                />
                <TextField
                  name="user_email"
                  fullWidth
                  label={footer.lblemail}
                  variant="outlined"
                  margin="dense"
                  type="email"
                  sx={{ backgroundColor: "transparent" }}
                  required
                />
                <TextField
                  name="message"
                  fullWidth
                  label={footer.lblmsg}
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
                  {loading ? `${footer.btn}` : `${footer.btn2}`}
                </Button>
              </form>
              {status === "success" && (
                <Alert severity="success" sx={{ mt: 2 }}>
                  {footer.success}
                </Alert>
              )}
              {status === "error" && (
                <Alert severity="error" sx={{ mt: 2 }}>
                  {footer.error}
                </Alert>
              )}
            </Grid2>
          </Grid2>

          {/* BOTTOM */}
          <Box mt={5} textAlign="center">
            <Typography variant="body2" color="text.secondary">
              {footer.bottom}
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
            {footer.privacyPolicy}
          </div>
          <Button onClick={() => setOpen(false)}> {footer.btn3}</Button>
        </Box>
      </Modal>
    </>
  );
};

export default Footer;
