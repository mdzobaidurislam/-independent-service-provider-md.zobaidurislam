import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import aboutme from "../../img/jami.png";
import "./AboutMe.css";

const AboutMe = () => {
  return (
    <div className="section_pd">
      <Container>
        <Row className="justify-content-center">
          <Col lg={7}>
            <div className="about_me">
              <div className="about_thum">
                <img src={aboutme} className="w-100" alt="" />
              </div>
              <h3>MD. ZOBAIDUR ISLAM</h3>
              <p>
                My dream is a professional web developer and programmer. I
                develop in my career as a web developer. So I am hard working
                becuse of about of programming languages. My goal is
                successfully working with work IT software. And I am lerarning
                web programming and I already have a knowledge of programming in
                Html, Css, JavaScript, React,Redux,Node js, Express js, MongoDB
                etc.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AboutMe;
