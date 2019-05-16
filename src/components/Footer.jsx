import React from "react";
import "../styles/Footer.css";

const Footer = props => {
  return (
    <footer className="footer">
      <hr />
      <div className="icons-social">
        <a
          className="hvr-float-shadow"
          href="https://www.facebook.com/Zunder.lucas"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-facebook" />
        </a>
        <a
          className="hvr-float-shadow"
          href="https://github.com/devzunder"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-github" />
        </a>
        <a
          className="hvr-float-shadow"
          href="https://www.linkedin.com/in/zunder/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-linkedin" />
        </a>
      </div>
      <div className="footer-comments">
        <p>Copyright 2019© AquaScript</p>
        <p>
          Developed with{" "}
          <span role="img" aria-label="Love">
            ❤️
          </span>{" "}
          by{" "}
          <a href="/" style={{ color: "black" }}>
            DevZunder
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
