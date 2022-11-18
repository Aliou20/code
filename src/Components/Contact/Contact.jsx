import "./Contact.css";
import React from "react";
import { Col, Form, Row } from "react-bootstrap";
import imgContact from '../../Assets/coffee.jpg'

function Contact() {
  return (
    <section className="bg-light py-5">
      <div className="container">
        <h3 className="m-0">Un projet de creation web</h3>
        <p className="pb-2">Allons en discuter autour du café</p>
        <Row className="align-items-center gy-md-0 gy-5">
          <Col className="col-12 col-md-5">
            <div className="w-100">
              <img src={imgContact} alt="contact" className="w-100 rounded-2 shadow-sm"/>
            </div>
          </Col>
          <Col className="col-12 col-md-6 offset-md-1 ms-md-auto">
            <Form className="row">
            
            <Form.Group className="mb-3 col-6" controlId="formBasicPassword">
              <Form.Label>Prenom</Form.Label>
              <Form.Control type="text" />
            </Form.Group>

            <Form.Group className="mb-3 col-6" controlId="formBasicPassword">
              <Form.Label>Nom</Form.Label>
              <Form.Control type="text" />
            </Form.Group>

            <Form.Group className="mb-3 col-12" controlId="formBasicPassword">
              <Form.Label>Email adress</Form.Label>
              <Form.Control type="email" />
            </Form.Group>

            <Form.Group className="mb-3 col-12" controlId="exampleForm.ControlTextarea1">
              <Form.Label>Commantaire</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>

            </Form>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default Contact;
