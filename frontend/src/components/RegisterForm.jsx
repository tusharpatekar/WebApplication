// RegisterForm.jsx

import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./RegisterForm.css";

const RegisterForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      const response = await axios.post("http://127.0.0.1:8000/api/register", {
        name,
        email,
        password,
      });
      setMessage(response.data.message);
      console.log(response.data);
      if (response.data.message === "success") {
        navigate("/otp-verification", { state: { email } });
      }
    } catch (error) {
      setMessage(error.response.data.errors.email[0]);
    }
  };

  return (
    <div className="showcase">
      <div className="showcase-content">
        <h1>Register</h1>
        <div className="formm">
          <div className="info">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="info">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="info">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            className="btn btn-primary"
            onClick={handleRegister}
          >
            Register
          </button>
          <div className="signup">
            Already have an account?
            <a href="/login">Sign in</a>
          </div>
        </div>

        {message && <p className="message">{message}</p>}
      </div>
    </div>
  );
};

export default RegisterForm;
