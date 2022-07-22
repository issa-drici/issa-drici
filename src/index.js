import React from "react";
import "./bodyStyles.css";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import { customTheme } from "theme/customTheme";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <ChakraProvider resetCSS theme={customTheme}>
        <App />
    </ChakraProvider>
  </React.StrictMode>
);
