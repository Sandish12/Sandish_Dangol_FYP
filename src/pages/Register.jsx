import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const RegisterPage = () => {

    const navigate=useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    password: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post("https://localhost:7111/api/user/register", formData)
      .then(response => {
        if (response.status === 200) {
            navigate("/login"); // Redirect to the login page
          }
      })
      .catch(error => {
        console.log(error);
        // Handle the error if needed
      });
  };

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  return (
    <Container fluid className="bg-light vh-100 d-flex align-items-center justify-content-center">
      <Row className="justify-content-center align-items-center w-100">
        <Col md={6} className="bg-white p-5 rounded">
          <h2 className="text-center mb-4">House Rental Registration</h2>
          <Form onSubmit={handleSubmit}>
            <Row>
              <Col md={6}>
                <Form.Group controlId="formBasicFirstName">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter first name" name="firstName" value={formData.firstName} onChange={handleChange} />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="formBasicLastName">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter last name" name="lastName" value={formData.lastName} onChange={handleChange} />
                </Form.Group>
              </Col>
            </Row>
            <Form.Group controlId="formBasicPhone">
              <Form.Label>Phone</Form.Label>
              <Form.Control type="tel" placeholder="Enter phone number" name="phone" value={formData.phone} onChange={handleChange} />
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" name="email" value={formData.email} onChange={handleChange} />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" name="password" value={formData.password} onChange={handleChange} />
            </Form.Group>

            <Button variant="primary" type="submit" className="w-100 mt-3">
              Register
            </Button>
          </Form>
          <p className="text-center mt-3">
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default RegisterPage;
