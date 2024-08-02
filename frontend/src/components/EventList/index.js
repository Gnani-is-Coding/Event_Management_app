import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './index.css'

function EventList() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    // Fetch events from API
    // For demonstration, we'll use dummy data
    setEvents([
      { id: 1, name: 'Tech Conference', date: '2024-09-15', location: 'San Francisco' },
      { id: 2, name: 'Music Festival', date: '2024-07-20', location: 'New York' },
    ]);
  }, []);

  const handleDeleteEvent = (id) => {
    // Implement delete logic here
    setEvents(events.filter(event => event.id !== id));
  };

  return (
    <div className="event-list">
      <h2>My Events</h2>
      <Link to="/events/new" className="btn-add">Add New Event</Link>
      {events.length === 0 ? (
        <p>No events found. Create a new event to get started!</p>
      ) : (
        <ul>
          {events.map(event => (
            <li key={event.id} className="event-item">
              <h3>{event.name}</h3>
              <p>{event.date} - {event.location}</p>
              <div className="event-actions">
                <Link to={`/events/${event.id}`}>Edit</Link>
                <button onClick={() => handleDeleteEvent(event.id)} className="delete-btn">Delete</button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default EventList;