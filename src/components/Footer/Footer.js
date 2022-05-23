import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Footer.css";
const Footer = () => {
  return (
    <>
      <div className="footer_section">
        <Container>
          <Row>
            <Col lg={12} className="text-center">
              <p className="text-muted mt-4 mb-0">
                All rights reserved 2022 © GYM TRAINER
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Footer;
