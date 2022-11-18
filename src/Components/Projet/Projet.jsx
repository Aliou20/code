import "./Projet.css";
import React from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import imgProjet1 from '../../Assets/projet1.jpg';
import imgProjet2 from '../../Assets/projet2.jpg';
import imgProjet3 from '../../Assets/projet3.jpg';
import imgProjet4 from '../../Assets/projet4.jpg';

function Projet() {

  const infoCards = [
    {
      Image :imgProjet1 ,
      name : "Projet1"
    },
    {
      Image :imgProjet2 ,
      name : "Projet2"
    },
    {
      Image :imgProjet3 ,
      name : "Projet3"
    },
    {
      Image :imgProjet4 ,
      name : "Projet4"
    }
  ]
  return (
    <>
      <Row className="g-4 gy-md-5">
        {infoCards.map((infoCard) => (
          <Col className="col-12 col-md-6 col-lg-3">
            <Card className="shadow">
              <Card.Img variant="top" src={infoCard.Image} />
              <Card.Body>
                <Card.Title>{infoCard.name}</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Projet;
