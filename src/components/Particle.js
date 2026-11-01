import React from "react";
import Particles from "react-tsparticles";

function Particle() {
  return (
    <Particles
      id="tsparticles"
      params={{
        particles: {
          number: {
            value: 160,
            density: {
              enable: true,
              value_area: 1500,
            },
          },
          line_linked: {
            enable: false,
            opacity: 0.03,
          },
          move: {
            direction: "right",
            speed: 0.05,
          },
          size: {
            value: 1,
          },
          opacity: {
            anim: {
              enable: true,
              speed: 1,
              opacity_min: 0.05,
            },
          },
        },
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "grab",
            },
            onhover: {
              enable: true,
              mode: "grab",
            },
            onClick: {
              enable: true,
              mode: "push",
            },
            onclick: {
              enable: true,
              mode: "push",
            },
          },
          modes: {
            grab: {
              distance: 140,
              links: {
                opacity: 0.3,
                color: "#c770f0",
              },
              line_linked: {
                opacity: 0.3,
                color: "#c770f0",
              },
            },
            push: {
              particles_nb: 3,
            },
          },
        },
        retina_detect: true,
      }}
    />
  );
}

export default Particle;
