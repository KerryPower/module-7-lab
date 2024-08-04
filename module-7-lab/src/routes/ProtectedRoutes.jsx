import { Outlet, Navigate } from "react-router-dom";
import { useUserContext } from "../components/context/UserContext";

export default function ProtectedRoute({ redirectPath = '/login', children }) {
    const { currentUser } = useUserContext();

    if (!currentUser || !currentUser.email) {
        return <Navigate to={redirectPath} replace />;
    }

    return children ? children : <Outlet />}