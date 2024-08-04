import { useEffect, useState } from "react";
import { useUserContext } from "../context/UserContext";
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Button } from "@mui/material";


const userList = [
    { email: 'admin@email.com', password: 'adminpass' },
];

export default function LoginForm() {
    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const [submitResult, setSubmitResult] = useState('');
    const { currentUser, handleUpdateUser } = useUserContext();
    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

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
                <Button variant="outlined" onClick={() => handleUpdateUser({})}>Log Out</Button>
            </div>
        );
    } else {
        return (
            
            <div className="LoginForm componentBox">
                <h2>Login Here</h2>
                <form onSubmit={handleSubmit}>
                <FormControl sx={{ m: 1, width: '25ch' }} variant="standard">
                        <InputLabel htmlFor="standard-adornment-email">Email Address</InputLabel>
                        <Input
                        type="email"
                        id="email"
                        value={userEmail}
                        name="userEmail"
                        onChange={(e) => setUserEmail(e.target.value)}
                        required
                        />
                    </FormControl>
                    
                    <FormControl sx={{ m: 1, width: '25ch' }} variant="standard">
                        <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                        <Input
                            id="password"
                            type={showPassword ? 'text' : 'password'}
                            onChange={(e) => setUserPassword(e.target.value)}
                            value={userPassword}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                    >
                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            }
                        />
                    </FormControl>
                    <br />
                    <br />
                    <Button variant="outlined" type="submit">Log In</Button>
                    {submitResult && <p className="submitResult">{submitResult}</p>}
                </form>
            </div>
        );
    }
}