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
  Link,
  Stack,
  Typography,
} from "@mui/material";
import ColoredText from "../Text/index";
import { NavbarData } from "../../mockup";
import { ExpandMore } from "@mui/icons-material";
import imgEpicode from "../../assets/epicodeLogo.png";
import certificateEpicode from "../../assets/certificate.png";
import imgCaruso from "../../assets/carusoLogo.jpg";
import certificateDiploma from "../../assets/diploma.jpg";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  const { t } = useTranslation();
  const { isMobile, isDarkMode } = useThemeContext();
  const education = t("education", { returnObjects: true });

  const logos = {
    imgEpicode,
    certificateEpicode,
    imgCaruso,
    certificateDiploma,
  };

  return (
    <>
      <Container
        id="education"
        sx={{ marginY: "5rem", padding: isMobile ? 0 : 1 }}
      >
        <ColoredText
          variant={isMobile ? "h5" : "h4"}
          text={t("education.title")}
          colors={isDarkMode ? NavbarData.colors : NavbarData.colorsLight}
          style={{
            marginBottom: 1,
            justifyContent: isMobile ? "center" : "start",
          }}
        />
        <Box sx={{ marginTop: 3 }}>
          {education.cards.map((work, index) => (
            <Accordion
              key={index}
              sx={{ mb: 2, borderRadius: 2, backgroundColor: "transparent" }}
            >
              <AccordionSummary expandIcon={<ExpandMore />}>
                <Stack direction="row" spacing={2} alignItems="center">
                  {work.logo && (
                    <Avatar
                      src={logos[work.logo]}
                      alt={work.school}
                      variant="square"
                      sx={{ width: 40, height: 40 }}
                    />
                  )}
                  <Box>
                    <Typography variant="subtitle1">{work.degree}</Typography>
                    <Typography variant="body2" color="text.secondary">
                      {work.school} · {work.period} ({work.duration})
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
                  {work.cardContent?.map((item, idx) => (
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

                <Stack direction="row" spacing={1} flexWrap="wrap" mb={2}>
                  <Typography variant="body2">Certificato :</Typography>
                  <a
                    href={work.certificateLink}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {work.logo && (
                      <Avatar
                        src={logos[work.certificate]}
                        alt={work.school}
                        variant="square"
                        sx={{ width: 100, height: 100 }}
                      />
                    )}
                  </a>
                </Stack>

                {work.linkedin && (
                  <Link
                    href={work.linkedin}
                    target="_blank"
                    rel="noopener"
                    underline="hover"
                  >
                    🔗 Profilo LinkedIn
                  </Link>
                )}
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      </Container>
      <Divider />
    </>
  );
};
