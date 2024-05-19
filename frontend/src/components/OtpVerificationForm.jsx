// OtpVerificationForm.jsx

import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';
import './OtpVerificationForm.css';

const OtpVerificationForm = () => {
    const [otp, setOtp] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    const email = location.state.email; // Get email from previous page

    const handleVerifyOtp = async () => {
        try {
            const response = await axios.post('http://127.0.0.1:8000/api/verify-email', { email, otp });
            setMessage(response.data.message);
            if (response.data.message === "success") {
                alert("Email verification is done.");
                navigate('/login');
            }
        } catch (error) {
            setMessage(error.response.data.message);
        }
    };

    return (
        <div className="otp-verification-container">
            <div className="otp-verification-card">
                <h1>OTP Verification</h1>
                <input type="email" placeholder="Email" value={email} disabled /> {/* Display pre-filled email */}
                <input type="text" placeholder="Enter OTP" value={otp} onChange={e => setOtp(e.target.value)} />
                <button onClick={handleVerifyOtp}>Verify OTP</button>
                {message && <p className="message">{message}</p>}
            </div>
        </div>
    );
};

export default OtpVerificationForm;
