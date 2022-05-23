import React from "react";
import { Button, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const ServiceItem = (props) => {
  const { id, name, price, short_des, img } = props.service;
  const navigate = useNavigate();
  const handleCheckOut = (id) => {
    navigate(`/checkout/${id}`);
  };
  return (
    <>
      <Col md={6} lg={4}>
        <div className="services_item shadow text-center p-2">
          <div className="thum">
            <img src={img} alt="" />
          </div>
          <h3>{name}</h3>
          <p className="price">Price: {price}</p>
          <p className="short_des">{short_des}</p>
          <div>
            <Button
              onClick={() => handleCheckOut(id)}
              className="btn custom_btn"
            >
              Book Now
            </Button>
          </div>
        </div>
      </Col>
    </>
  );
};

export default ServiceItem;
