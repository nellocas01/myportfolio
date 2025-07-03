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
import { useThemeContext } from "../../context/theme";

const About = () => {
  const { t } = useTranslation();
  const { isMobile } = useThemeContext();

  const onButtonClick = () => {
    const link = document.createElement("a");
    link.href = "/CasollaAnielloCV.pdf";
    link.download = "CasollaAnielloCV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <Container
        id="about"
        sx={{
          marginTop: "8rem",
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          alignItems: "center",
          gap: 2,
        }}
      >
        <Box sx={{ marginRight: isMobile ? 0 : 7 }}>
          <ColoredText
            className="text-flicker-in-glow"
            variant={isMobile ? "h5" : "h3"}
            text="Frontend_Developer"
            colors={NavbarData.colors}
            style={{ justifyContent: isMobile ? "center" : "start" }}
          />
          <Typography variant="body1" sx={{ marginY: "1rem" }}>
            {t("about.text")}
          </Typography>
          <Button
            href="/CasollaAnielloCV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            variant="outlined"
            sx={{ mr: 2 }}
          >
            {t("viewCV")}
          </Button>
          <Button onClick={onButtonClick}>{t("cv")}</Button>
        </Box>
        <Box>
          <Avatar
            alt="Il mio avatar"
            src={avt}
            sx={{
              width: isMobile ? 150 : 200,
              height: isMobile ? 150 : 200,
              marginTop: isMobile ? 2 : 0,
              float: "left",
            }}
          />
        </Box>
      </Container>
      <Divider />
    </>
  );
};

export default About;
