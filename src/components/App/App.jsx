import { Routes, Route, Navigate } from "react-router-dom";
import PhonesPage from "../../pages/PhonesPage/PhonesPage";
import PhoneDetailPage from "../../pages/PhoneDetailPage/PhoneDetailPage";
import CartPage from "../../pages/CartPage/CartPage";
import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<PhonesPage />} />
        <Route path="/phone/:phoneId" element={<PhoneDetailPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
}

export default App;
