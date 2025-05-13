import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/2-removebg-preview.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              <b>Passionate Programmer & Game Developer</b> 🕹️
              <br />
              <br />
              I found my muse in the world of Game Developing, where every scenario of game is a brushstroke on the canvas of innovation. I am fluent in classics like 
              <i>
                <b className="purple"> c# , C++ , Unity and Unreal. </b>
              </i>
              <br />
              <br />
              My fields of interest lie in building new &nbsp;
              <i>
                <b className="purple">🎲 Game Technologies and Products</b> and also in areas related to 
                <b className="purple"> 🌐 world wide games.</b>
              </i>
              <br />
              <br />
              Whenever possible, I channel my creativity into developing immersive games with <b className="purple">Unity 🎮 </b> and 
              <i>
                <b className="purple">crafting smart, physics-rich worlds and engaging player experiences.</b>
              </i> like 
        
              <br />
              <br />
              I believe game development is more than just code—it's a passionate pursuit of creativity, storytelling, and immersive experiences. Let's build something extraordinary together! 🎮✨
            </p>


          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Piyon85Raj"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://x.com/PiyonRaj"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/piyon-raj-3a5424279/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/dolby_dude_46/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
