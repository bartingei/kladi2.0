import style from './SignUp.module.css';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function SignUp() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const navigate = useNavigate();

    function handleNameChange(event) {
        setName(event.target.value);
    }

    function handleEmailChange(event) {
        setEmail(event.target.value);
    }

    function handlePasswordChange(event) {
        setPassword(event.target.value);
    }

    function handleConfirmPasswordChange(event) {
        setConfirmPassword(event.target.value);
    }

    function handleSignUp(event) {
        event.preventDefault();
        // Add validation logic here
        if (password !== confirmPassword) {
            alert("Passwords don't match!");
            return;
        }
        // If validation passes
        navigate('/home');
    }

    return (
        <div className={style.signUpBody}>
            <form onSubmit={handleSignUp} className={style.signUpForm}>
                <h2>Sign Up</h2>
                <label>
                    <input 
                        type="text" 
                        placeholder="Name" 
                        required 
                        value={name}
                        onChange={handleNameChange} 
                    />
                </label>

                <label>
                    <input 
                        type="email"
                        placeholder="Email"
                        required
                        value={email}
                        onChange={handleEmailChange}
                    />
                </label>
                
                <label> 
                    <input 
                        type="password" 
                        placeholder="Password"
                        required
                        value={password}
                        onChange={handlePasswordChange}
                    />
                </label>

                <label> 
                    <input 
                        type="password" 
                        placeholder="Confirm password"
                        required
                        value={confirmPassword}
                        onChange={handleConfirmPasswordChange}
                    />
                </label>

                <Link to="/login">Already have an account?</Link><br/>
                
                <button type="submit">Sign up</button>
            </form>
        </div>
    );
}

export default SignUp;