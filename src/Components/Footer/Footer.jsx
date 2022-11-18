import "./Footer.css";
import React, { useState } from "react";
import { Col, Modal, OverlayTrigger, Row, Tooltip } from "react-bootstrap";
import { FaInstagramSquare, FaLinkedin, FaTwitterSquare } from "react-icons/fa";


function Footer() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="footer">
      <div className="container py-5">
        <Row className=" align-items-center gy-4">
          <Col className="col-12 col-md-4">
            <p href="#home" className="fw-bold m-0"><span className="bg-primary p-1 rounded-3 text-light">JOHN</span> DOE</p>
          </Col>
          <Col className="col-12 col-md-4 text-md-center">
            <a href="#contact" className="text-black text-decoration-none" onClick={handleShow}>Mentions légales</a>

            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Condition utilisateur</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                  when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                </p>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                  when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                </p>
              </Modal.Body>
            </Modal>
          </Col>
          <Col className="col-12 col-md-4 d-flex justify-content-md-end">

            <OverlayTrigger overlay={<Tooltip id="tooltip-linkdin">linkdin</Tooltip>}>
              <span className="d-inline-block">
                  <FaLinkedin className="fs-5 "/>
              </span>
            </OverlayTrigger>

            <OverlayTrigger overlay={<Tooltip id="tooltip-instagram">Instagram</Tooltip>}>
              <span className="d-inline-block">
                <FaInstagramSquare className="fs-5 mx-1"/>
              </span>
            </OverlayTrigger>

            <OverlayTrigger overlay={<Tooltip id="tooltip-twitter">Twitter</Tooltip>}>
              <span className="d-inline-block">
                <FaTwitterSquare className="fs-5"/>
              </span>
            </OverlayTrigger>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Footer;
