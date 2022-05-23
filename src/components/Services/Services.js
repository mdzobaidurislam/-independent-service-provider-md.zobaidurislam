import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import useServices from "../Hooks/useServices";
import ServiceItem from "../ServiceItem/ServiceItem";
import "./Services.css";
const Services = () => {
  const { services } = useServices();

  return (
    <>
      <div className="service_section pt-5">
        <Container>
          <Row className="justify-content-center">
            <Col lg={8}>
              <div className="section_title">
                <h2>
                  <span>Individual who provides</span> services
                </h2>
                <p>
                  I help busy men and women overhaul their health & fitness
                  using a combination of tailored exercise, nutrition, lifestyle
                  and mindset systems that are holistic and sustainable forever
                  so they can
                </p>
              </div>
            </Col>
          </Row>
          <Row>
            {services.map((service) => (
              <ServiceItem key={service.id} service={service} />
            ))}
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Services;
