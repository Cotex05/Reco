import React, { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import "./index.css";
import { login } from "../../api/index";
export default function Login() {
  const [loginFormData, setLoginFormData] = useState({});
  const handleLoginFormChange = (field) => (value) => {
    setLoginFormData({ ...loginFormData, [field]: value });
  };
  const handleLogin = (formData) => {
    login(formData);
  };
  return (
    <Container className="login-form">
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter email"
            onChange={handleLoginFormChange("email")}
          />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter password"
            onChange={handleLoginFormChange("password")}
          />
        </Form.Group>
        <Button
          variant="primary"
          type="submit"
          onClick={() => handleLogin(loginFormData)}
        >
          Login
        </Button>
      </Form>
    </Container>
  );
}
