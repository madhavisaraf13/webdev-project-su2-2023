import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { Container, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FiBookOpen, FiLogIn, FiLock, FiUser } from 'react-icons/fi';
import WebFont from 'webfontloader';
const SERVER_API_URL = 'http://localhost:4000';

const Login = ({ onLogin }) => {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const navigate = useNavigate();

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const response = await axios.post(`${SERVER_API_URL}/login`, formData, { withCredentials: true });
      onLogin(response.data.user);
      navigate('/home'); // Redirect to home page
    } catch (error) {
      console.log(error);
      alert('Login failed.');
    }
  };

  // Load custom font and set background color
  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Cinzel:400,700', 'sans-serif'],
      }
    });

    document.body.style.backgroundImage = 'url(https://wallpaperaccess.com/full/1412206.jpg)';
    document.body.style.backgroundSize = 'cover';
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
        <Link class="nav-link" to="/home">Home</Link>
        <Link className="nav-link" to="/register">   Register  </Link>
        <Link class="nav-link active" aria-current="page">Login</Link>
        <Link className="nav-link" to="/search"> Search Recipes  </Link> 
      </div>
    </div>
  </div>
</nav>
    <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: '100vh' }}>
    <Card className="w-100" style={{ maxWidth: '400px', padding: '20px', borderRadius: '10px' }}>
      <div className="w-100" style={{ maxWidth: '400px', fontFamily: 'Cinzel, sans-serif' }}>
        <h3 className="text-center mb-4"><FiBookOpen /> Login</h3>
        <Form onSubmit={handleSubmit}>

          <Form.Group>
            <Form.Label><FiUser /> Username</Form.Label>
            <Form.Control type="text" name="username" onChange={handleChange} />
          </Form.Group>

          <Form.Group>
            <Form.Label><FiLock /> Password</Form.Label>
            <Form.Control type="password" name="password" onChange={handleChange} />
          </Form.Group>

          <Link to="/register" className="btn btn-link d-block mb-2" style={{ color: '#915f31' }}>Don't have an account? Register</Link>
          <div className="d-flex justify-content-center">
            <Button variant="primary" type="submit" style={{ backgroundColor: '#111111', borderColor: '#111111' }}>
            <FiLogIn className="mr-1" /> Login
            </Button>
          </div>
        </Form>
      </div>
      </Card>
    </Container>
    </Container>
  );
};

export default Login;
