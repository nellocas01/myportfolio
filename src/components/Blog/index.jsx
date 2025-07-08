import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  Typography,
} from "@mui/material";
import ColoredText from "../Text/index";
import { NavbarData } from "../../mockup";
import { useTranslation } from "react-i18next";
import { useThemeContext } from "../../context/theme";
import imgTest from "../../assets/testingImg.jpg";
import imgDoc from "../../assets/documentImg.png";
import imgTS from "../../assets/typescriptImg.jpg";
import imgStonksball from "../../assets/capstonePageFE.jpg";

// Mappa delle immagini locali degli articoli
const imageMap = {
  imgStonksball: imgStonksball,
  imgTest: imgTest,
  imgDoc: imgDoc,
  imgTS: imgTS,
};

// Funzione per ottenere l'URL corretto
const getImageUrl = (image) => {
  if (image.startsWith("http")) {
    return image; // Se è un URL, lo restituisce direttamente
  }
  return imageMap[image] || ""; // Se è locale, cerca nella mappa
};

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  const { t } = useTranslation();
  const { isMobile, isTablet, isDarkMode } = useThemeContext();
  const blogs = t("blogs", { returnObjects: true });

  return (
    <>
      <Container id="blog" sx={{ marginY: "5rem", padding: isMobile ? 0 : 1 }}>
        <ColoredText
          variant={isMobile ? "h5" : "h4"}
          text={t("blogs.title")}
          colors={isDarkMode ? NavbarData.colors : NavbarData.colorsLight}
          style={{
            marginBottom: 1,
            justifyContent: isMobile ? "center" : "end",
          }}
        />
        <Box
          sx={{
            marginTop: 3,
            display: "flex",
            // justifyContent: isTablet ? "start" : "center",
            justifyContent: "start",
            // gap: isTablet ? 2 : 5,
            gap: 2,
            // overflowX: isTablet ? "auto" : "hidden",
            overflowX: "auto",
          }}
        >
          {blogs.cards.map((blog, index) => (
            <Card
              key={index}
              sx={{
                border: "1px solid grey",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                backgroundColor: "transparent",
                minWidth: "341px",
              }}
            >
              <CardContent>
                <Typography variant="subtitle1">{blog.title}</Typography>
                <Typography
                  variant="subtitle2"
                  component="div"
                  sx={{ color: "text.secondary" }}
                >
                  {blog.subheader}
                </Typography>
              </CardContent>
              <CardMedia
                component="img"
                image={getImageUrl(blog.image)}
                alt={blog.alt}
                className="image"
                sx={{ width: "100%", height: "50%" }}
              />
              <Button
                href={blog.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {blog.btn}
              </Button>
            </Card>
          ))}
        </Box>
      </Container>
    </>
  );
};
