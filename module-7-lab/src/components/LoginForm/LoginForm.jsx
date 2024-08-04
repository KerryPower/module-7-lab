import { useEffect, useState} from "react";
import { useUserContext } from "../context/UserContext";

const userList = [
    { email: 'admin@email.com', password: 'adminpass' },
];

export default function LoginForm() {
    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const [submitResult, setSubmitResult] = useState('');
    const { currentUser, handleUpdateUser } = useUserContext();

    useEffect(() => {
        const storedUser = localStorage.getItem('currentUser');
        if (storedUser) {
            handleUpdateUser(JSON.parse(storedUser));
        }
    }, [handleUpdateUser]);

    const handleSubmit = (e) => {
        e.preventDefault();
        
        setSubmitResult('');
        
        if (userPassword.length < 5) {
            setSubmitResult('Password must be at least 5 characters long');
            return;
        }
        
        if (userPassword === userEmail) {
            setSubmitResult('Password must not match email address');
            return;
        }
        
        const user = userList.find(user => user.email === userEmail && user.password === userPassword);
        
        if (user) {
            setSubmitResult('Successful login.');
            handleUpdateUser({ email: userEmail });
        } else {
            setSubmitResult('Invalid email or password');
        }
    }

    if (currentUser && currentUser.email) {
        return (
            <div className="welcomeMessage">
                <p>Welcome {currentUser.email}!</p>
                <button onClick={() => handleUpdateUser({})}>Log Out</button>
            </div>
        );
    } else {
        return (
            <div className="LoginForm componentBox">
                <form onSubmit={handleSubmit}>
                    <div className="formRow">
                        <label htmlFor="email">
                            Email Address:
                            <input
                                type="email"
                                id="email"
                                value={userEmail}
                                name="userEmail"
                                onChange={(e) => setUserEmail(e.target.value)}
                                required
                            />
                        </label>
                    </div>
                    <div className="formRow">
                        <label htmlFor="password">
                            Password:
                            <input
                                type="password"
                                id="password"
                                value={userPassword}
                                name="userPassword"
                                onChange={(e) => setUserPassword(e.target.value)}
                                required
                            />
                        </label>
                    </div>
                    <button type="submit">Log In</button>
                    {submitResult && <p className="submitResult">{submitResult}</p>}
                </form>
            </div>
        );
    }
}