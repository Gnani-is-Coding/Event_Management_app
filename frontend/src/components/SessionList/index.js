import React, { useState, useEffect } from 'react';
import './index.css'; 

function SessionList() {
  const [sessions, setSessions] = useState([]);

  useEffect(() => {
    // Fetch sessions from the API
    fetchSessions();
  }, []);

  const fetchSessions = async () => {
    // Implement API call to fetch sessions
    // setSessions(fetchedSessions);
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
            </tr>
          </thead>
          <tbody>
            {sessions.map(session => (
              <tr key={session.id}>
                <td>{new Date(session.loginTime).toLocaleString()}</td>
                <td>{session.logoutTime ? new Date(session.logoutTime).toLocaleString() : 'Active'}</td>
                <td>{session.ipAddress}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default SessionList;
