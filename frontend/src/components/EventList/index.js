import React, { useState } from 'react';
import { Edit2, Save, X } from 'lucide-react';
import './index.css';
import { useEvents } from '../../context';
import Cookies from "js-cookie"

const EventCard = ({ event, onEdit, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedEvent, setEditedEvent] = useState(event);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = async () => {
    
    const url = `http://localhost:3000/events/${event._id}`
      console.log(url, "url")
      
    try {
      // Simulated API call
      const options = {
        method: 'PUT',
        headers: {
          'Content-Type': "application/json",
          'Authorization': `Bearer ${Cookies.get("jwt_token")}`
        },
        body: JSON.stringify({editedEvent})  
      }

      const response = await fetch(url, options);
      const result = await response.json();
      console.log(result, "event update result")

      onEdit(editedEvent);
      setIsEditing(false);

    } catch (error) {
      console.error("Error updating event:", error);
    }
  };

  const handleCancel = () => {
    setEditedEvent(event);
    setIsEditing(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedEvent(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="event-card">
      <div className="event-details">
        {isEditing ? (
          <>
            <input
              className="edit-input"
              name="title"
              value={editedEvent.title}
              onChange={handleChange}
            />
            <input
              className="edit-input"
              name="date"
              value={editedEvent.date}
              onChange={handleChange}
            />
            <input
              className="edit-input"
              name="location"
              value={editedEvent.location}
              onChange={handleChange}
            />
            <textarea
              className="edit-input"
              name="description"
              value={editedEvent.description}
              onChange={handleChange}
            />
          </>
        ) : (
          <>
            <h3 className="event-title">{event.title}</h3>
            <p className="event-info">{event.date} • {event.location}</p>
            <p className="event-description">{event.description}</p>
          </>
        )}
        <div className="event-actions">
          <span className="weather-info">{event.weather}</span>
          <div>
            {isEditing ? (
              <div className='delete-edit-container'>
                <button className="btn btn-primary" onClick={handleSave}><Save size={16} /> Save</button>
                <button className="btn btn-secondary" onClick={handleCancel}><X size={16} /> Cancel</button>
              </div>
            ) : (
              <div className='delete-edit-container'>
                <button className="btn btn-danger" onClick={() => onDelete(event.id)}>Delete</button>
                <button className="btn btn-primary" onClick={handleEdit}><Edit2 size={16} /> Edit</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const EventList = () => {
  const {eventList, setEventList} = useEvents()

  const handleEdit = (updatedEvent) => {
    setEventList(prevEvents => 
      prevEvents.map(event => 
        event._id === updatedEvent._id ? updatedEvent : event
      )
    );
  };

  const handleDelete = (id) => {
    setEventList(prevEvents => prevEvents.filter(event => event.id !== id));
  };

  return (
    <section id="events" className="event-list">
      <h1>Your Upcoming Events</h1>
      {eventList.length > 0 ? (<div className="events-grid">
        {eventList.map((event) => (
          <EventCard 
            key={event._id}
            event={event} 
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        ))}
      </div>):(
        <h1>None at the Moment</h1>
      )}
      
    </section>
  );
};

export default EventList;