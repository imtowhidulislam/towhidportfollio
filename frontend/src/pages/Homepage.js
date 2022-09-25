import React from "react";
import { Projects } from "../components/index";
import { GrInstagram } from "react-icons/gr";
import Skills from "../pages/Skills";
import Footer from "../pages/Footer";
import IntroSection from "./introSection";
import About from "./About";
import ProjectForm from "./projectForm";
import FooterCopyright from "./footercopyright";
import {
  FaFacebookSquare,
  FaGithubSquare,
  FaTwitterSquare,
  FaCopyright,
  FaPhoneAlt,
  FaMoon,
  FaFacebook,
  FaLinkedin,
  FaInstagram,
  FaAngleLeft,
  FaAngleRight,
  FaInstagramSquare,
} from "react-icons/fa";
import { FiArrowUp, FiMail } from "react-icons/fi";
import { BsSunFill } from "react-icons/bs";

import "../style/about.css";
import "../style/footer.css";
import "../style/mackup.css";
import "../style/navbarStyle.css";
import "../style/project.css";
import "../style/recentProject.css";
import "../style/signup.css";
import "../style/signupStyle.css";
import "../style/skill.css";
import "../style/userStyle.css";

const Homepage = () => {
  return (
    <div class="dark-mood">
      <div class="section">
        {/* NavBar Section */}
        <header class="header">
          {/* Intro Section */}
          <IntroSection />
        </header>
        {/*  About Section */}
        <About />
      </div>
      {/* Poject Section */}
      <div class="project_container area_definer">
        <h2 class="project__title">Projects</h2>

        <div class="project_layout">
          <ProjectForm />
          <div class="projects">
            <Projects />
          </div>
        </div>
      </div>
      {/*  Recent Projects Container */}
      {/*       <div class="recent_project_container">
        <div class="area_definer">
          <h1 class="recent_title">Most Recent Projects</h1>
          <div class="recent_projects"></div>
        </div>
      </div> */}
      {/* Skill Section */}
      <div class="skill_container">
        <div class="area_definer">
          <Skills />
        </div>
      </div>
      {/*  Footer Section */}
      <Footer />
      <FooterCopyright />
    </div>
  );
};

export default Homepage;
