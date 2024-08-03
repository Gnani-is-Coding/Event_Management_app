import React, { useState } from 'react';
import {useNavigate } from 'react-router-dom';
import Cookies from "js-cookie"
import './index.css'

function Login({ setUser }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('')
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = "http://localhost:3000/auth/login";

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    };

    const response = await fetch(url, options);
    const result = await response.json();

    console.log(result, "result");
    if (response.ok) {
      Cookies.set("jwt_token", result.token, {expires: 10})
      Cookies.set("session_id", result.sessionId, {expires: 10})
      setUser({ email }); 
      navigate('/');
      
    } else {
      console.error("Login failed:", result.error);
      setError(result.error)
    }

    
  };

  return (
    <div className='login-container'>
    <div className="login-form">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="submit-btn">Login</button>
        {error.length > 0 && <p>{error}</p> }
      </form>
    </div>
    <img src="/appointments-img.png" alt="events-image" className='events-image'/>
    </div>
  );
}

export default Login;