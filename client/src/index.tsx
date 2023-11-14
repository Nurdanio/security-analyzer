import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./app/App.tsx";
import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <MantineProvider theme={{ fontFamily: "Verdana, sans-serif" }}>
      <App />
    </MantineProvider>
  </React.StrictMode>,
);
