import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './index.css';

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('')
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = "https://event-management-app-4f0u.onrender.com/auth/register";

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, password }),
    };

    const response = await fetch(url, options);
    const result = await response.json();

    console.log(result, "result");
    if (response.ok) {
      navigate('/login');
    } else {
      console.error("Registration failed:", result.error);
      setError(result.error)
    }
  };

  return (
    <div className='register-container'>
      <div className="register-form">
        <h2>Register</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
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
          <button type="submit" className="submit-btn">Register</button>
          {error.length > 0 && <p>{error}</p> }
        </form>
      </div>
      <img src="/appointments-img.png" alt="events-image" className='events-image' />
    </div>
  );
}

export default Register;
