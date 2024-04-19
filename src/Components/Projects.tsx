import React from "react";
import { useEffect } from "react";
import "../App.css";
import Container from "./Container";
import Headings from "./Headings";

const Projects = () => {
  function handleMouseMovement() {
    document.addEventListener("mousemove", (event) => {
      const mouseX = event.clientX + window.scrollX;
      const mouseY = event.clientY + window.scrollY;
      const mouseTracker = document.getElementById("highlightMouse");

      if (mouseTracker) {
        mouseTracker.style.height = `${document.body.offsetHeight}px`;
        mouseTracker.style.background = `radial-gradient(600px at ${mouseX}px ${mouseY}px, rgba(29, 78, 216, 0.15), transparent 80%)`;
      }
    });
  }

  useEffect(() => {
    // Function to call after container is created
    if (window.innerWidth > 991) {
      const mouseTracker = document.getElementById("highlightMouse");
      if (mouseTracker)
        mouseTracker.style.height = `${document.body.offsetHeight}px`;
    }
    handleMouseMovement();
  }, []);

  return (
    <div className="bg-slate-900" style={{ height: "100vh", width: "100%" }}>
      <div id="highlightMouse"></div>
      <Container className="px-n" display="flex" height="inherit">
        <Container className="my-10 ml-5 col-12 col-lg-6">
          <Headings
            padding_left="1rem"
            font_weight="700"
            color="rgb(226, 232, 240, 1)"
            fontSize="2.5rem"
          >
            All Projects
          </Headings>
        </Container>
      </Container>
    </div>
  );
};

export default Projects;
