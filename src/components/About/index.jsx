import React from "react";
import {
  Typography,
  Box,
  Avatar,
  Container,
  Button,
  Divider,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import ColoredText from "../Text/index";
import { NavbarData } from "../../mockup/index";
import avt from "../../assets/AvatarMaker.png";
import "./style.css";

const About = () => {
  const { t } = useTranslation();

  const onButtonClick = () => {
    const pdfUrl = "/assets/Casolla-Aniello-CV.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "Casolla-Aniello-CV.pdf"; // specify the filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <Container sx={{ marginTop: "8rem", display: "flex" }}>
        <Box sx={{ marginRight: "7rem" }}>
          <ColoredText
            className="text-flicker-in-glow"
            variant={"h3"}
            text="Frontend_Developer"
            colors={NavbarData.colors}
          />
          <Typography variant="body1" sx={{ marginTop: "1rem" }}>
            {t("about.text")}
          </Typography>
          <Button onClick={onButtonClick}>{t("cv")}</Button>
        </Box>
        <Box>
          <Avatar
            alt="Il mio avatar"
            src={avt}
            sx={{ width: 200, height: 200 }}
          />
        </Box>
      </Container>
      <Divider />
    </>
  );
};

export default About;
