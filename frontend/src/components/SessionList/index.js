import React, { useState, useEffect } from 'react';
import Cookies from "js-cookie"  
import './index.css'; 

function SessionList() {
  const [sessions, setSessions] = useState([]);

  useEffect(() => {
    // Fetch sessions from the API
    fetchSessions();
  }, []);

  const fetchSessions = async () => {
    const url = "http://localhost:3000/sessions/"

      const options = {
        method: 'GET',
        headers: {
          'Content-Type': "application/json",
          'Authorization': `Bearer ${Cookies.get("jwt_token")}`
        }
      }

      const response = await fetch(url, options);
      const result = await response.json();
      console.log(result, "sessions")
       
      if (response.ok) {
        setSessions(result)
      } 
  };

  return (
    <div className="session-list">
      <h2>Session History</h2>
      {sessions.length === 0 ? (
        <p>No session history found.</p>
      ) : (
        <table className="session-table">
          <thead>
            <tr>
              <th>Login Time</th>
              <th>Logout Time</th>
              <th>IP Address</th>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>
            {sessions.map(session => (
              <tr key={session._id}>
                <td>{new Date(session.loginTime).toLocaleString()}</td>
                <td>{session.logoutTime ? new Date(session.logoutTime).toLocaleString() : 'Active'}</td>
                <td>{session.ipAddress}</td>
                <td>{session.userId.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default SessionList;
