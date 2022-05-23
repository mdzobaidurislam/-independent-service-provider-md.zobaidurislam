import React, { useState } from "react";

import { Col, Container, Form, Row, Button } from "react-bootstrap";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../Firebase/Firebase.init";
import { ToastContainer, toast } from "react-toastify";
const SignUp = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmePassword, setConfirmePassword] = useState("");
  const [errormsg, setErrormsg] = useState("");

  const [createUserWithEmailAndPassword, createUser, createError] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  const [updateProfile, updating, updatingError] = useUpdateProfile(auth);
  const nameHandler = (event) => {
    setName(event.target.value);
  };

  const emailHandler = (event) => {
    setEmail(event.target.value);
  };

  const passwordHandler = (event) => {
    setPassword(event.target.value);
  };

  const confirmePasswordHandler = (event) => {
    setConfirmePassword(event.target.value);
  };

  if (createError) {
    toast(createError);
  }
  if (updatingError) {
    toast(updatingError);
  }

  // HandleSignUp
  const HandleSignUp = async (event) => {
    event.preventDefault();
    if (name.length !== 0) {
      if (email) {
        if (password.length <= 5) {
          setErrormsg("  Password at least 6 character!");
        } else if (!/(?=.*?[#?!@$%^&-])/.test(password)) {
          setErrormsg("Password Shoild be at least one spesian character!");
        } else if (password.length !== confirmePassword.length) {
          setErrormsg(" Confirme Password not matching!");
        } else {
          setErrormsg("");
          await createUserWithEmailAndPassword(email, password);
          await updateProfile({ displayName: name });
          if (createUser !== "undefined") {
            toast(
              "Usre created successfully! Cheak your email and confirm verification!"
            );
            navigate("/");
          } else {
            toast("User not created!");
          }
        }
      } else {
        toast("Please enter a valid email address!");
      }
    } else {
      toast("Please enter a name!");
    }
  };
  return (
    <div className="section_pd">
      <Container>
        <Row className="justify-content-center mt-5">
          <Col lg={5}>
            <h2 className="sign_text">create an account </h2>
            <Form onSubmit={HandleSignUp} className="login_form">
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Control
                  onChange={nameHandler}
                  type="text"
                  placeholder="Enter name"
                />
              </Form.Group>
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
              <Form.Group className="mb-3" controlId="formBasicConfirme">
                <Form.Control
                  onChange={confirmePasswordHandler}
                  type="password"
                  placeholder="Confirme password"
                />
              </Form.Group>
              <p className="text-danger">{errormsg}</p>
              <Button variant="primary" className="login_btn" type="submit">
                Registration
              </Button>
            </Form>
            <div className="mt-2">
              <p>
                Already registered. <Link to="/login">Please Login! </Link>
              </p>
            </div>
          </Col>
          <ToastContainer />
        </Row>
      </Container>
    </div>
  );
};

export default SignUp;
