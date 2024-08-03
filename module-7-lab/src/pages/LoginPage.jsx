import { UserProvider } from "../components/context/UserContext"
import LoginForm from "../components/LoginForm/LoginForm"
export default function LoginPage() {
    return (
    <div className="loginPage">
    <UserProvider>
    <LoginForm />
    </UserProvider>
    </div>
)}