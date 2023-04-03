import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate=useNavigate();
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrorMessage("");
    axios
      .post("https://localhost:7111/api/user/login", {
        email: email,
        password: password,
      })
      .then((response) => {
        if (response.status === 200) {
          navigate("/"); // Redirect to the login page
        }
      })
      .catch((error) => {
        // handle login error
        console.error(error);
        setErrorMessage("Invalid email or password");
      });
  };

  return (
    <Container fluid className="bg-light vh-100 d-flex align-items-center justify-content-center">
      <Row className="justify-content-center align-items-center w-100">
        <Col md={6} className="bg-white p-5 rounded">
          <h2 className="text-center mb-4">House Rental Login</h2>
          {errorMessage && (
            <div className="alert alert-danger" role="alert">
              {errorMessage}
            </div>
          )}
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={handleEmailChange}
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={handlePasswordChange}
              />
            </Form.Group>

            <Button variant="primary" type="submit" className="w-100 mt-3">
              Login
            </Button>
          </Form>
          <p className="mt-3 text-center">
            Don't have an account? <Link to="/register">Register now!</Link>
          </p>
        </Col>

       
      </Row>
    </Container>
  );
};

export default LoginPage;
