import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/index.css";
import "../node_modules/leaflet/dist/leaflet.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
