import { Box, Container, Divider, Typography, Avatar } from "@mui/material";
import ColoredText from "../Text/index";
import { NavbarData } from "../../mockup";
import { useTranslation } from "react-i18next";
import HtmlIcon from "../../assets/htmlicn.png";
import CssIcon from "../../assets/cssicn.png";
import JavascriptIcon from "../../assets/javascripticn.png";
import TypescriptIcon from "../../assets/typescripticn.png";
import ReactIcon from "../../assets/reacticn.png";
import ReduxIcon from "../../assets/reduxicn.png";
import JestIcon from "../../assets/jesticn.png";
import JavaIcon from "../../assets/javaicn.png";
import SpringbootIcon from "../../assets/springbooticn.png";
import GitIcon from "../../assets/giticn.png";
import { useThemeContext } from "../../context/theme";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  const { t } = useTranslation();
  const { isMobile } = useThemeContext();

  return (
    <>
      <Container sx={{ marginY: "5rem", padding: isMobile ? 0 : 1 }}>
        <ColoredText
          variant={isMobile ? "h5" : "h4"}
          text={t("skills.title")}
          colors={NavbarData.colors}
          style={{
            justifyContent: isMobile ? "center" : "end",
            marginBottom: "1rem",
          }}
        />
        <Typography>{t("skills.subtitle")}</Typography>
        <Box
          sx={{
            marginTop: "2rem",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 2,
          }}
        >
          <Box sx={{ display: "flex", gap: 2 }}>
            <Avatar src={HtmlIcon} alt="HTML" />
            <Avatar src={CssIcon} alt="CSS" />
            <Avatar src={JavascriptIcon} alt="JavaScript" />
            <Avatar src={TypescriptIcon} alt="TypeScript" />
            <Avatar src={ReactIcon} alt="React" />
          </Box>
          <Box sx={{ display: "flex", gap: 2 }}>
            <Avatar src={ReduxIcon} alt="Redux" />
            <Avatar src={JestIcon} alt="Jest" />
            <Avatar src={JavaIcon} alt="Java" />
            <Avatar src={SpringbootIcon} alt="Spring Boot" />
            <Avatar src={GitIcon} alt="Git" />
          </Box>
        </Box>
      </Container>
      <Divider />
    </>
  );
};
