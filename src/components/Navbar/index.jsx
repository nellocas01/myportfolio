import React from "react";
import { AppBar, Toolbar, Box } from "@mui/material";
import Divider, { dividerClasses } from "@mui/material/Divider";
import ColoredText from "../Text";
import { NavbarData } from "../../mockup/index";
import CustomizedSwitches from "../Switch";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const { t } = useTranslation();

  return (
    <AppBar position="static" color="transparent">
      <Toolbar>
        <ColoredText variant={"h4"} text={t("navbar.myName")} colors={NavbarData.colors} />
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            [`& .${dividerClasses.root}`]: {
              mx: 1,
            },
          }}
        >
          <ColoredText variant={"h6"} text={t("navbar.about")} colors={NavbarData.colors} />
          <Divider />
          <ColoredText variant={"h6"} text={t("navbar.skill")} colors={NavbarData.colors} />
          <Divider />
          <ColoredText variant={"h6"} text={t("navbar.projects")} colors={NavbarData.colors} />
          <Divider />
          <ColoredText variant={"h6"} text={t("navbar.contacts")} colors={NavbarData.colors} />
          <CustomizedSwitches />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
