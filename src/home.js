import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Navbar, Nav, Container, Card, Row, Col } from 'react-bootstrap';
import { FiUser, FiSearch, FiClipboard, FiPlus } from 'react-icons/fi';
import WebFont from 'webfontloader';
import { Link, useLocation } from "react-router-dom";
import Search from './search';

const SERVER_API_URL = 'http://localhost:4000';

const Home = () => {

  useEffect(() => {

    WebFont.load({
      google: {
        families: ['Cinzel:400,700', 'sans-serif'],
      },
    });
  }, []);
  

  return (
    <div style={{
      fontFamily: 'Cinzel, sans-serif',
      padding: '20px',
      backgroundImage: `url('https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.com%2Ffree-photos-vectors%2Frecipe-background&psig=AOvVaw3H7iGQWH6nN43fm0LNaVOU&ust=1692334520366000&source=images&cd=vfe&opi=89978449&ved=0CA8QjRxqFwoTCJDyhcLz4oADFQAAAAAdAAAAABAE')`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'fixed',
      minHeight: '100vh'
  }}>
      <Search/>
      <Link className="list-group" to="/login">   Login   </Link>
      <Link className="list-group" to="/register">   Register   </Link>
      <h3>Register</h3>
           


    </div>
  );
};

export default Home;
