import React from "react";
import {
  FaTwitter,
  FaFacebook,
  FaInstagram,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <h2>Dandelion Developer</h2>

        <p>Copyright © 2024</p>
        <p>All rights reserved</p>
        <ul className="social">
          <li>
            <FaTwitter />
          </li>
          <li>
            <FaFacebook href="https://web.facebook.com/monkeyguns" />
          </li>
          <li>
            <FaInstagram href="https://www.instagram.com/yusriandipratama/" />
          </li>
          <li>
            <FaGithub href="https://github.com/AndiYusriandiPratama/backEnd-Dandelion" />
          </li>
          <li>
            <FaLinkedin href="https://www.linkedin.com/in/andi-yusriandi-236b18206/" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
