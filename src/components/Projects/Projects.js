import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/19.jpg";
import chatify from "../../Assets/Projects/18.jpg";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/17.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are my projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Gulf Ticket Indias Lottery"
              description="It's a Casino Games , using backend server response. there is 6 draw games per week. using 3D objects and and 2D UI. selection animation and 3d physics and rigidbody component's objects. *Lucky1, *Rush3, *Dream5, *Magic5, *Fortune6, *Super6  . Click here and explore more detail. "
              ghLink="https://gulfticket.com/Home"
            />
          </Col>

          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Taj Lottery"
              description="It's a Casino Games , using backend server response. there is 7 draw games per week. using 3D objects and and 2D UI. selection animation and 3d physics and rigidbody component's objects.Includes games *Joker, *Ace Joker, *Dream5, *Lucky4, *Pic3, *Taj Million, *Lucky DOB  . Click here and explore more detail."
              ghLink="https://youtu.be/pZCJom2oR8k?si=kDP6_zbxGpQk57UJ"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Tejas LCA-1"
              description="360 Virtual Reality simulation and vr intractions with meta device. Creating Real time Envroinment and Recquirments and Instructions path way and pointers and targets and more. it is for learning purpose for flying officer.working is smooth and tools are with mass and reality components. "
            />
          </Col>

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
