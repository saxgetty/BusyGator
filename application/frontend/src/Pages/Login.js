/*
 * FILE: Login.js
 * 
 * AUTHOR(S): Aaron Carlson, Siqi Guo, Janvi Patel, Vishal Ramanand Sharma,
 * Abdullah Sharaf, Samantha Saxton-Getty, Elyssa Mari Tapawan
 *
 * PURPOSE: This file contains the page for logging in and
 * out of the website.
 */

import React, { useState, useContext } from 'react';
import { Card, Form, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { checkUserCredential } from '../services/userService';
import { toastError, toastSuccess } from '../ToastService';
import DataContext from '../DataContext/DataContext';
const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const setUserInfo = useContext(DataContext)?.setUserInfo;

  // logout the user
  const handleLogout = () => {
    setUserInfo({
      email: null,
      firstName: null,
      lastName: null,
      userId: null,
    });
  };

  const onFormSubmit = (e) => {
    e.preventDefault();

    const user = { email, password };
    // send the username and password to the serve
    // set the state of the user
    checkUserCredential(user).then((data) => {
      if (data.data.userId !== null) {
        toastSuccess('Login Successful');
        setUserInfo({
          email,
          firstName: data.data.firstName,
          lastName: data.data.lastName,
          userId: data.data.userId,
        });
        navigate('/');
      } else {
        toastError(data.data.message);
      }
    });
  };

  return (
    <>
      <div className="setHeight">
        <Card id="login_signupcard" className="card-center">
          <Card.Header className="text-center">
            <h1>Login</h1>
          </Card.Header>
          <Card.Body>
            <Card.Text className="text-right">
              All fields with an asterick (*) are mandatory
            </Card.Text>
            <Form onSubmit={onFormSubmit}>
              <Form.Group className="mb-3">
                <Form.Label>Email *</Form.Label>
                <Form.Control
                  value={email}
                  placeholder="Email"
                  onChange={({ target }) => setEmail(target.value)}
                  type="text"
                  className="form-control"
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Password *</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  aria-label="Password"
                  value={password}
                  onChange={({ target }) => setPassword(target.value)}
                />
              </Form.Group>

              <Link to="/ForgotPassword">Forgot Password?</Link>

              <Form.Group className="text-center">
                <Button
                  id="login_signin_button"
                  variant="primary"
                  type="submit"
                >
                  Login
                </Button>
              </Form.Group>
            </Form>
            <Card.Text id="login_signup_text" className="text-center">
              Don't have an account?
              <span className="space"></span>
              <Link to="/Signup">Sign Up Here</Link>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default Login;
