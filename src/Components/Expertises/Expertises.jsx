import "./Expertises.css";
import React from "react";
import { Col, Row } from "react-bootstrap";
import codeImg from '../../Assets/code.jpg'
import ProgressBarre from "../ProgressBarre/ProgressBarre";

function Expertises() {
  return (
    
    <>
      <h2>Mon éxpérience</h2>
      <p>Dévellopement web et designer</p>
        <Row className="align-items-center gy-5">

          <Col className='col-12 col-md-7'>
            <ProgressBarre />
          </Col>

          <Col className="col-12 col-md-4 offset-md-1">
          <div className="w-100">
            <img src={codeImg} alt =" Code" className="w-100 rounded-3 shadow"/>
          </div>
          </Col>
          
        </Row>
    </>
  );
};

export default Expertises;
