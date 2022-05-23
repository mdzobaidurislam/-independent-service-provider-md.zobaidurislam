import React from "react";
import { Spinner } from "react-bootstrap";

const SpinnerLoading = () => {
  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    </div>
  );
};

export default SpinnerLoading;
