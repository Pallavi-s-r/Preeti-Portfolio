import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Insta from "../../img/instagram.png";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>bhardwajpreeti684@gmail.com</span>

          <div className="f-icons">
          <a href="https://github.com/Preeti684-bhardwaj" target="_blank">
            <img src={Github} alt="GitHub" />
          </a>
          <a href="https://www.linkedin.com/in/preeti-bhardwaj-7a1a55249/" target="_blank">
            <img src={LinkedIn} alt="LinkedIn" />
          </a>
          <a href="https://www.instagram.com/preeti_bhardwaj709/" target="_blank">
            <img src={Insta} alt="Instagram" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
