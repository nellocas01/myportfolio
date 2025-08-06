import { useTranslation } from "react-i18next";
import { useThemeContext } from "../../context/theme";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Avatar,
  Box,
  Chip,
  Container,
  Divider,
  Stack,
  Typography,
} from "@mui/material";
import ColoredText from "../Text/index";
import { NavbarData } from "../../mockup";
import { ExpandMore } from "@mui/icons-material";
import imgSiacloud from "../../assets/Siacloud.png";
import imgSipliFleet from "../../assets/SipliFleet.png";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  const { t } = useTranslation();
  const { isMobile, isDarkMode } = useThemeContext();
  const works = t("works", { returnObjects: true });

  const logos = {
    imgSiacloud,
    imgSipliFleet,
  };

  return (
    <>
      <Container id="works" sx={{ marginY: "5rem", padding: isMobile ? 0 : 1 }}>
        <ColoredText
          variant={isMobile ? "h5" : "h4"}
          text={t("works.title")}
          colors={isDarkMode ? NavbarData.colors : NavbarData.colorsLight}
          style={{
            marginBottom: 1,
            justifyContent: isMobile ? "center" : "end",
          }}
        />
        <Box sx={{ marginTop: 3 }}>
          {works.cards.map((work, index) => (
            <Accordion
              key={index}
              sx={{ mb: 2, borderRadius: 2, backgroundColor: "transparent" }}
            >
              <AccordionSummary expandIcon={<ExpandMore />}>
                <Stack direction="row" spacing={2} alignItems="center">
                  {work.logo && (
                    <Avatar
                      src={logos[work.logo]}
                      alt={work.company}
                      variant="square"
                      sx={{ width: 40, height: 40 }}
                    />
                  )}
                  <Box>
                    <Typography variant="subtitle1">{work.role}</Typography>
                    <Typography variant="body2" color="text.secondary">
                      {work.company} · {work.period} ({work.duration})
                    </Typography>
                  </Box>
                </Stack>
              </AccordionSummary>

              <AccordionDetails>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  📍 {work.location}
                </Typography>

                <Box component="ul" sx={{ pl: 2, mb: 2 }}>
                  <Typography variant="body1">{work.detail}</Typography>
                  {work.cardContent.map((item, idx) => (
                    <li key={idx}>
                      <Typography variant="body2">{item}</Typography>
                    </li>
                  ))}
                </Box>

                <Stack direction="row" spacing={1} flexWrap="wrap" mb={2}>
                  {work.skills.map((skill, idx) => (
                    <Chip key={idx} label={skill} size="small" />
                  ))}
                </Stack>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      </Container>
      <Divider />
    </>
  );
};
