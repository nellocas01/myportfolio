import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/App/App";
import { ThemeProvider } from "./context/theme";
import "./context/i18n"; // configurazione i18next per il cambio lingua
import { AppProvider } from "./context/AppContext";
import { DataProvider } from "./context/useDataContext";
import { DriverProvider } from "./context/Driver/config";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <ThemeProvider>
      <AppProvider>
        <DriverProvider>
          <DataProvider>
            <App />
          </DataProvider>
        </DriverProvider>
      </AppProvider>
    </ThemeProvider>
  </React.StrictMode>
);
