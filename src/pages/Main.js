import React from "react";
import { Fade, Bounce } from "react-awesome-reveal";

export default function Main() {
  return (
    <div className="main">
      <div className="name">
        <div className="hello">
          <Fade cascade duration={100} triggerOnce="True">
            Hello World,&#160;
          </Fade>
        </div>
        <div className="hello">
          <Fade delay={600} cascade duration={100} triggerOnce="True">
            I'm&#160;
          </Fade>
        </div>
        <Bounce delay={650} duration={1500} triggerOnce="True">
          <div className="letters-wrapper">
            <span className="letter">Razeen</span>
          </div>
        </Bounce>
        <Fade delay={750} cascade duration={100} triggerOnce="True">
          <div className="hello">&#160;!</div>
        </Fade>
      </div>
      <Fade delay={1000} triggerOnce="True">
        <div className="info">
          <p>
            I'm a computer engineering senior at Ryerson University with a
            passion for tech and software development. I am currently interning
            as a software developer at SOTI and have previously interned at AMD.
            My goal is to contribute to innovative projects and push the
            boundaries of emerging technologies.
          </p>
        </div>
        <Fade delay={1200} triggerOnce="True">
          <div className="socials">
            <ul>
              <li>
                <a
                  href="https://www.linkedin.com/in/razeenf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-linkedin-in fa-2x"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/razeenf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-github fa-2x"></i>
                </a>
              </li>
            </ul>
          </div>
        </Fade>
      </Fade>
    </div>
  );
}
