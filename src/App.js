import React, {useState} from 'react';
import { Routes, Route, Navigate } from "react-router";
import { HashRouter } from "react-router-dom";
import { configureStore } from '@reduxjs/toolkit';
import {Provider} from "react-redux";

import './App.css';
import Home from './home';
import Register from './register';
import Login from './login';
import Profile from './profile';
import './App.css';
import RecipeList from './recipe-list';
import recipesReducer from './reducers/recipes-reducer';
import Delete from './delete';
import CreateRecipe from './create-recipe';
const store = configureStore({reducer: {recipes: recipesReducer}});

const App = () => {
  const [user, setUser] = useState(null);

  const handleLogin = (loggedInUser) => {
    setUser(loggedInUser);
  };

  return (
    <div>
      <HashRouter>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<Home user={user} />} />
          <Route path="/home" element={<Home user={user} />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          <Route path="/profile" element={<Profile user={user} />} />
          <Route path="/delete-account" element={<Delete/>} />
          <Route path="/create-recipe" element={<CreateRecipe/>} />

          <Route path="/recipe" element={<RecipeList />} />
        </Routes>
      </Provider>
      </HashRouter>
    </div>
  );
};

export default App;
