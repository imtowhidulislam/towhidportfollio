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

const Footer = () => {
  return (
    <>
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
    </>
  );
};

export default Footer;
