// ForgotPasswordForm.jsx

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './ForgotPasswordForm.css';

const ForgotPasswordForm = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleForgotPassword = async () => {
        try {
            const response = await axios.post('http://127.0.0.1:8000/api/forget-password', { email });
            setMessage(response.data.message);
            if (response.data.message === "success") {
                alert("Reset link sent to your email.");
                navigate('/login');
            }
        } catch (error) {
            setMessage(error.response.data.message);
        }
    };

    return (
        <div className="forgot-password-container">
            <div className="forgot-password-card">
                <h1>Forgot Password</h1>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                <button onClick={handleForgotPassword}>Send Reset Link</button>
                {message && <p className="message">{message}</p>}
            </div>
        </div>
    );
};

export default ForgotPasswordForm;
