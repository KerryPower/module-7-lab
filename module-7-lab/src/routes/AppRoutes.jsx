import BitcoinPage from "../pages/BitcoinPage";
import CatsPage from "../pages/CatsPage";
import Homepage from "../pages/HomePage";
import { Routes, Route } from "react-router-dom";
import LoginPage from "../pages/LoginPage";

export default function AppRoutes(props) {
    return (
    <Routes>
    <Route index element={<Homepage {...props} />} /> 
    <Route path="LoginPage" element={<LoginPage {...props} />} />
    <Route path="CatsPage" element={<CatsPage {...props} />} />
    <Route path="BitcoinPage" element={<BitcoinPage {...props} />} />
    </Routes>
    )
}