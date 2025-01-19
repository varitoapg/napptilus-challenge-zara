import { Routes, Route, Navigate } from "react-router-dom";
import PhonesPage from "../../pages/PhonesPage/PhonesPage";
import PhoneDetailPage from "../../pages/PhoneDetailPage/PhoneDetailPage";
import "./App.css";
import Header from "../Header/Header";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<PhonesPage />} />
        <Route path="/phone/:phoneId" element={<PhoneDetailPage />} />
        <Route path="/cart" element={<div>Cart</div>} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
}

export default App;
