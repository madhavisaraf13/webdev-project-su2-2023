import React, {useState} from 'react';
import { Routes, Route, Navigate } from "react-router";
import Home from './home';
import { HashRouter } from "react-router-dom";
import Register from './register';
import Login from './login';
import Profile from './profile';
import './App.css';

const App = () => {
  const [user, setUser] = useState(null);

  const handleLogin = (loggedInUser) => {
    setUser(loggedInUser);
  };

  return (
    <div>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home user={user} />} />
          <Route path="/home" element={<Home user={user} />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          <Route path="/profile" element={<Profile user={user} />} />

        </Routes>
      </HashRouter>


    </div>

  );
};

export default App;
