import BitcoinPage from "../pages/BitcoinPage";
import CatsPage from "../pages/CatsPage";
import Homepage from "../pages/HomePage";
import { Routes, Route } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import ProtectedRoute from "./ProtectedRoutes";

export default function AppRoutes(props) {
    return (
    <Routes>
    <Route index element={<Homepage {...props} />} /> 
    <Route path="/login" element={<LoginPage {...props} />} />
    <Route path="/cats" element={<ProtectedRoute><CatsPage {...props} /></ProtectedRoute>} />
    <Route path="/bitcoin" element={<ProtectedRoute><BitcoinPage {...props} /></ProtectedRoute>} />
    </Routes>
    )
}