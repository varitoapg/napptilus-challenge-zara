import { Routes, Route, Navigate } from "react-router-dom";
import PhonesPage from "../../pages/PhonesPage/PhonesPage";
import PhoneDetailPage from "../../pages/PhoneDetailPage/PhoneDetailPage";
import "./App.css";

function App() {
  return (
    <>
      <h1>Zara Challenge</h1>
      <Routes>
        <Route path="/" element={<PhonesPage />} />
        <Route path="/phone/:phoneId" element={<PhoneDetailPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
}

export default App;
