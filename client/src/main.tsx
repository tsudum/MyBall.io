import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { FIELD_WIDTH_M } from "../../shared/constants";

console.log("Field width in meters:", FIELD_WIDTH_M);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
