import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './index.css'

function Header({ user, setUser }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    setUser(null);
    navigate('/login');
  };

  return (
    <header className="header">
      <h1>Event Manager</h1>
      <nav className="nav">
        {user ? (
          <>
            <Link to="/">My Events</Link>
            <Link to="/events/new">Create Event</Link>
            <Link to="/sessions">Sessions</Link>
            <button onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        )}
      </nav>
    </header>
  );
}

export default Header;