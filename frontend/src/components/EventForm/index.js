import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './index.css'

function EventForm() {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');
  const [weather, setWeather] = useState(null);

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      // Fetch event details if editing an existing event
      fetchEventDetails();
    }
  }, [id]);

  const fetchEventDetails = async () => {
    // Implement API call to fetch event details
    // Update state with fetched event details
  };

  const fetchWeather = async () => {
    // Implement API call to fetch weather for the location
    // setWeather(weatherData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const eventData = { name, date, location, description };
    
    if (id) {
      // Update existing event
      // Implement API call to update event
    } else {
      // Create new event
      // Implement API call to create event
    }

    // Redirect to event list on success
      navigate('/events')
  };

  return (
    <div className="event-form">
      <h2>{id ? 'Edit Event' : 'Create New Event'}</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Event Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="date">Date:</label>
          <input
            type="date"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="location">Location:</label>
          <input
            type="text"
            id="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
          />
          <button type="button" onClick={fetchWeather}>Check Weather</button>
        </div>
        {weather && (
          <div className="weather-info">
            <h3>Weather for {location}</h3>
            <p>{weather.description}</p>
            <p>Temperature: {weather.temperature}°C</p>
          </div>
        )}
        <div>
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <button type="submit">{id ? 'Update Event' : 'Create Event'}</button>
      </form>
    </div>
  );
}

export default EventForm;