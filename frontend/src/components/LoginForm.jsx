// LoginForm.jsx
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './LoginForm.css';

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            const response = await axios.post('http://127.0.0.1:8000/api/login', { email, password });
            setMessage('Login successful.');
            localStorage.setItem('token', response.data.token);
            navigate('/dashboard');
        } catch (error) {
            setMessage('Invalid email or password.');
        }
    };

    return (
        <div className="showcase">
            <div className="showcase-content">
                <div className="formm">
                    <h1>Login</h1>
                    <div className="info">
                        <input type="email" className="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
                    </div>
                    <div className="info">
                        <input type="password" className="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
                    </div>
                    <div className="btn">
                        <button onClick={handleLogin} className="btn-primary">Login</button>
                    </div>
                    <div className="help">
                        <a href="/forgot-password">Forgot Password?</a>
                        <a href="/register">Sign Up</a>
                    </div>
                    {message && <p className="message">{message}</p>}
                </div>
            </div>
        </div>
    );
};

export default LoginForm;
