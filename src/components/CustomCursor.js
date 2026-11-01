import React, { useEffect, useRef, useState } from "react";

function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const canvasRef = useRef(null);

  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Mouse and Ring coordinates for smooth lerp
  const mousePos = useRef({ x: -100, y: -100 });
  const ringPos = useRef({ x: -100, y: -100 });
  const lastSpawnPos = useRef({ x: -100, y: -100 });
  const particles = useRef([]);
  const animFrameId = useRef(null);
  const isHoveredRef = useRef(false);

  useEffect(() => {
    isHoveredRef.current = isHovered;
  }, [isHovered]);

  useEffect(() => {
    // Disable on touch / mobile devices
    if (
      typeof window !== "undefined" &&
      (window.matchMedia("(pointer: coarse)").matches ||
        "ontouchstart" in window ||
        navigator.maxTouchPoints > 0)
    ) {
      setIsTouchDevice(true);
      return;
    }

    const canvas = canvasRef.current;
    const ctx = canvas ? canvas.getContext("2d") : null;

    const handleResize = () => {
      if (canvas) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    const handleMouseMove = (e) => {
      mousePos.current.x = e.clientX;
      mousePos.current.y = e.clientY;

      if (!isVisible) setIsVisible(true);

      // Move center dot instantly for crisp, zero-latency response
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%)`;
      }

      // Spawn subtle sparkles if mouse has moved sufficiently
      const dx = e.clientX - lastSpawnPos.current.x;
      const dy = e.clientY - lastSpawnPos.current.y;
      const dist = Math.hypot(dx, dy);

      if (dist > 5) {
        lastSpawnPos.current = { x: e.clientX, y: e.clientY };
        // Create 1-2 micro particles
        const count = isHoveredRef.current ? 2 : 1;
        for (let i = 0; i < count; i++) {
          particles.current.push({
            x: e.clientX + (Math.random() - 0.5) * 6,
            y: e.clientY + (Math.random() - 0.5) * 6,
            size: Math.random() * 2.2 + 1.2,
            alpha: 0.9,
            color: Math.random() > 0.35 ? "#c770f0" : "#ffffff",
            vx: (Math.random() - 0.5) * 0.8,
            vy: (Math.random() - 0.5) * 0.8 - 0.15,
          });
        }
      }

      // Check if hovering over clickable or interactive element
      const target = e.target;
      if (target && target.closest) {
        const interactive = target.closest(
          'a, button, .btn, .nav-link, .project-card-view, .quote-card-view, input, textarea, select, [role="button"], .social-icons'
        );
        setIsHovered(!!interactive);
      }
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => {
      setIsVisible(false);
      setIsHovered(false);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseleave", handleMouseLeave);

    // 60FPS animation loop for trailing ring lerp and particle sparkles
    const animate = () => {
      // Linear interpolation (lerp) for smooth trailing outer ring
      const factor = 0.16;
      ringPos.current.x += (mousePos.current.x - ringPos.current.x) * factor;
      ringPos.current.y += (mousePos.current.y - ringPos.current.y) * factor;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringPos.current.x}px, ${ringPos.current.y}px, 0) translate(-50%, -50%)`;
      }

      // Animate canvas particles
      if (ctx && canvas) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        for (let i = particles.current.length - 1; i >= 0; i--) {
          const p = particles.current[i];
          p.x += p.vx;
          p.y += p.vy;
          p.alpha -= 0.024;
          p.size *= 0.96;

          if (p.alpha <= 0.01 || p.size <= 0.2) {
            particles.current.splice(i, 1);
            continue;
          }

          ctx.save();
          ctx.globalAlpha = Math.max(0, p.alpha);
          ctx.fillStyle = p.color;
          ctx.shadowBlur = 6;
          ctx.shadowColor = p.color;
          ctx.beginPath();
          ctx.arc(p.x, p.y, Math.max(0.1, p.size), 0, Math.PI * 2);
          ctx.fill();
          ctx.restore();
        }
      }

      animFrameId.current = requestAnimationFrame(animate);
    };

    animFrameId.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave);
      if (animFrameId.current) cancelAnimationFrame(animFrameId.current);
    };
  }, [isVisible]);

  if (isTouchDevice) return null;

  return (
    <>
      {/* Micro-sparkle Particle Trail Canvas */}
      <canvas
        ref={canvasRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          pointerEvents: "none",
          zIndex: 9998,
        }}
      />

      {/* Center Purple Dot (8px) */}
      <div
        ref={dotRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "8px",
          height: "8px",
          borderRadius: "50%",
          backgroundColor: "#c770f0",
          boxShadow: "0 0 10px #c770f0, 0 0 20px rgba(199, 112, 240, 0.8)",
          pointerEvents: "none",
          zIndex: 9999,
          opacity: isVisible ? 1 : 0,
          transition: "opacity 0.2s ease, transform 0.04s linear",
          willChange: "transform",
        }}
      />

      {/* Trailing Outer Ring (36px normal, 55px on hover) */}
      <div
        ref={ringRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: isHovered ? "55px" : "36px",
          height: isHovered ? "55px" : "36px",
          borderRadius: "50%",
          border: isHovered
            ? "1.5px solid rgba(199, 112, 240, 0.95)"
            : "1.5px solid rgba(199, 112, 240, 0.7)",
          backgroundColor: isHovered
            ? "rgba(199, 112, 240, 0.15)"
            : "transparent",
          boxShadow: isHovered
            ? "0 0 20px rgba(199, 112, 240, 0.5), inset 0 0 15px rgba(199, 112, 240, 0.25)"
            : "0 0 15px rgba(199, 112, 240, 0.35), inset 0 0 8px rgba(199, 112, 240, 0.15)",
          pointerEvents: "none",
          zIndex: 9999,
          opacity: isVisible ? 1 : 0,
          transition:
            "width 0.22s ease-out, height 0.22s ease-out, background-color 0.22s ease, border-color 0.22s ease, box-shadow 0.22s ease, opacity 0.2s ease",
          willChange: "transform, width, height",
        }}
      />
    </>
  );
}

export default CustomCursor;
