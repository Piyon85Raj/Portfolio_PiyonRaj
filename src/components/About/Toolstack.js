import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiUnity, SiUnrealengine,SiVisualstudio ,SiAdobephotoshop,SiBlender,SiAdobeillustrator,SiAudacity
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
     
      
       <Col xs={4} md={2} className="tech-icons"><SiUnity /></Col>
       <Col xs={4} md={2} className="tech-icons"><SiUnrealengine /></Col>
       <Col xs={4} md={2} className="tech-icons"><SiVisualstudio /></Col>
       <Col xs={4} md={2} className="tech-icons"><SiAdobephotoshop /></Col>
       <Col xs={4} md={2} className="tech-icons"><SiAdobeillustrator /></Col>
       <Col xs={4} md={2} className="tech-icons"><SiBlender /></Col>
       <Col xs={4} md={2} className="tech-icons"><SiAudacity /></Col>
    </Row>
  );
}

export default Toolstack;
