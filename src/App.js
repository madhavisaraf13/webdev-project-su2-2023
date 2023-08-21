import React, {useState} from 'react';
import { Routes, Route, Navigate } from "react-router";
import { HashRouter } from "react-router-dom";
import { configureStore } from '@reduxjs/toolkit';
import {Provider} from "react-redux";

import './App.css';
import Home from './home';
import Register from './register';
import Login from './login';
import RecipeList from './recipe-list';
import recipesReducer from './reducers/recipes-reducer';
import RecipeById from './recipe-list/recipe-by-id';

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
          <Route path="/" element={<Navigate to="/home"/>} />
          <Route path="/home" element={<Home user={user} />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          <Route path="/recipe" element={<RecipeList />} />
          <Route path="/recipe/details/:id" element={<RecipeById />} />
        </Routes>
      </Provider>
      </HashRouter>
    </div>
  );
};

export default App;
