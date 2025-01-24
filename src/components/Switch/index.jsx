import React, { useEffect } from "react";
import { Box } from "@mui/material";
import { useThemeContext } from "../../context/theme";
import { useTranslation } from "react-i18next";
import { ThemeSwitch } from "./theme";
import { LanguageSwitch } from "./language";

export default function CustomizedSwitches() {
  // stato che gestisce il tema
  const { isDarkMode, toggleTheme } = useThemeContext();
  // stato che gestisce il cambio lingua
  const { i18n } = useTranslation();

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
      <Box>
        {/* Switch per il cambio tema */}
        <ThemeSwitch
          sx={{ m: 1 }}
          checked={isDarkMode}
          onChange={toggleTheme}
        />
      </Box>
      {/* Switch per il cambio lingua */}
      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <LanguageSwitch
          checked={localStorage.getItem("selectedLanguage") === "it"}
          onChange={(e) => changeLanguage(e.target.checked ? "it" : "en")}
          inputProps={{ "aria-label": "Language toggle" }}
        />
      </Box>
    </>
  );
}
