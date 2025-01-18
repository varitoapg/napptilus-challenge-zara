import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./components/App/App.jsx";
import { PhoneProvider } from "./contexts/PhoneContext/PhoneContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <PhoneProvider>
        <App />
      </PhoneProvider>
    </BrowserRouter>
  </StrictMode>
);
