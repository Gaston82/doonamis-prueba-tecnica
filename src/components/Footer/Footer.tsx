import React from "react";
import "./Footer.scss";
import github from "../../assets/svgexport-15.svg";
import linkedin from "../../assets/svgexport-9.svg";
import { Link } from "react-router-dom";

const Footer = (): JSX.Element => (
  <footer className="footer">
    <Link to={"/"}>
      <h1>Series Finder</h1>
    </Link>
    <div className="contac-box">
      <a
        href="https://www.linkedin.com/in/gaston-artaza-frontend-developer/"
        target="_blank"
      >
        <img className="footer__icon" src={linkedin} alt="Linkedin icon" />
      </a>
      <a href="https://github.com/Gaston82" target="_blank">
        <img className="footer__icon" src={github} alt="Linkedin icon" />
      </a>
    </div>
  </footer>
);

export default Footer;
