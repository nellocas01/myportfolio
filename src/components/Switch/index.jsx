import React, { useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { useThemeContext } from "../../context/theme";
import { useTranslation } from "react-i18next";
import { ThemeSwitch } from "./theme";
import { LanguageSwitch } from "./language";

export default function CustomizedSwitches() {
  // stato che gestisce il tema
  const { isDarkMode, toggleTheme, isMobile } = useThemeContext();
  // stato che gestisce il cambio lingua
  const { i18n, t } = useTranslation();

  // Funzione per cambiare lingua
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("selectedLanguage", lng);
  };

  useEffect(() => {
    // Imposta la lingua salvata al caricamento
    const selectedLanguage = localStorage.getItem("selectedLanguage") || "en";
    changeLanguage(selectedLanguage);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {isMobile && (
        <Typography sx={{ marginTop: 4, paddingLeft: 1 }}>
          {t("navbar.isMobile")}
        </Typography>
      )}
      <Box sx={{ display: "flex" }}>
        {/* Switch per il cambio tema */}
        <Box>
          <ThemeSwitch
            id="theme"
            sx={{ m: 1 }}
            checked={isDarkMode}
            onChange={toggleTheme}
          />
        </Box>
        {/* Switch per il cambio lingua */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <LanguageSwitch
            id="language"
            checked={localStorage.getItem("selectedLanguage") === "it"}
            onChange={(e) => changeLanguage(e.target.checked ? "it" : "en")}
            inputProps={{ "aria-label": "Language toggle" }}
          />
        </Box>
      </Box>
    </>
  );
}
