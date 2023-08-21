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


function CreateRecipe() {

    const [formData, setFormData] = useState({
        title: '',
        image: '',
        vegetarian: '',
        cuisine: '',
        readyInMinutes: '',
        ingredients: '',
        instructions: ''
    });

    const handleChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const navigate = useNavigate();

    const handleSubmit = async e => {
        e.preventDefault();
        try {
            console.log(formData);
            await axios.post(`${SERVER_API_URL}/create-recipe`, formData);
            
            alert('Recipe creation successful!');
            //   navigate('/login'); // Redirect to login page
        } catch (error) {
            alert('Recipe creation failed');
        }
    };

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
                        </div>
                    </div>
                </div>
            </nav>

            <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: '100vh', fontFamily: 'Cinzel, sans-serif' }}>
                <Card className="w-100" style={{ maxWidth: '400px', padding: '20px', borderRadius: '10px' }}>
                    <h3 className="text-center mb-4" ><FiBookOpen /> Recipe Creation</h3>
                    <Form onSubmit={handleSubmit}>

                        <Form.Group>
                            <Form.Label><FiUser /> Title</Form.Label>
                            <Form.Control name="title" onChange={handleChange} style={{ borderColor: '#915f31' }} />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label><FiLock /> Image Link </Form.Label>
                            <Form.Control name="image" onChange={handleChange} style={{ borderColor: '#915f31' }} />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Vegetarian</Form.Label>
                            <Form.Control as="select" name="vegetarian" onChange={handleChange} style={{ borderColor: '#915f31' }}>
                                <option selected value="true">True</option>
                                <option value="false">False</option>
                            
                            </Form.Control>
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Cuisine</Form.Label>
                            <Form.Control type="text" name="cuisine" onChange={handleChange} style={{ borderColor: '#915f31' }} />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Ready in Minutes</Form.Label>
                            <Form.Control type="text" name="readyInMinutes" onChange={handleChange} style={{ borderColor: '#915f31' }} />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Ingredients</Form.Label>
                            <Form.Control type="text" name="ingredients" onChange={handleChange} style={{ borderColor: '#915f31' }} />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Instructions</Form.Label>
                            <Form.Control type="text" name="instructions" onChange={handleChange} style={{ borderColor: '#915f31' }} />
                        </Form.Group>

                        

                        <div className="d-flex justify-content-center">
                            <Button variant="primary" type="submit" style={{ backgroundColor: '#111111', borderColor: '#111111' }}>
                                <FiUsers className="mr-2" /> Create Recipe!
                            </Button>
                        </div>

                    </Form>
                </Card>
            </Container>
        </Container>


    );
}

export default CreateRecipe;