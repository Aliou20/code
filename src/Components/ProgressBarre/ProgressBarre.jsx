import "./ProgressBarre.css";
import React from "react";
import { Col, OverlayTrigger, ProgressBar, Row, Tooltip } from "react-bootstrap";
import { FaHtml5,FaCss3Alt,FaJsSquare ,FaPhp ,FaSass} from "react-icons/fa";
// import { DiJavascript1 } from "react-icons/Di";

function ProgressBarre() {
  const barreProgress = [
    {
      nameIcon : FaHtml5,
      name : 'HTML5',
      valeur : 75
    },
    {
      nameIcon : FaCss3Alt,
      name : 'CSS',
      valeur : 100
    },
    {
      nameIcon :FaJsSquare,
      name : 'JS',
      valeur : 75
    },
    {
      nameIcon : FaPhp,
      name : 'PHP',
      valeur : 75
    },
    {
      nameIcon : FaSass,
      name : 'SASS',
      valeur : 50
    }
  ]
  
  return (
    <>
      {barreProgress.map((barreProgres) => (
        <Row className="align-items-center bg-white py-3 shadow-ms my-3 rounded-2">
                <Col className="col-5 col-ms-4 col-lg-3 col-xl-2 d-flex align-items-center">
                  {<barreProgres.nameIcon className="text-primary fs-3 mx-1"/>}
                  <p className="fw-bold my-auto">{barreProgres.name}</p>
                </Col>
                <Col>
                <OverlayTrigger overlay={<Tooltip id={barreProgres.valeur}>{barreProgres.valeur + "%"}</Tooltip>}>
                    <ProgressBar now={barreProgres.valeur} variant="primary" />
                </OverlayTrigger>
                </Col>
        </Row>
      ))}
    </>
  );
};

export default ProgressBarre;
