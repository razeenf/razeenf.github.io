import React, { useState } from 'react';
import soti from '../assets/soti.png';
import tmu from '../assets/tmu.png';
import amd from '../assets/amd.png';
import { Fade } from "react-awesome-reveal";



function Collapsible({ pic, title, link, location, dates, tools, description }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleCollapse = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="collapsible" onClick={toggleCollapse}>
      <div className={isExpanded ? 'exp-box expanded' : 'exp-box'}>
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
  return (
    <div className="experience">
      <div className='exp-header'>
        <Fade cascade duration={100} triggerOnce='True'>where i've been before...</Fade>
      </div>
      <Fade cascade damping={0.25} triggerOnce='True'>
      <Collapsible
        pic={soti}
        title="Software Developer Intern"
        link="https://soti.net/products/soti-mobicontrol/"
        location="SOTI"
        dates="Sep 2023 - Apr 2024"
        tools="C#, .NET, AngularJS, HTML, CSS, SQL"
        description="Incoming Software Developer at SOTI, Working with the MobiControl Team."
      />
      <Collapsible
        pic={amd}
        title="DevOps Engineer Intern"
        link="https://www.amd.com/en/graphics/server-cloud-gaming"
        location="Advanced Micro Devices"
        dates="May 2022 - Apr 2023"
        tools="Python, Bash, Docker, Git, AWS, Azure, Linux"
        description="Streamlined and enhanced efficiency by automating manual processes using Python and Bash scripts. 
        Implemented continuous integration and deployment pipelines for seamless software releases. 
        Managed infrastructure and optimized system performance through monitoring and analysis."
      />
      <Collapsible
        pic={tmu}
        title="Research Assistant"
        link="https://www.torontomu.ca/inclusive-media/research-themes/"
        location="Toronto Metro University"
        dates="Sep 2021 - Dec 2021"
        tools="React, Django, HTML, CSS, Python"
        description="
        Contributed to a Python-based web app using NLP for speech and motor-impaired users. 
        Improved accessibility with a React-based breadcrumb menu. 
        Implemented Python testing for better code quality. 
        Conducted research and analyzed data to implement new features."
      />
      </Fade>
    </div>

  );
}
