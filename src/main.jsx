import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./components/App/App.jsx";
import { PhoneProvider } from "./contexts/PhoneContext/PhoneContext";
import { CartProvider } from "./contexts/CartContext/CartContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <PhoneProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </PhoneProvider>
    </BrowserRouter>
  </StrictMode>
);
