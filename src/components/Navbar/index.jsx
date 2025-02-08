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
import HelpOutlineIcon from "@mui/icons-material/HelpOutline"; // Icona per il tour
import { useTranslation } from "react-i18next";
import ColoredText from "../Text";
import { NavbarData } from "../../mockup/index";
import CustomizedSwitches from "../Switch";
import { useThemeContext } from "../../context/theme";
import { useDriver } from "../../context/Driver/useDriver";

const Navbar = () => {
  const { t } = useTranslation();
  const { isMobile, isTablet } = useThemeContext();
  const { startTour } = useDriver(); // Usa il Driver Context
  // gestisce l'apertura del menù mobile
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const menuItems = [
    { label: t("navbar.about") },
    { label: t("navbar.skill") },
    { label: t("navbar.projects") },
    { label: t("navbar.contacts") },
  ];

  return (
    <AppBar
      id="navbar" // id per il tour
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
          colors={NavbarData.colors}
        />

        {/* Navbar Desktop */}
        {!isTablet ? (
          <Box sx={{ display: "flex", alignItems: "center" }} id="sections">
            {menuItems.map((item, index) => (
              <React.Fragment key={index}>
                <ColoredText
                  variant="h6"
                  text={item.label}
                  colors={NavbarData.colors}
                />
                {index < menuItems.length - 1 && <Divider sx={{ mx: 1 }} />}
              </React.Fragment>
            ))}
            <CustomizedSwitches />

            {/* Pulsante per Avviare il Tour */}
            <Button
              startIcon={<HelpOutlineIcon />}
              onClick={startTour}
              variant="contained"
              color="primary"
              sx={{ ml: 2 }}
            >
              {t("navbar.tour")} {/* Traduzione per il pulsante */}
            </Button>
          </Box>
        ) : (
          // Navbar Mobile: Hamburger Menu
          <>
            <IconButton
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
                  {menuItems.map((item, index) => (
                    <React.Fragment key={index}>
                      <ListItem button onClick={handleDrawerToggle}>
                        <ListItemText primary={item.label} />
                      </ListItem>
                      {index < menuItems.length - 1 && <Divider />}
                    </React.Fragment>
                  ))}
                  <CustomizedSwitches />

                  {/* Pulsante per Avviare il Tour nel menu mobile */}
                  <ListItem button onClick={startTour}>
                    <HelpOutlineIcon sx={{ marginRight: 1 }} />
                    <ListItemText primary={t("navbar.tour")} />
                  </ListItem>
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
