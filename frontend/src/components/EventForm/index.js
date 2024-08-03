import React, { useState } from 'react';
import './index.css'
import EventList from '../EventList';
import { useEvents } from '../../context';

const CreateEventForm = () => {
  const [eventName, setEventName] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [eventLocation, setEventLocation] = useState('');
  const [eventDescription, setEventDescription] = useState('');
  const {createEventInDB} = useEvents()

  
  

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log({ eventName, eventDate, eventLocation, eventDescription });

    createEventInDB({ eventName, eventDate, eventLocation, eventDescription })

    setEventName('')
    setEventDate('')
    setEventLocation('')
    setEventDescription('')
    
  };

  return (
    <div className='container'>
    <div className='event-form-container'>
      <img src="/appointments-img.png" alt="events" className='appointment-img'/>
    <section id="New" className="create-event">
      <h2>Create New Event</h2>
      <form  className="create-event-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="eventName">Event Name</label>
          <input
            type="text"
            id="eventName"
            value={eventName}
            onChange={(e) => setEventName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="eventDate">Date</label>
          <input
            type="date"
            id="eventDate"
            value={eventDate}
            onChange={(e) => setEventDate(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="eventLocation">Location</label>
          <input
            type="text"
            id="eventLocation"
            value={eventLocation}
            onChange={(e) => setEventLocation(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="eventDescription">Description</label>
          <textarea
            id="eventDescription"
            value={eventDescription}
            onChange={(e) => setEventDescription(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Create Event</button>
      </form>
    </section>
    </div>

    <section>
      <EventList/>
    </section>
    </div>
  );
};

export default CreateEventForm;