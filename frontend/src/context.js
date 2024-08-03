import { createContext, useContext, useEffect, useState } from "react";


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
      {
        id: 4,
        title: "Product Launch",
        date: "September 5, 2024",
        location: "New York, NY",
        description: "Launching our new AI-powered smart home device with interactive demos and networking opportunities.",
        weather: "78°F, Partly Cloudy"
      },
      {
        id: 5,
        title: "Product Launch",
        date: "September 5, 2024",
        location: "New York, NY",
        description: "Launching our new AI-powered smart home device with interactive demos and networking opportunities.",
        weather: "78°F, Partly Cloudy"
      },
    // ... other events
  ];

export const EventsContext = ({children}) => {
    const [eventList, setEventList] = useState(events);

    useEffect(() => {
        fetchEvents()
    }, [])

    const fetchEvents = async() => {
        //fetch api 
    }

    const updateEventsInDB = () => {
        //PUT events in DB
    } 

    return (
        <ContextObject.Provider value={{eventList, setEventList}}> 
            {children}
        </ContextObject.Provider>
    )
}


export const useEvents = () => {
    return useContext(ContextObject)
}