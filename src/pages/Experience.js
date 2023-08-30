import React, { useState } from "react";
import r3 from "../assets/r3.png";
import tmu from "../assets/tmu.png";
import amd from "../assets/amd.png";
import soti from "../assets/soti.png";
import { Fade } from "react-awesome-reveal";

function Collapsible({
  pic,
  title,
  link,
  location,
  dates,
  tools,
  description,
  isExpanded,
  onToggleCollapse,
}) {
  const toggleCollapse = () => {
    onToggleCollapse(!isExpanded); // Toggle the collapse state
  };

  return (
    <div className="collapsible">
      <div
        className={isExpanded ? "exp-box expanded" : "exp-box"}
        onClick={toggleCollapse}
      >
        <div className="header">
          <h2 className="left">
            <div className="pic">
              <img src={pic} alt="location" />
            </div>
            <div className="title">
              <a href={link} target="_blank" rel="noreferrer">
                {location}
              </a>
              <br />
              {title}
            </div>
          </h2>
          <h2 className="right">{dates}</h2>
        </div>
        {isExpanded && (
          <div className="collapsible-content">
            <br />
            <ul>
              <li>
                <strong>Tools: </strong>
                {tools}
              </li>
              <li>
                <strong>Description: </strong>
                {description}
              </li>
            </ul>
            <br />
          </div>
        )}
      </div>
    </div>
  );
}

export default function Experience() {
  const [openCollapsibleIndex, setOpenCollapsibleIndex] = useState(null);

  const handleToggleCollapse = (index) => {
    setOpenCollapsibleIndex((prevIndex) =>
      prevIndex === index ? null : index
    );
  };

  return (
    <div className="experience">
      <div className="exp-header">
        <Fade cascade duration={100} triggerOnce={true}>
          where i've been before...
        </Fade>
      </div>
      <Fade cascade damping={0.25} triggerOnce={true}>
        <Collapsible
          pic={soti}
          title="Software Developer Intern"
          link=""
          location="SOTI"
          dates="Sep 2023 - Apr 2024"
          tools="C# · .NET · AngularJS · TypeScript · SQL Server"
          description="Working on the MobiControl team servicing SOTIs flagship Enterprise Mobility Management solution.  "
          isExpanded={openCollapsibleIndex === 0}
          onToggleCollapse={() => handleToggleCollapse(0)}
        />
        <Collapsible
          pic={amd}
          title="Cloud Engineer Intern"
          link="https://www.amd.com/en/graphics/server-cloud-gaming"
          location="Advanced Micro Devices"
          dates="May 2022 - Apr 2023"
          tools="Python · Bash · Docker · Git · AWS · Linux"
          description="Worked on the engineering team for AMDs Cloud Gaming & VDI data center GPUs (AMD Radeon™ PRO V620) and software products. "
          isExpanded={openCollapsibleIndex === 1}
          onToggleCollapse={() => handleToggleCollapse(1)}
        />
        <Collapsible
          pic={tmu}
          title="Research Assistant"
          link="https://www.torontomu.ca/inclusive-media/research-themes/"
          location="Toronto Metro University"
          dates="Sep 2021 - Dec 2021"
          tools="React · Django · HTML · CSS · Python"
          description="Assisted Dr. Deborah Fels team in the development of a web application utilizing React, Django and NLP to facilitate communication for individuals with speech and motor impairments."
          isExpanded={openCollapsibleIndex === 2}
          onToggleCollapse={() => handleToggleCollapse(2)}
        />
        <Collapsible
          pic={r3}
          title="Software Developer"
          link=""
          location="Toronto MetRobotics"
          dates="Oct 2020 - Sep 2021"
          tools="Python · C++ · OpenCV · Robot Operating System (ROS) · Microcontrollers"
          description="Built the Navi Mars Rover in collaboration with 75+ team members to participate in the University Rover Challenge. Developed embedded software in C++ and rover controls software in Python."
          isExpanded={openCollapsibleIndex === 3}
          onToggleCollapse={() => handleToggleCollapse(3)}
        />
      </Fade>
    </div>
  );
}
