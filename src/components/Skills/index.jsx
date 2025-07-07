import { Box, Container, Divider, Typography, Avatar } from "@mui/material";
import Grid from "@mui/material/Grid2";
import ColoredText from "../Text/index";
import { NavbarData } from "../../mockup";
import { useTranslation } from "react-i18next";
import { useThemeContext } from "../../context/theme";
import Carousel from "../Carousel";
import "./style.css";
// Import delle icone
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
import BootstrapIcon from "../../assets/bootstrapicn.png";
import NodeIcon from "../../assets/nodeicn.png";
import PlaywrightIcon from "../../assets/playwrighticn.png";
import PostgresqlIcon from "../../assets/postgresqlicn.png";
import PostmanIcon from "../../assets/postmanicn.png";
import ReacttestinglibIcon from "../../assets/reacttestinglibicn.png";
import SassIcon from "../../assets/sassicn.png";
import SqlIcon from "../../assets/sqlicn.png";
import MuiIcon from "../../assets/muiicn.png";

// Lista delle skill con immagine e nome
const skills = [
  { src: HtmlIcon, alt: "HTML" },
  { src: CssIcon, alt: "CSS" },
  { src: JavascriptIcon, alt: "JavaScript" },
  { src: TypescriptIcon, alt: "TypeScript" },
  { src: ReactIcon, alt: "React" },
  { src: ReduxIcon, alt: "Redux" },
  { src: JestIcon, alt: "Jest" },
  { src: JavaIcon, alt: "Java" },
  { src: SpringbootIcon, alt: "Spring Boot" },
  { src: GitIcon, alt: "Git" },
  { src: MuiIcon, alt: "Material UI" },
  { src: BootstrapIcon, alt: "Bootstrap" },
  { src: NodeIcon, alt: "Node.js" },
  { src: PlaywrightIcon, alt: "Playwright" },
  { src: PostgresqlIcon, alt: "PostgreSQL" },
  { src: PostmanIcon, alt: "Postman" },
  { src: ReacttestinglibIcon, alt: "React Testing Library" },
  { src: SassIcon, alt: "Sass" },
  { src: SqlIcon, alt: "SQL" },
];

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  const { t } = useTranslation();
  const { isMobile, isDarkMode } = useThemeContext();

  return (
    <>
      <Container id="skill" sx={{ marginY: "5rem", padding: isMobile ? 0 : 1 }}>
        <ColoredText
          variant={isMobile ? "h5" : "h4"}
          text={t("skills.title")}
          colors={isDarkMode ? NavbarData.colors : NavbarData.colorsLight}
          style={{
            justifyContent: isMobile ? "center" : "end",
            marginBottom: "1rem",
          }}
        />
        <Typography>{t("skills.subtitle")}</Typography>

        {/* Griglia delle skills */}
        <Grid
          container
          spacing={3}
          justifyContent="center"
          sx={{ marginTop: "2rem" }}
        >
          {skills.map((skill, index) => (
            <Grid size={{ xs: 4, sm: 4, md: 3, lg: 2 }} key={skill.alt}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
                className="skill-item"
              >
                <Avatar
                  src={skill.src}
                  alt={skill.alt}
                  sx={{ width: 60, height: 60 }}
                />
                <Typography
                  variant="body2"
                  sx={{ marginTop: "0.5rem", fontSize: "0.8rem" }}
                >
                  {skill.alt}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
        {/* Carosello per le certificazioni */}
        <Carousel />
      </Container>
      <Divider />
    </>
  );
};
