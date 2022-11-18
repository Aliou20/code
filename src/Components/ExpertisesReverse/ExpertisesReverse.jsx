import "./ExpertisesReverse.css";
import React from "react";
import { Col, Row } from "react-bootstrap";
import designImg from "../../Assets/design .jpg"
import ProgressBarreReverse from "../ProgressBarreReverse/ProgressBarreReverse";

function ExpertisesReverse() {
  return (
    <>
      <Row className="align-items-center gy-5 my-5">
        <Col className="col-12 col-md-4">
        <div className="w-100">
          <img src={designImg} alt =" Code" className="w-100 rounded-3 shadow"/>
        </div>
        </Col>

        <Col className='col-12 col-md-7 offset-md-1 order-first order-md-last'>
          <ProgressBarreReverse />
        </Col>
      </Row>
    </>
  );
};

export default ExpertisesReverse;
