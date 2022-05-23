import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import workouts from "../../img/workout.png";
import "./Workouts.css";
const Workouts = () => {
  return (
    <section className="workouts_section">
      <Container>
        <Row className="justify-content-center align-items-center">
          <Col lg={6}>
            <div className="workouts_content">
              <h3>Real-time workouts for every fitness level</h3>
              <p>
                Smash real-time HIIT workouts that fit perfectly with where you
                are on your journey. Enjoy new, more challenging workouts every
                four-week cycle. And revisit your favourite past workouts
                anytime.
              </p>
              <div>
                <Link to="/about" className="btn  custom_btn">
                  Join us TRAINING
                </Link>
              </div>
            </div>
          </Col>
          <Col lg={6}>
            <div className="workouts_thum">
              <img src={workouts} alt="" className="w-100" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Workouts;
