import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Col, Container, Form, Row, Button } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import useCheckOut from "../Hooks/useCheckOut";

const CheckOut = () => {
  let navigate = useNavigate();
  const [profilename, setProfileName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");

  const params = useParams();
  console.log(params.id);
  const {
    item: { name, img, price, short_des },
  } = useCheckOut(params.id);

  // HandleSignUp
  const handleShipping = (event) => {
    event.preventDefault();
    if (name.length === 0) {
      toast("Name filed is required!");
    } else if (email.length === 0) {
      toast("Email filed is required!");
    } else if (address.length === 0) {
      toast("Address filed is required!");
    } else if (phone.length === 0) {
      toast("Phone filed is required!");
    } else {
      const shipping = { name, email, address, phone };
      navigate("/completecchekout");
    }
  };
  return (
    <Container className="pt-5 pb-5">
      <Row className="justify-content-center mt-5">
        <Col md={7} lg={7} className="border border-1 p-4">
          <Row>
            <Col lg={5} md={5}>
              <div className="checkOut_thm">
                <img src={img} alt="" className="w-100" />
              </div>
            </Col>
            <Col lg={7} md={7}>
              <h2>{name}</h2>
              <p>Price:${price}</p>
              <p>
                <strong>Description:</strong>
                {short_des}
              </p>
            </Col>
          </Row>
        </Col>
        <Col md={5} lg={5}>
          <h2>Puting Information</h2>
          <Form onSubmit={handleShipping}>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Control
                onChange={(e) => setProfileName(e.target.value)}
                type="text"
                value={profilename}
                placeholder="Enter name"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                value={email}
                placeholder="Enter email"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicAddress">
              <Form.Control
                onChange={(e) => setAddress(e.target.value)}
                type="text"
                placeholder="Enter address"
                value={address}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPhone">
              <Form.Control
                onChange={(e) => setPhone(e.target.value)}
                type="text"
                value={phone}
                placeholder="Enter number"
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Check Out
            </Button>
          </Form>
        </Col>
        <ToastContainer />
      </Row>
    </Container>
  );
};

export default CheckOut;
