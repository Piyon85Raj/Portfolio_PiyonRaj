import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

// Original project images
import editor from "../../Assets/Projects/19.jpg";
import chatify from "../../Assets/Projects/18.jpg";
import bitsOfCode from "../../Assets/Projects/17.jpg";
import Forklift from "../../Assets/18.png";
import ClassEnder from "../../Assets/19.png";
import BirdHunt from "../../Assets/22.png";
import DragonMario from "../../Assets/23.png";
import EscapeDot from "../../Assets/20.png";
import PrimaryKids from "../../Assets/21.png";

// New project images
import medverse from "../../Assets/Projects/medverse.png";
import ltSimulation from "../../Assets/Projects/lt_simulation.png";
import sewingMachine from "../../Assets/Projects/sewing_machine.png";
import cnc from "../../Assets/Projects/cnc.png";
import dental from "../../Assets/Projects/dental.png";
import quiz from "../../Assets/Projects/quiz.png";
import gpstagcam from "../../Assets/Projects/gpstagcam.png";

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
          {/* ================= ORIGINAL PROJECTS ================= */}

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

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Forklift}
              isBlog={false}
              title="Forklift Driving"
              description="Developed a realistic forklift driving simulator using Unity, focusing on physics-based vehicle control, object interaction, and industrial warehouse navigation. Implemented smooth steering, acceleration, and braking mechanics using Rigidbody physics. Designed interactive forklift controls for lifting and placing pallets with precision. Integrated environment obstacles, checkpoints, and game objectives to enhance user engagement. Optimized for both keyboard and controller input to ensure a smooth gameplay experience."
              ghLink="https://youtu.be/_UfLv72g5mE?si=Y4MSkko7MqoSfKxP"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ClassEnder}
              isBlog={false}
              title="Class Ender"
              description="This is a mobile game I designed and developed using Unity for the Android platform. The gameplay showcases smooth controls, an intuitive UI, and engaging mechanics tailored for casual mobile users. From conceptualization to publishing, I handled all aspects including game logic, UI design, animations, and testing."
              ghLink="https://youtube.com/shorts/0H0zlmUQ0m8?si=lEzlWS4Ph3rkaHgF"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={BirdHunt}
              isBlog={false}
              title="Bird Hunting"
              description="Bird Hunting is a 2D shooting game created in Unity for the Windows platform. The player controls a hunter standing on a beach, shooting upward at birds flying across the sky. Birds are spawned randomly from three positions using prefabs from the 2DBirds_Pack3 asset pack. I implemented horizontal movement, shooting mechanics, collision detection, and scoring logic. This game is built with future multiplayer integration in mind."
              ghLink="https://youtu.be/3ls46D_GD4c"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={DragonMario}
              isBlog={false}
              title="Dragon Mario"
              description="Dragon Mario is a 2D side-scrolling platformer game developed in Unity. The player controls a character using A/D or arrow keys to move and spacebar to jump. I created and animated different running and jumping sprite states to match the gameplay. The game focuses on responsive controls and smooth animations, offering a nostalgic side-scroller experience with modern polish."
              ghLink="https://youtu.be/FlO7nna-LUw"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={EscapeDot}
              isBlog={false}
              title="Escape Dot"
              description="Escape Dot is a minimalist 2D puzzle game developed for Android using Unity. The player starts from the bottom-left of the screen and must navigate to the top-right escape point by swiping in different directions. The gameplay includes maze navigation, interactive triggers like a valve key to unlock blocks, and level progression. I designed the logic, movement, and obstacle interactions for a smooth and engaging mobile puzzle experience."
              ghLink="https://youtube.com/shorts/7WlxAN0TIwY"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={PrimaryKids}
              isBlog={false}
              title="Primary Kids"
              description="This is an educational 2D Android app I developed using Unity, aimed at helping kids learn letters, numbers, shapes, and common object names with both text and audio. I designed the UI using Photoshop and implemented interactive learning with touch input and speaker buttons for pronunciation. The app includes a dictation mode that generates random letters or numbers for recall practice and a drawing page where kids can freely write or sketch using their finger or mouse. Published under Omega Studios, the app is designed for a fun and child-friendly learning experience."
              ghLink="https://youtube.com/shorts/wj6yz2vE-5A"
            />
          </Col>

          {/* ================= NEW VR / WEBXR / WEB / MOBILE PROJECTS ================= */}

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={medverse}
              isBlog={false}
              title="Medverse (Healthcare, WebXR & SCORM)"
              description="A 5-module immersive healthcare training suite built in Unity using VRIF and BNG frameworks. Built a centralized application launcher, integrated hand-tracking for select modules, and deployed WebXR builds compatible with SCORM compliance for seamless LMS/browser delivery."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ltSimulation}
              isBlog={false}
              title="L&T Industrial Simulation (Three-Phase Induction Motor)"
              description="An interactive virtual reality electrical training simulation developed specifically for Larsen & Toubro (L&T). Focused on equipment assembly, maintenance workflows, and electrical circuit testing (specifically testing current supply on a Three-Phase Induction Motor) using VRIF controller mechanics."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sewingMachine}
              isBlog={false}
              title="Spiral Cage Sewing Machine Simulation"
              description="A specialized virtual reality training simulator for industrial sewing machine workflows. Replicated mechanical assembly, operational steps, and maintenance procedures using realistic VRIF controller mechanics. Integrated Unity Addressables and Asset Bundles for memory optimization and dynamic asset loading."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cnc}
              isBlog={false}
              title="CNC Machine Virtual Training Simulator"
              description="A comprehensive manufacturing simulator for precision CNC machine operation. Replicated real-world production steps including raw material setup, value configurations, program parameter setting, precision grinding workflows, and component removal."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dental}
              isBlog={false}
              title="Dental VR Training Simulation"
              description="An advanced medical training simulation for dental procedures. Supporting dual interaction modes (Controller-based and high-precision Hand Tracking via Meta XR / VRIF) to train medical professionals in procedural accuracy."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={quiz}
              isBlog={false}
              title="AI-Assisted Quiz Web Platform"
              description="A fully functional interactive quiz web application. Designed and developed using modern web workflows and AI-assisted coding tools (AIDE / AI Codex), showcasing the ability to build web solutions outside of Unity."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gpstagcam}
              isBlog={false}
              title="GPS Tag Camera"
              description="An Android mobile application featuring real-time GPS location watermarking, live map overlays, coordinates, address stamps, and gallery integration for geotagged photography."
              ghLink="https://play.google.com/store/apps/details?id=com.piyonraj.gpstagcamera&pcampaignid=web_share"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
