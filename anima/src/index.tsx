import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { LogInEnterNumber } from "./screens/LogInEnterNumber";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <LogInEnterNumber />
  </StrictMode>,
);
