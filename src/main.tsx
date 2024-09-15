import "./index.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Routes from "./Routes/index.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Routes />
  </StrictMode>
);
