import React, { useRef } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";

function ProjectCards(props) {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Set CSS variables for radial spotlight glow
    cardRef.current.style.setProperty("--mouse-x", `${x}px`);
    cardRef.current.style.setProperty("--mouse-y", `${y}px`);

    // 3D perspective tilt calculation (capped at 6 degrees)
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (((centerY - y) / centerY) * 6).toFixed(2);
    const rotateY = (((x - centerX) / centerX) * 6).toFixed(2);

    cardRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    cardRef.current.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg)";
    cardRef.current.style.setProperty("--mouse-x", "-1000px");
    cardRef.current.style.setProperty("--mouse-y", "-1000px");
  };

  return (
    <Card
      ref={cardRef}
      className="project-card-view"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <Card.Img
        variant="top"
        src={props.imgPath}
        alt="card-img"
        style={{
          height: "210px",
          objectFit: "contain",
          padding: "10px",
        }}
      />
      <Card.Body
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <div>
          <Card.Title
            style={{
              fontWeight: 600,
              fontSize: "1.25rem",
              marginBottom: "14px",
            }}
          >
            {props.title}
          </Card.Title>
          <Card.Text
            style={{
              textAlign: "justify",
              fontSize: "0.92rem",
              lineHeight: "1.6",
            }}
          >
            {props.description}
          </Card.Text>
        </div>
        {(props.ghLink || props.demoLink) && (
          <div style={{ marginTop: "auto", paddingTop: "16px" }}>
            {props.ghLink && (
              <Button
                variant="primary"
                href={props.ghLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                {props.isBlog ? "Blog" : "See More"}
              </Button>
            )}

            {!props.isBlog && props.demoLink && (
              <Button
                variant="primary"
                href={props.demoLink}
                target="_blank"
                rel="noopener noreferrer"
                style={{ marginLeft: "10px" }}
              >
                <CgWebsite /> &nbsp;
                {"Demo"}
              </Button>
            )}
          </div>
        )}
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;
