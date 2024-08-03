import React from 'react';
import { BrowserRouter,Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Login from './components/Login';
import Register from './components/Register';
import EventForm from './components/EventForm';
import SessionList from './components/SessionList';
import './App.css';
import { EventsContext } from './context';

function App() {
  

  return (
    <BrowserRouter>
    <EventsContext>
      <div className="app">
        <Header/>
        <main>
          <Routes>
            <Route exact path="/" element={<EventForm/>} />
            <Route path="/login" element= {<Login/>} />
            <Route path="/register" element={<Register/>} />
            <Route path="/sessions" element={<SessionList/>} />
          </Routes>
        </main>
        {/* <footer>
          <p>&copy; 2024 Event Manager. All rights reserved.</p>
        </footer> */}
      </div>
      </EventsContext>
    </BrowserRouter>
  );
}

export default App;