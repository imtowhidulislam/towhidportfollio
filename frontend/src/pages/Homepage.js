import React from "react";
import { Projects } from "../components/index";
import { GrInstagram } from "react-icons/gr";
import Skills from "../pages/Skills";
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
import Towhid from "../assets/towhid-small.jpg";

const Homepage = () => {
  return (
    <div class="dark-mood">
      <div class="section">
        {/* NavBar Section */}
        <header class="header">
          {/*           <div class="main_nav ">
            <div class="nav_container  area_definer">
              <h2 class="logo">Towhid</h2>
              <nav>
                <ul class="nav_links">
                  <li class="nav_list">
                    <a href="#" class="nav_link mood-day nav_link_1">
                      About
                    </a>
                  </li>
                  <li class="nav_list">
                    <a href="#" class="nav_link mood-day nav_link_2">
                      Services
                    </a>
                  </li>
                  <li class="nav_list">
                    <a href="#" class="nav_link mood-day nav_link_3">
                      Portfolio
                    </a>
                  </li>
                  <li class="nav_list">
                    <a href="#" class="nav_link mood-day nav_link_4">
                      Testimonial
                    </a>
                  </li>
                </ul>
              </nav>
              <div class="sing_in">
                <li class="sign_link">
                  <a href="./login.html" class="signIn mood-day">
                    Sign in
                  </a>
                </li>
              </div>
              <div class="mobile_link">
                <button class="mobile_btn">
                  <i class="fas fa-bars"></i>
                </button>
              </div>
            </div>
          </div> */}

          {/* Intro Section */}
          <div class="intro_container area_definer">
            <div class="intro_child intro_child-1">
              <h1 class="intro_title">
                My name is <br />
                <strong>Towhidul Islam,</strong>
                I'm a <br />
              </h1>
              <span class="intro_skill">Frontend Developer</span>
              <p class="intro_des">
                To Know about me more just go through my about section. I have
                explained everyting up there elaborately
              </p>
              <div class="intro_links">
                <button class="intro_btn ripple_btn intro_btn-1">
                  let's Talk
                </button>
                <button class="intro_btn ripple_btn intro_btn-1">
                  Portfolio
                </button>
              </div>
              <div class="intro_icons_container">
                <div class="intro_social_links">
                  <p class="intro_social_link_title">Follow me on</p>
                  <a
                    href="https://www.facebook.com/T.TECHINTIMACY"
                    class="intro_social_link_links"
                  >
                    <FaFacebook />
                  </a>
                  <a
                    href="www.linkedin.com/in/imtowhidulislam"
                    class="intro_social_link_links"
                  >
                    <FaLinkedin />
                  </a>
                  <a
                    href="https://github.com/imtowhidulislam"
                    class="intro_social_link_links"
                  >
                    <FaGithubSquare />
                  </a>
                  <a
                    href="https://www.instagram.com/thisistowhid/"
                    class="intro_social_link_links"
                  >
                    <FaInstagram />
                  </a>
                </div>
              </div>
            </div>
            <div class="intro_child intro_child-2">
              <img src={Towhid} alt="intro image" class="intro_img" />
            </div>
          </div>
        </header>
        {/*  About Section */}
        <div class="intro_container1 about_section area_definer">
          <div class="intro_child intro_child-2">
            <img src={Towhid} alt="intro image" class="intro_img about_img" />
          </div>
          <div class="intro_child intro_child-1 about_content">
            <h1 class="intro_title about_title">Towhidul Islam</h1>
            <span class="intro_skill">Frontend Developer</span>
            <p class="about_des">
              so, this is <strong>Towhidul Islam</strong>. I'm a
              <strong> CSE Graduate</strong>. And by profession i'm a web
              developer to be more precise a frontend developer. I'm the oldest
              child of my parents and i have a younger sister. So in short ewe
              have a four members family. So, Now if we talk about the hobbies
              then i have to confess taht i'm really fascinated about sports and
              as well as learnning english language and i'm slightly into the
              fitness things.And that is all about me.
            </p>
          </div>
        </div>
      </div>
      {/* Poject Section */}
      <div class="project_container area_definer">
        <h2 class="project__title">Projects</h2>

        <div class="project_layout">
          <div class="project_form">
            <h2 class="form_title">Project Form</h2>
            <form class="single_data">
              <div class="input_area proj_icon">
                <label for="icon">Icon</label>
                <input
                  type="text"
                  name="icon"
                  class="input_icon"
                  placeholder="e.g fas/fab fa-icon"
                />
              </div>
              <div class="input_area proj_name">
                <label for="projectName">Proj. Name</label>
                <input
                  type="text"
                  name="title"
                  class="input_Name"
                  placeholder="enter project name"
                />
              </div>
              <div class="input_area project_ctg">
                <label for="projCategory">Proj. Ctry</label>
                <input
                  type="text"
                  name="category"
                  class="input_ctg"
                  placeholder="enter project ctry"
                />
              </div>
              <div class="input_area proj_desc">
                <label for="projectDescription">Proj. Desc</label>
                <input
                  type="text"
                  name="description"
                  class="input_desc"
                  placeholder="enter proj desc"
                />
              </div>
              <div class="input_area proj_link">
                <label for="sourceCode link">source</label>
                <input
                  type="text"
                  name="sourceLink"
                  class="input_sourcecode"
                  placeholder="enter source link"
                />
              </div>
              <div class="input_area proj_git">
                <label for="githublink">GitHub</label>
                <input
                  type="text"
                  name="gitHub"
                  class="input_gitHub"
                  placeholder="enter github link"
                />
              </div>

              <div class="button_continer">
                <button class="submit_btn ripple_btn" type="submit">
                  submit
                </button>
              </div>
              <div class="form_alert"></div>
            </form>
          </div>
          <div class="projects">
            <Projects />
            {/* <div class="single_project">
            <div class="icon">
              <i class="fab fa-js"></i>
            </div>
            <h2 class="project_name">Project Nmae</h2>
            <h4 class="project_ctg">javascript Project</h4>
            <p class="project_dsc">
              this is just a demo card which gonna represent the actaul card of
              my main card
            </p>
            <div class="btn_container">
              <a href="#" class="btn_prj ripple_btn btn-1"
                ><i class="fas fa-code"></i
              ></a>
              <a href="#" class="btn_prj ripple_btn btn-2"
                ><i class="fab fa-github"></i></a>
            </div> 
          </div> */}
          </div>
        </div>
      </div>
      {/*  Recent Projects Container */}
      <div class="recent_project_container">
        <div class="area_definer">
          <h1 class="recent_title">Most Recent Projects</h1>
          <div class="recent_projects"></div>
        </div>
      </div>
      {/* Skill Section */}
      <div class="skill_container">
        <div class="area_definer">
          <div class="skills1 slider">
            <Skills />

            {/* <div class="dots"></div> */}
          </div>
        </div>
      </div>
      {/*  Footer Section */}
      <footer class="footer">
        <div class="area_definer flex">
          <h1 class="footer_logo">Towhid</h1>
          <div class="footer_content">
            <h2 class="footer_title">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
              ea quis ex.
            </h2>
            <div class="footer_links">
              <div class="footer_row footer-1">
                <h2>Email</h2>
                <p>
                  <FiMail /> Towhidulislam12995@gmail.com
                </p>
                <p>
                  <FaFacebook /> Towhidul Islam
                </p>
              </div>
              <div class="footer_row footer-2">
                <h2>Featured</h2>
                <p>
                  <FaPhoneAlt /> 01725101880
                </p>
                <p>
                  <FaInstagram /> thisistowhid
                </p>
              </div>
              <div class="footer_row footer-3">
                <h2>work</h2>
                <p>
                  <FaGithubSquare /> github
                </p>
                <p>
                  <FaLinkedin /> LinkedIn
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <section>
        <div class="area_definer">
          <div class="footer_copyright">
            <ul class="footer_links_icon">
              <li>
                <a href="https://github.com/imtowhidulislam">
                  <FaGithubSquare />
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/T.TECHINTIMACY">
                  <FaFacebook />
                </a>
              </li>
              <li>
                <a
                  href="www.linkedin.com/in/imtowhidulislam
          "
                >
                  <FaLinkedin />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/thisistowhid/">
                  <FaInstagramSquare />
                </a>
              </li>
            </ul>
            <p class="footer_copy">
              Copyright{" "}
              <span>
                <FaCopyright />
              </span>{" "}
              <span class="footer_date">2022</span> All resource reserve to{" "}
              <span class="name">owhidul Islam</span>
            </p>
            <h2 class="footer-logo">
              <span>Towhid</span>
            </h2>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;
