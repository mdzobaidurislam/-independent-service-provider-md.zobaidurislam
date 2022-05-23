import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./CompleteCheckout.css";
const CompleteCheckout = () => {
  return (
    <div className="section_pd section_h">
      <Container>
        <Row className="justify-content-center">
          <Col lg={10}>
            <h1>Thank you for the booking</h1>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CompleteCheckout;
