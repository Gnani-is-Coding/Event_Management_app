import React from 'react';
import './index.css'

const events = [
  {
    title: "Tech Conference 2024",
    date: "August 15, 2024",
    location: "San Francisco, CA",
    description: "Annual tech conference featuring the latest innovations in AI, VR, and blockchain technologies.",
    weather: "72°F, Sunny"
  },
  {
    title: "Product Launch",
    date: "September 5, 2024",
    location: "New York, NY",
    description: "Launching our new AI-powered smart home device with interactive demos and networking opportunities.",
    weather: "78°F, Partly Cloudy"
  }
];

const EventCard = ({ title, date, location, description, weather }) => (
  <div className="event-card">
    <div className="event-details">
      <h3 className="event-title">{title}</h3>
      <p className="event-info">{date} • {location}</p>
      <p className="event-description">{description}</p>
      <div className="event-actions">
        <span className="weather-info">{weather}</span>
        <div>
          <button className="btn btn-danger">Delete</button>
          <button className="btn btn-primary">Edit</button>
        </div>
      </div>
    </div>
  </div>
);


const EventList = () => (

  <section id="events" className="event-list">
    <h1>Your Upcoming Events</h1>
    <div className="events-grid">
      {events.map((event, index) => (
        <EventCard key={index} {...event} />
      ))}
    </div>
  </section>
);

export default EventList;