import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Navbar, Nav, Container, Card, Row, Col } from 'react-bootstrap';
import { FiUser, FiSearch, FiClipboard, FiPlus } from 'react-icons/fi';
import WebFont from 'webfontloader';
import { Link, useLocation } from "react-router-dom";
import SearchBar from './SearchBar';
//import './index.css';
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css"
	rel="stylesheet"/>
const SERVER_API_URL = 'http://localhost:4000';

const Home = () => {

  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Cinzel:400,700', 'sans-serif'],
      }
    });

    document.body.style.backgroundImage = 'url(https://www.shutterstock.com/shutterstock/photos/370298699/display_1500/stock-photo-notepad-for-your-recipe-with-herbs-and-spices-over-black-stone-background-top-view-with-copy-space-370298699.jpg)';
    //document.body.style.backgroundSize = 'cover';
    return () => {
      document.body.style.backgroundImage = null;
    };
  }, []);
  

  return (
    <Container>
    <nav class="navbar navbar-expand-lg navbar-light bg-light nav-pills">
  <div class="container-fluid">
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a class="nav-link active" aria-current="page" href="#">Home</a>
        <Link className="nav-link" to="/register">   Register  </Link>
        <Link className="nav-link" to="/login">  Login   </Link>
      </div>
    </div>
  </div>
</nav>

    <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: '100vh'}}>
    {/* <div style={{
      fontFamily: 'Cinzel, sans-serif',
      padding: '20px',
      backgroundImage: `url('https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.com%2Ffree-photos-vectors%2Frecipe-background&psig=AOvVaw3H7iGQWH6nN43fm0LNaVOU&ust=1692334520366000&source=images&cd=vfe&opi=89978449&ved=0CA8QjRxqFwoTCJDyhcLz4oADFQAAAAAdAAAAABAE')`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'fixed',
      minHeight: '100vh'
  }}> */}
      <SearchBar/>
      {/* <Link className="list-group" to="/login">   Login   </Link>
      <Link className="list-group" to="/register">   Register   </Link> */}
    {/* </div> */}
    </Container>
    </Container>
  );
};

export default Home;
