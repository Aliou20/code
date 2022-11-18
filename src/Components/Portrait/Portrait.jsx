import "./Portrait.css";
import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import portraitImg from '../../Assets/portrait.jpg'

function Portrait() {
  return (
    // <div className="portrait container">
      <Row className="gy-5 align-items-center">
        <Col className="col-12 col-md-6">
          <h1>Je suis John Doe Dévellopeur et Designer web</h1>
          <p>Bienvenue dans mon univers creatif</p>
          <Button className="mt-4">Mon expérience web</Button>
        </Col>
        <Col className="col-12 col-md-6">
          <img src={portraitImg} alt="profile" className="container rounded-2 w-100 rounded-2 shadow"/>
        </Col>
      </Row>
    // </div>
  );
};

export default Portrait;
