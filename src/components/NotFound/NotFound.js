import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import notFound from "../../img/notfound.png";
import "./NotFound.css";
const NotFound = () => {
  return (
    <>
      <div className="notFound_section">
        <Container>
          <Row>
            <Col lg="8">
              <img src={notFound} className="w-100" alt="" />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default NotFound;
