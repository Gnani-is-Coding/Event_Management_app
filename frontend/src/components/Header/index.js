import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {AlignJustify, ChevronDown} from "lucide-react" 
import Cookies from "js-cookie" 
import './index.css'

function Header({ user, setUser }) {
  const [openMenu, setOpenMenu] = useState(false)
  const navigate = useNavigate();

  const handleLogout = async() => {

    const url = "http://localhost:3000/auth/logout";
    const sessionId = Cookies.get("session_id")

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${Cookies.get("jwt_token")}`
      },
      body: JSON.stringify({ sessionId }),
    };

    const response = await fetch(url, options);
    const result = await response.json();

    console.log(result, "result");
    if (response.ok) {
      Cookies.remove("jwt_token")
      Cookies.remove("session_id")
      
      setUser(null);
      navigate('/login');

    } else {
      console.error("Login failed:", result.error);
    }
  };

  return (
    <>
    <header className="header">
      <Link to="/" style={{textDecoration: "none", color: "#ffffff"}}><h1>Events</h1></Link>
      <nav className="nav">
        {user ? (
          <>
            <a href="#Events">My Events</a>
            <a href="#New">Create Event</a>
            <Link to="/sessions">Sessions</Link>
            <button onClick={handleLogout} style={{background: "transparent", border: "1px solid"}}>Logout</button>
          </>
        ) : (
          <>
            <Link to="/login" >Login</Link>
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