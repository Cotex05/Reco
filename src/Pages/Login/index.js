import React, { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import "./index.css";
import { login } from "../../api/index";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    login({ email: email, password: password });
  };
  return (
    <Container className="login-form">
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit" onClick={(e) => handleLogin(e)}>
          Login
        </Button>
      </Form>
    </Container>
  );
}
