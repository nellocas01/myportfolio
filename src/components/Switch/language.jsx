import { styled, Switch } from "@mui/material";
import en from "../../assets/englandicn.png";
import it from "../../assets/italyicn.png";

export const LanguageSwitch = styled(Switch)(({ theme }) => ({
  width: 64,
  height: 32,
  padding: 0,
  display: "flex",
  "& .MuiSwitch-switchBase": {
    padding: 0,
    margin: 4,
    transitionDuration: "300ms",
    "&.Mui-checked": {
      transform: "translateX(32px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        backgroundColor: "#2ECA45", // Sfondo verde per italiano
        opacity: 1,
      },
    },
    "&:not(.Mui-checked) + .MuiSwitch-track": {
      backgroundColor: "#FF4C4C", // Sfondo rosso per inglese
      opacity: 1,
    },
  },
  "& .MuiSwitch-thumb": {
    backgroundImage: `url(${en})`,
    backgroundSize: "cover",
    width: 24,
    height: 24,
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
    transition: "background-image 0.3s, background-color 0.3s",
  },
  "& .Mui-checked .MuiSwitch-thumb": {
    backgroundImage: `url(${it})`,
  },
  "& .MuiSwitch-track": {
    borderRadius: 16,
    backgroundColor: "#E9E9EA",
    opacity: 1,
    transition: theme.transitions.create(["background-color"], {
      duration: 500,
    }),
  },
}));
