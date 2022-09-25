import React from "react";
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
import Towhid from "../assets/towhid-small.jpg";
import "../style/container.css";

const IntroSection = () => {
  return (
    <>
      <header class="header">
        <div className="container">
          <div class="intro_container area_definer1">
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
        </div>
      </header>
    </>
  );
};

export default IntroSection;
