import "./ProgressBarreReverse.css";
import React from "react";
import { FaFigma, FaPhotoVideo , FaPaintBrush , FaPencilAlt ,FaVideo} from "react-icons/fa";
import { Col, OverlayTrigger, ProgressBar, Row, Tooltip } from "react-bootstrap";

function ProgressBarreReverse() {
  const barreProgressReverse = [
    {
      nameIcon : FaFigma,
      name : 'Figma',
      valeur : 75
    },
    {
      nameIcon : FaPhotoVideo,
      name : 'Suite Adobe',
      valeur : 100
    },
    {
      nameIcon :FaPaintBrush,
      name : 'Design UI',
      valeur : 75
    },
    {
      nameIcon : FaPencilAlt,
      name : 'Design UIX',
      valeur : 75
    },
    {
      nameIcon : FaVideo,
      name : 'Vidéo',
      valeur : 50
    }
  ]
  return ( 
    <>
      {barreProgressReverse.map((barreProgres) => (
        <Row className="align-items-center bg-white py-3 shadow-ms my-3 rounded-2">
                <Col className="col-5 col-ms-5 col-lg-4 col-xl-3 d-flex align-items-center">
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

export default ProgressBarreReverse;
