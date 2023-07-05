import React from "react";
import { Fade, Bounce } from "react-awesome-reveal";

export default function Main() {
  return (
    <div className="main">
      <div class="name">
        <div class="hello">Hello World,&#160;</div>
        <div class="hello">I'm&#160;</div>
        <Bounce duration={1500} triggerOnce="True">
          <div className="letters-wrapper">
            <span class="letter">Razeen</span>
          </div>
        </Bounce>
        <div class="hello">&#160;!</div>
      </div>
      <Fade delay={600} triggerOnce="True">
        <div className="info">
          <p>
            {" "}
            I'm a computer engineering senior at Ryerson University with a
            passion for tech and software development. I have previously
            interned at AMD and am currently interning as a software developer
            at SOTI. My goal is to contribute to innovative projects and push
            the boundaries of emerging technologies.
          </p>
        </div>
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
    </div>
  );
}
