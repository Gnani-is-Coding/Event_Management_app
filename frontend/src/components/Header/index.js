import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {AlignJustify, ChevronDown} from "lucide-react" 
import './index.css'

function Header({ user, setUser }) {
  const [openMenu, setOpenMenu] = useState(false)
  const navigate = useNavigate();

  const handleLogout = () => {
    setUser(null);
    navigate('/login');
  };

  return (
    <>
    <header className="header">
      <Link to="/" style={{textDecoration: "none", color: "#ffffff"}}><h1>Events</h1></Link>
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
         <AlignJustify className='menu-icon' onClick={() => setOpenMenu(!openMenu)}/>
      </nav>
    </header>
    <div className='sm-links-container' style={{display: openMenu ? "block" : "none"}}>
    <p className="sm-links">Login</p>
    <p className="sm-links">Register</p>
    <p className="sm-links">Events</p>
    <p className="sm-links" style={{display: "flex", alignItems: "center", gap:'10px'}}>Contact <ChevronDown/></p>
</div>
</>
  );
}

export default Header;