import React, { useState } from "react";

import { Col, Container, Form, Row, Button } from "react-bootstrap";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../Firebase/Firebase.init";
import { ToastContainer, toast } from "react-toastify";
import SocialLogin from "../SocialLogin/SocialLogin";
const Login = () => {
  let navigate = useNavigate();
  let location = useLocation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errormsg, setError] = useState("");
  let from = location.state?.from?.pathname || "/";
  // sign In With Email And  Password
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  // reset password
  const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);

  const emailHandler = (event) => {
    setEmail(event.target.value);
  };
  const passwordHandler = (event) => {
    setPassword(event.target.value);
  };
  let errorElement;
  if (error) {
    errorElement = <>Error: {error?.message}</>;
  }
  if (user) {
    navigate(from, { replace: true });
  }
  // login handler
  const loginHandler = (event) => {
    event.preventDefault();
    if (email) {
      if (password.length <= 5) {
        setError("  Password at least 6 character!");
      } else if (email.length !== 0 && password.length !== 0) {
        if (!/(?=.*?[#?!@$%^&-])/.test(password)) {
          setError("Password Shoild be at least one spesian character!");
        } else {
          setError("");
          signInWithEmailAndPassword(email, password);
        }
      }
    } else {
      toast("Input your email!");
    }
  };

  // handle Google Sign

  const handleResetPassword = async () => {
    if (email) {
      await sendPasswordResetEmail(email);
      toast("Check your email send rest password link! ");
    } else {
      toast("Input your email!");
    }
  };
  return (
    <div className="section_pd">
      <Container>
        <Row className="justify-content-center mt-5">
          <Col lg={5} className="text-center">
            <h2 className="sign_text">Sign in</h2>
            <Form onSubmit={loginHandler} className="login_form">
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control
                  onChange={emailHandler}
                  type="email"
                  placeholder="Enter email"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control
                  onChange={passwordHandler}
                  type="password"
                  placeholder="Password"
                />
              </Form.Group>
              <p className="text-danger">{errormsg}</p>
              <p className="text-danger">{errorElement}</p>
              <Form.Group className="mb-3">
                <Button variant="primary" className="login_btn" type="submit">
                  Login
                </Button>
              </Form.Group>
            </Form>

            <p className="another_option">or use one of these options</p>
            <SocialLogin />
            <div className="mt-2">
              <p>
                You are new. <Link to="/register">Create a new account</Link>
              </p>
              <p>
                <button
                  className="reset_password"
                  onClick={handleResetPassword}
                >
                  Reset Password
                </button>
              </p>
            </div>
          </Col>
        </Row>
        <ToastContainer />
      </Container>
    </div>
  );
};

export default Login;
