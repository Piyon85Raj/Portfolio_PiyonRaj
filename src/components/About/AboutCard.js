import React, { useRef } from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    cardRef.current.style.setProperty("--mouse-x", `${x}px`);
    cardRef.current.style.setProperty("--mouse-y", `${y}px`);
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    cardRef.current.style.setProperty("--mouse-x", "-1000px");
    cardRef.current.style.setProperty("--mouse-y", "-1000px");
  };

  return (
    <Card
      ref={cardRef}
      className="quote-card-view"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify", marginBottom: "0" }}>
            Hi Everyone, I am <span className="purple">Piyon Raj</span> from <span className="purple">Chennai, India.</span>
            <br />
            I am currently working as a <span className="purple">VR Developer</span> at <span className="purple">Karanji Info Tech</span> in Mangalore, Karnataka.
            <br />
            I have completed my Bachelor of Science (B.Sc) in Computer Science at Alagappa University, Karaikudi.
          </p>

          <div style={{ marginTop: "1.2rem", marginBottom: "1.2rem", textAlign: "left" }}>
            <p style={{ fontWeight: 600, marginBottom: "0.5rem" }}>
              My <span className="purple">Professional Journey:</span>
            </p>
            <ul style={{ paddingLeft: "1px", listStyle: "none", margin: 0 }}>
              <li className="about-activity" style={{ marginBottom: "6px" }}>
                <span className="purple" style={{ marginRight: "10px" }}>▹</span>
                <span className="purple">VR Developer</span> — Karanji Info Tech, Mangalore, Karnataka (Current)
              </li>
              <li className="about-activity" style={{ marginBottom: "6px" }}>
                <span className="purple" style={{ marginRight: "10px" }}>▹</span>
                <span className="purple">VR Developer</span> — V4C Solutions, Bangalore
              </li>
              <li className="about-activity" style={{ marginBottom: "6px" }}>
                <span className="purple" style={{ marginRight: "10px" }}>▹</span>
                <span className="purple">Game Developer</span> — GI Tech Private Limited, Chennai
              </li>
            </ul>
          </div>

          <p style={{ textAlign: "justify", marginBottom: "10px" }}>
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Outdoor Activities
            </li>
            <li className="about-activity">
              <ImPointRight /> Cooking
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> Gaming
            </li>
          </ul>

          <p style={{ color: "rgb(155, 126, 172)" }}>
            "Build boldly, make waves,<br />
            and leave your signature on solutions that matter!"{" "}
          </p>
          <footer className="blockquote-footer"></footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
