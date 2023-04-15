// import React, { useState } from "react";
import { message } from "antd";
import axios from "axios";
import { useState } from "react";
import { Alert, Button, Col, Container, Form, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";


const LoginPage = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();


  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };



  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    setErrorMessage("");

    //   try {
    //     const isLoggedIn = await axios.post("https://localhost:7111/api/user/login", {
    //       email,
    //       password,
    //     });

    //     if (isLoggedIn) {
    //       navigate('/home');
    //     } else {
    //       message.error("Invalid email or password");
    //     }
    //   } catch (error) {
    //     console.error(error);
    //   } finally {
    //     setIsLoading(false);
    //   }
    // };
    try {
      const response = await axios.post("https://localhost:7111/api/user/login", {
        email,
        password,
      });

      if (response.status === 200) {
        navigate("/home");
      } else {
        setErrorMessage("Invalid email or password");
      }
    } catch (error) {
      if (error.response) {
        if (error.response.status === 400) {
          setErrorMessage("Invalid email or password");
        } else if (error.response.status === 401) {
          setErrorMessage("Incorrect email or password");
        } else {
          setErrorMessage("Something went wrong. Please try again later.");
        }
      } else {
        setErrorMessage("Network error. Please try again later.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Container fluid className="bg-light vh-100 d-flex align-items-center justify-content-center">
      <Row className="justify-content-center align-items-center w-100">
        <Col md={6} className="bg-white p-5 rounded">
          <h2 className="text-center mb-4">House Rental Login</h2>
          {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}
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

            <Button
              variant="primary"
              type="submit"
              className="w-100 mt-3"
              disabled={isLoading}
            >
              {isLoading ? "Loading..." : "Login"}
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
