import React, { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import "./index.css";
import { login } from "../../api/index";
import { useNavigate } from "react-router-dom";

import {getLoggedInUser, isUserLoggedIn } from "../../api/index"
export default function Login() {
  const user = getLoggedInUser()
  const [loginFormData, setLoginFormData] = useState({});
  const navigate = useNavigate()
  const handleLoginFormChange = (field) => (e) => {
    setLoginFormData({ ...loginFormData, [field]: e.target.value });
  };
  const handleLogin = async (formData) => {
    const response = await login(formData);
    if(response.success) {
      if(user.is_admin){
        navigate("/officer-panel")
      }else {
        navigate(`/department`)
      }
    }
  };
  console.log("=====loginFormData", loginFormData)
  return (
    <Container className="login-form">
        <div className="mb-3">
          <div className="form-label">Email</div>
          <input
            type="text"
            onChange={handleLoginFormChange("email")}
            value={loginFormData.email || ""}
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <div className="form-label">Password</div>
          <input
            type="password"
            placeholder="Enter password"
            onChange={handleLoginFormChange("password")}
            value={loginFormData.password || ""}
            className="form-control"
          />
        </div>
        <Button
          variant="primary"
          type="submit"
          onClick={() => handleLogin(loginFormData)}
        >
          Login
        </Button>
    </Container>
  );
}
