import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Divider,
  Button,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useTranslation } from "react-i18next";
import ColoredText from "../Text";
import { NavbarData } from "../../mockup/index";
import CustomizedSwitches from "../Switch";
import { useThemeContext } from "../../context/theme";
import { useDriver } from "../../context/Driver/useDriver";
import piloticn from "../../assets/piloticn.png";

const Navbar = () => {
  const { t } = useTranslation();
  const { isMobile, isTablet, isDarkMode } = useThemeContext();
  const { startTour } = useDriver(); // Usa il Driver Context
  // gestisce l'apertura del menù mobile
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  // Avvia automaticamente il tour quando la navbar viene montata
  useEffect(() => {
    if (!isTablet) startTour();
  }, [isTablet]);

  const menuItems = [
    { label: t("navbar.about"), anchor: "about" },
    { label: t("navbar.skill"), anchor: "skill" },
    { label: t("navbar.projects"), anchor: "projects" },
    { label: t("navbar.works"), anchor: "works" },
    { label: t("navbar.education"), anchor: "education" },
    { label: t("navbar.blog"), anchor: "blog" },
    { label: t("navbar.contacts"), anchor: "contacts" },
  ];

  return (
    <AppBar
      position="static"
      color="transparent"
      sx={{ display: "flex", alignItems: isMobile ? "center" : "stretch" }}
    >
      <Toolbar>
        {/* Nome a sinistra */}
        <ColoredText
          id="name"
          variant={isMobile ? "h6" : "h4"}
          text={t("navbar.myName")}
          colors={isDarkMode ? NavbarData.colors : NavbarData.colorsLight}
        />

        {/* Navbar Desktop */}
        {!isTablet ? (
          <Box sx={{ display: "flex", alignItems: "center" }} id="sections">
            {menuItems.map((item, index) => (
              <React.Fragment key={index}>
                <ColoredText
                  variant="subtitle2"
                  text={item.label}
                  colors={
                    isDarkMode ? NavbarData.colors : NavbarData.colorsLight
                  }
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    const section = document.getElementById(item.anchor);
                    if (section) {
                      section.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                />
                {index < menuItems.length - 1 && <Divider sx={{ mx: 1 }} />}
              </React.Fragment>
            ))}
            <CustomizedSwitches />

            {/* Pulsante per Avviare il Tour */}
            <Button
              startIcon={
                <img
                  src={piloticn}
                  alt="tour-icon"
                  style={{
                    width: 24,
                    height: 24,
                    transform: "scale(1.7, 1.2), translate(3.5px, 1px)",
                  }}
                />
              } // Imposta l'icona PNG come immagine
              onClick={startTour}
              variant="contained"
              color="primary"
              sx={{ ml: 2 }}
            />
          </Box>
        ) : (
          // Navbar Mobile: Hamburger Menu
          <>
            <IconButton
              id="drawer"
              edge="end"
              color="inherit"
              onClick={handleDrawerToggle}
              sx={{ paddingLeft: 3 }}
            >
              <MenuIcon />
            </IconButton>
            <Drawer anchor="top" open={drawerOpen} onClose={handleDrawerToggle}>
              <Box sx={{ flexGrow: 1, backgroundColor: "#111722" }}>
                <List sx={{ color: "#A5C5E9" }}>
                  {/* {menuItems.map((item, index) => (
                    <React.Fragment key={index}>
                      <ListItem button onClick={handleDrawerToggle}>
                        <ListItemText primary={item.label} />
                      </ListItem>
                      {index < menuItems.length - 1 && <Divider />}
                    </React.Fragment>
                  ))} */}
                  <CustomizedSwitches />

                  {/* Pulsante per Avviare il Tour nel menu mobile */}
                  {/* <ListItem button onClick={startTour}>
                    <HelpOutlineIcon sx={{ marginRight: 1 }} />
                    <ListItemText primary={t("navbar.tour")} />
                  </ListItem> */}
                </List>
              </Box>
            </Drawer>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
