import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { DesktopDarkMode } from "./screens/DesktopDarkMode/DesktopDarkMode";

createRoot(document.getElementById("app")).render(
  <StrictMode>
    <DesktopDarkMode />
  </StrictMode>,
);
