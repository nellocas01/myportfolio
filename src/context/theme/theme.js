import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#f50057", // colore principale
    },
    secondary: {
      main: "#1976d2", // colore secondario
    },
  },
  typography: {
    fontFamily: "Roboto, Arial",
  },
});

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    // primary: {
    //   main: "#1976d2",
    // },
    // secondary: {
    //   main: "#f50057",
    // },
    background: {
      default: "#fafafa",
    },
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    // primary: {
    //   main: "#90caf9",
    // },
    // secondary: {
    //   main: "#f48fb1",
    // },
    background: {
      default: "#111723",
    },
  },
});

// #111723