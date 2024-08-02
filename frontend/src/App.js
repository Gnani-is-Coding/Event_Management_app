import React, { useState } from 'react';
import { BrowserRouter,Router,Route } from 'react-router-dom';
import Header from './components/Header';
import Login from './components/Login';
import Register from './components/Register';
import EventList from './components/EventList';
import EventForm from './components/EventForm';
import SessionList from './components/SessionList';
import './App.css';

function App() {
  const [user, setUser] = useState(null);

  return (
    <BrowserRouter>
      <div className="app">
        <Header user={user} setUser={setUser} />
        <main>
          <Router>
            <Route exact path="/" element=<EventList/> />
            <Route path="/login" render={(props) => <Login {...props} setUser={setUser} />} />
            <Route path="/register" element={<Register/>} />
            <Route path="/events/new" element={<EventForm/>} />
            <Route path="/events/:id" element={<EventForm/>} />
            <Route path="/sessions" element={<SessionList/>} />
          </Router>
        </main>
        <footer>
          <p>&copy; 2024 Event Manager. All rights reserved.</p>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;