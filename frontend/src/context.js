import { createContext, useContext, useEffect, useState } from "react";
import Cookies from "js-cookie"


const ContextObject = createContext({})

const events = [
    {
      id: 1,
      title: "Tech Conference 2024",
      date: "August 15, 2024",
      location: "San Francisco, CA",
      description: "Annual tech conference featuring the latest innovations in AI, VR, and blockchain technologies.",
      weather: "72°F, Sunny"
    },
    {
      id: 2,
      title: "Product Launch",
      date: "September 5, 2024",
      location: "New York, NY",
      description: "Launching our new AI-powered smart home device with interactive demos and networking opportunities.",
      weather: "78°F, Partly Cloudy"
    },
    {
        id: 3,
        title: "Product Launch",
        date: "September 5, 2024",
        location: "New York, NY",
        description: "Launching our new AI-powered smart home device with interactive demos and networking opportunities.",
        weather: "78°F, Partly Cloudy"
      }, //TODO: Make API call to weather API
     
    // ... other events
  ];

export const EventsContext = ({children}) => {
    const [eventList, setEventList] = useState([]);

    useEffect(() => {
        fetchEvents()
    }, [])

    const fetchEvents = async() => {
      const url = "http://localhost:3000/events/"

      const options = {
        method: 'GET',
        headers: {
          'Content-Type': "application/json",
          'Authorization': `Bearer ${Cookies.get("jwt_token")}`
        }
      }

      const response = await fetch(url, options);
      const result = await response.json();
      console.log(result, "result")
       
      if (response.ok) {
        setEventList(result)
      } 
    }

    const updateEventsInDB = () => {
        //PUT events in DB
    } 

    const createEventInDB = async ({ eventName, eventDate, eventLocation, eventDescription }) => {
      const url = "http://localhost:3000/events/"

      const options = {
        method: 'POST',
        headers: {
          'Content-Type': "application/json",
          'Authorization': `Bearer ${Cookies.get("jwt_token")}`
        },
        body: JSON.stringify({ title:eventName, date: eventDate, location: eventLocation, description: eventDescription }),
      }

      const response = await fetch(url, options);
      const result = await response.json();
      console.log(result, "result")

      if (response.ok) {
        setEventList(prevEvents => [...prevEvents, { title: eventName, date: eventDate, location: eventLocation, description:eventDescription }])
      }
    }

    return (
        <ContextObject.Provider value={{eventList, setEventList, createEventInDB}}> 
            {children}
        </ContextObject.Provider>
    )
}


export const useEvents = () => {
    return useContext(ContextObject)
}