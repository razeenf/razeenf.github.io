import p1 from "../assets/p1.png";
import p2 from "../assets/p2.png";
import p3 from "../assets/p3.png";
import p4 from "../assets/p4.png";
import p5 from "../assets/p5.png";
import React, { useRef, useEffect } from "react";
import { Fade } from "react-awesome-reveal";

const projects = [
  {
    id: 1,
    title: "Price Tracker Bot",
    image: p1,
    description:
      "A Discord bot that helps you track Amazon.ca products for price drops.",
    link: "https://bit.ly/Price-Tracker-Bot",
  },
  {
    id: 2,
    title: "CLI Cloud Backup Tool",
    image: p2,
    description:
      "A simple way to manage and backup local files to your Google Drive.",
    link: "https://github.com/razeenf/CLI-Cloud-Backup-Tool",
  },
  {
    id: 3,
    title: "PomoTurkey Chrome Extension",
    image: p3,
    description:
      "An extension that blocks distracting sites during an active Pomodoro timer.",
    link: "https://devpost.com/software/pomoturkey?ref_content=my-projects-tab&ref_feature=my_projects",
  },
  {
    id: 4,
    title: "Bookstore App",
    image: p4,
    description: "A bookstore Windows App to buy and sell books.",
    link: "https://github.com/razeenf/Bookstore-App",
  },
  {
    id: 5,
    title: "this.website",
    image: p5,
    description: "My personal portfolio website v2.",
    link: "https://github.com/razeenf/Bookstore-App",
  },
];

const ProjectGrid = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <div>
      <h1 className="proj-header">
        <Fade cascade duration={100} triggerOnce="True">
          stuff i've worked on in the past.
        </Fade>
      </h1>
      <Fade delay={300} triggerOnce="True">
        <div className="project-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <img src={project.image} alt={project.title} />
              </a>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          ))}
        </div>
      </Fade>
    </div>
  );
};

export default ProjectGrid;
