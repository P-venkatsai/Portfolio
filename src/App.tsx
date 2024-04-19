import { useEffect, useState } from "react";
import "./App.css";
import Container from "./Components/Container";
import CustomDiv from "./Components/CustomDiv";
import Headings from "./Components/Headings";
import ListGroup from "./Components/ListGroup";
import Navbar from "./Components/Navbar";
import Svg from "./Components/Svg";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Projects from "./Components/Projects";

import {
  GITHUB_ICON,
  LINKEDIN_ICON,
  LEETCODE_ICON,
  INSTAGRAM_ICON,
  ABOUT_ME,
  EXPERIENCE_DETAILS,
  ExperienceDetailType,
  PROJECTS_DETAILS,
  RESUME_LINK,
  NAME,
  POSITION,
  SHORT_SUMMARY,
} from "./Strings";

function App() {
  const [currScrollItem, setInViewScrollItem] = useState(0);

  let currentView: number = 0;

  function scrollToDiv(id: string) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }

  function handleViewSelection() {
    const scrollItems = document.querySelectorAll(".scroll-item");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (Number(entry.target.id) != currentView) {
              console.log(entry.target.id + " is in view");
              currentView = Number(entry.target.id);
              setInViewScrollItem(Number(entry.target.id));
            }
          }
        });
      },
      { threshold: 0.5 }
    ); // Adjust the threshold as needed

    scrollItems.forEach((item) => {
      observer.observe(item);
    });
    return "";
  }

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
      handleViewSelection();
      const mouseTracker = document.getElementById("highlightMouse");
      if (mouseTracker)
        mouseTracker.style.height = `${document.body.offsetHeight}px`;
    }
    handleMouseMovement();
  }, []);

  function handleCreateCustomDiv(
    CURR_EXPERIENCE_DETAILS: ExperienceDetailType[]
  ) {
    let experienceLength: number = CURR_EXPERIENCE_DETAILS.length;
    const experiences: JSX.Element[] = [];
    for (let i = 0; i < experienceLength; i++) {
      const detail = CURR_EXPERIENCE_DETAILS[i];
      experiences.push(
        <CustomDiv
          {...(detail.description && { description: detail.description })}
          {...(detail.skills && { items: detail.skills })}
          {...(detail.title && { title: detail.title })}
          {...(detail.subHeading1 && { subHeading1: detail.subHeading1 })}
          {...(detail.subHeading2 && { subHeading2: detail.subHeading2 })}
          {...(detail.image && { image: detail.image })}
          {...(detail.duration && { duration: detail.duration })}
          {...(detail.notHighlightDiv && {
            notHighlightDiv: detail.notHighlightDiv,
          })}
          {...(detail.company && { company: detail.company })}
          {...(detail.redirect && { redirect: detail.redirect })}
          key={i}
        ></CustomDiv>
      );
    }
    return experiences;
  }

  return (
    <div className="bg-slate-900">
      <div id="highlightMouse"></div>
      <Container className="px-n" display="flex" height="inherit">
        <div className="row">
          <Container className="my-10 ml-5 col-12 col-lg-6 mainContainer">
            <div className="mainClasses firstClass">
              <div>
                <Headings
                  padding_left="1rem"
                  font_weight="700"
                  color="rgb(226, 232, 240, 1)"
                  fontSize="2.5rem"
                >
                  {NAME}
                </Headings>
                <Headings
                  font_weight="500"
                  color="rgb(226, 232, 240, 1)"
                  heading_size={5}
                  padding_left="1rem"
                >
                  {POSITION}
                </Headings>
                {<p className="mt-4 shortSummary">{SHORT_SUMMARY}</p>}
                <ListGroup
                  onSelectItem={scrollToDiv}
                  color="inherit"
                  backGroundColor="rgb(0,0,0,0)"
                  items={["ABOUT", "EXPERIENCE", "PROJECTS"]}
                  font_weight="700"
                  liClassName="list-group-item text-xs tracking-widest text-slate-500"
                  display="flex"
                  alignment="center"
                  ulClassName="list-group mt-6 slidingWindow"
                  displayBar={true}
                  defaultIndex={currScrollItem}
                  hoover={true}
                ></ListGroup>
              </div>
              <div style={{ marginTop: "2rem" }} id="redirectIcons">
                <Navbar
                  font_weight="700"
                  className="list-inline-item text-xs tracking-widest text-slate-500"
                  backGroundColor="rgb(0,0,0,0)"
                  urls={[
                    "https://github.com/P-venkatsai",
                    "https://www.linkedin.com/in/venkatsaiputagumpalla/",
                    "https://leetcode.com/Venkatsaichintu/",
                    "https://www.instagram.com/",
                  ]}
                >
                  <Svg viewBox="0 0 16 16" path={GITHUB_ICON}></Svg>
                  <Svg viewBox="0 0 24 24" path={LINKEDIN_ICON}></Svg>
                  <Svg viewBox="0 0 24 24" path={LEETCODE_ICON}></Svg>
                  <Svg viewBox="0 0 1000 1000" path={INSTAGRAM_ICON}></Svg>
                </Navbar>
              </div>
            </div>
          </Container>
          <Container
            // overflow="scroll"
            className="noScrollBar mainClasses col-12 col-lg-6 mainContainer"
          >
            <div id="0" className="scroll-item">
              <div className="displayHeaders mb-4">
                <Headings
                  font_weight="700"
                  color="rgb(226, 232, 240, 1)"
                  heading_size={6}
                  padding_left="1rem"
                  fontSize="0.875rem"
                  letterSpacing="0.1em"
                >
                  {"ABOUT"}
                </Headings>
              </div>
              {ABOUT_ME.map((item) => (
                <p className="mt-2" style={{ paddingLeft: "1rem" }}>
                  {item}
                </p>
              ))}
            </div>
            <div id="1" className="experiences rightSection scroll-item">
              <div className="displayHeaders mb-3">
                <Headings
                  font_weight="700"
                  color="rgb(226, 232, 240, 1)"
                  heading_size={6}
                  padding_left="1rem"
                  fontSize="0.875rem"
                  letterSpacing="0.1em"
                >
                  {"EXPERIENCE"}
                </Headings>
              </div>
              {handleCreateCustomDiv(EXPERIENCE_DETAILS)}
            </div>
            {/* <div className="resumeLink">
              {handleCreateCustomDiv(RESUME_LINK)}
            </div> */}
            <div id="2" className="projects rightSection scroll-item">
              <div className="displayHeaders mb-3">
                <Headings
                  font_weight="700"
                  color="rgb(226, 232, 240, 1)"
                  heading_size={6}
                  padding_left="1rem"
                  fontSize="0.875rem"
                  letterSpacing="0.1em"
                >
                  {"PROJECTS"}
                </Headings>
              </div>
              {handleCreateCustomDiv(PROJECTS_DETAILS)}
            </div>
            <div className="rightSection">
              <p style={{ color: "rgb(100,116,139,1)" }}>
                Built with React.js and Typescript, drawing design inspiration
                from{" "}
                <a
                  className="Redirect"
                  style={{
                    color: "rgb(226, 232, 240, 0.7)",
                    fontWeight: "500",
                    textDecoration: "None",
                  }}
                  href="https://brittanychiang.com/"
                  target="_blank"
                >
                  brittanychiang.com
                </a>
              </p>
            </div>
          </Container>
        </div>
      </Container>
    </div>
  );
}

function MainApp() {
  const Home = () => <h1>Home Page</h1>;
  return (
    <Router>
      <Routes>
        <Route path="/Portfolio" element={<App />} />
        <Route path="/Portfolio/about" element={<Projects />} />
      </Routes>
    </Router>
  );
}

export default MainApp;
