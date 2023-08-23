import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { Container, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FiBookOpen, FiUser, FiLock, FiUsers } from 'react-icons/fi';
import WebFont from 'webfontloader';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
const SERVER_API_URL = 'http://localhost:4000';

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    type: '',
    firstName: '',
    lastName: ''
  });

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const navigate = useNavigate();

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      console.log(formData);
      await axios.post(`${SERVER_API_URL}/register`, formData);
      alert('Registration successful!');
      navigate('/login'); // Redirect to login page
    } catch (error) {
      alert('Registration failed.');
    }
  };

  // Set background image of the body
  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Cinzel:400,700', 'sans-serif'],
      }
    });

    document.body.style.backgroundImage = 'url(https://img.freepik.com/free-photo/ingredients-cabbage-carrot-pie-cabbage-carrots-eggs-flour-milk-butter-spices-white-background_127032-2819.jpg)';
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
        <Link class="nav-link active" aria-current="page">Register</Link>
        <Link className="nav-link" to="/login"> Login</Link>
        <Link className="nav-link" to="/search"> Search Recipes  </Link> 
      </div>
    </div>
  </div>
</nav>
    <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: '100vh', fontFamily: 'Cinzel, sans-serif' }}>
      <Card className="w-100" style={{ maxWidth: '400px', padding: '20px', borderRadius: '10px' }}>
        <h3 className="text-center mb-4" ><FiBookOpen /> Registration</h3>
        <Form onSubmit={handleSubmit}>

          <Form.Group>
            <Form.Label><FiUser /> Username</Form.Label>
            <Form.Control type="text" name="username" onChange={handleChange} style={{ borderColor: '#915f31' }} />
          </Form.Group>

          <Form.Group>
            <Form.Label><FiLock /> Password</Form.Label>
            <Form.Control type="password" name="password" onChange={handleChange} style={{ borderColor: '#915f31' }} />
          </Form.Group>

          <Form.Group>
            <Form.Label>User Type</Form.Label>
            <Form.Control as="select" name="type" onChange={handleChange} style={{ borderColor: '#915f31' }}>
              <option selected value="user">Food Enthusiast</option>
              <option value="blogger">Food Blogger</option>
              <option value="admin">Club Admin</option>
            </Form.Control>
          </Form.Group>

          <Form.Group>
            <Form.Label>First Name</Form.Label>
            <Form.Control type="text" name="firstName" onChange={handleChange} style={{ borderColor: '#915f31' }} />
          </Form.Group>

          <Form.Group>
            <Form.Label>Last Name</Form.Label>
            <Form.Control type="text" name="lastName" onChange={handleChange} style={{ borderColor: '#915f31' }} />
          </Form.Group>

          <Link to="/login" className="btn btn-link d-block mb-2" style={{ color: '#915f31' }}>Already have an account? Login</Link>

          <div className="d-flex justify-content-center">
            <Button variant="primary" type="submit" style={{ backgroundColor: '#111111', borderColor: '#111111' }}>
              <FiUsers className="mr-2" /> Register
            </Button>
          </div>

        </Form>
      </Card>
    </Container>
    </Container>
  );
};

export default Register;