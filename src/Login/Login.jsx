import style from './Login.module.css';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Login({ setIsAuth }) {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    function handleNameChange(event) {
        setName(event.target.value);
    }

    function handlePasswordChange(event) {
        setPassword(event.target.value);
    }

    const handleLogin = (event) => {
        event.preventDefault();
        setIsAuth(true); // ✅ This now updates App.jsx state
        navigate('/home');
    };

    return (
        <div className={style.loginBody}>
            <form onSubmit={handleLogin} className={style.loginForm}>
                <h2>Welcome Back</h2>
                <label>
                    <input type="text" 
                        value={name} 
                        onChange={handleNameChange}
                        placeholder='username'
                        required />
                </label>
                <label>
                    <input type="password"
                        value={password}
                        onChange={handlePasswordChange}
                        placeholder='password'
                        required />
                </label>
                <br />
                <p>
                    <a href="#">Forgot password?</a> | <Link to="/signup">Create an account?</Link>
                </p>
                <br />
                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default Login;
