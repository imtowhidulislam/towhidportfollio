import React from "react";
import {
  FaGithubSquare,
  FaCopyright,
  FaFacebook,
  FaLinkedin,
  FaInstagramSquare,
} from "react-icons/fa";
import "../style/container.css";

const FooterCopyright = () => {
  return (
    <>
      <section className="footer_end">
        <div class="container" style={{ paddingBlock: "unset" }}>
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
    </>
  );
};

export default FooterCopyright;
