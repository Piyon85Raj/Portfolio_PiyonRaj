import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiAndroid,
  DiReact,
  DiHtml5 ,
  DiCss3,
  DiGit,
} from "react-icons/di";
import { TbBrandGolang } from "react-icons/tb";
import {  SiGooglecardboard, SiArxiv,SiWindows,
  SiApple, SiCsharp  } from "react-icons/si";
  import {
    FaUsers, // Multiplayer (group of users)
  } from "react-icons/fa";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiHtml5  />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiCss3 />
      </Col>
      
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>  
      <Col xs={4} md={2} className="tech-icons"><CgCPlusPlus /></Col> 
      <Col xs={4} md={2} className="tech-icons"><SiCsharp /></Col>      
      <Col xs={4} md={2} className="tech-icons"><DiReact /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiGooglecardboard /></Col> 
      <Col xs={4} md={2} className="tech-icons"><SiArxiv /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiWindows /></Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiAndroid />
      </Col>
      <Col xs={4} md={2} className="tech-icons"><SiApple /></Col>
      <Col xs={4} md={2} className="tech-icons"><FaUsers /></Col>

    </Row>
  );
}

export default Techstack;
