import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Banner.css";
const Banner = () => {
  return (
    <>
      <div className="banner_section">
        <Container>
          <Row className="justify-content-center align-items-center ">
            <Col md={10} lg={10}>
              <div className="banner_content text-center ">
                <h1>WHY MARK PERSONAL TRAINING WILL WORK FOR YOU</h1>
                <p>
                  Becoming a Personal Trainer was an obvious and natural choice
                  for me as I am passionate about healthy living and sharing my
                  expertise and knowledge with people.
                </p>
                <div>
                  <Link to="/about" className="btn btn_h_color custom_btn">
                    Join us TRAINING
                  </Link>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Banner;
