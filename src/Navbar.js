import { Link, useMatch, useResolvedPath } from "react-router-dom";
import me from './assets/me.jpg';
import React, { useEffect, useState } from "react";

export default function Navbar() {
  return (
    <nav className="nav">
      <ul>
        <ProfileImage to="/">HOME</ProfileImage>
        <CustomLink to="/experience">EXPERIENCE</CustomLink>
        <CustomLink to="/projects">PROJECTS</CustomLink>    
      </ul>
    </nav>
  );
}

function ProfileImage({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch({ path: resolvedPath.pathname, end: true });
    const [isMobile, setIsMobile] = useState(false);
  
    useEffect(() => {
      const handleResize = () => {
        setIsMobile(window.innerWidth <= 480);
      };
  
      handleResize(); // Check initial screen size
      window.addEventListener("resize", handleResize);
  
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, []);
  
    return (
      <li>
        <Link to={to} className={isActive ? "active" : ""} {...props}>
          {isMobile ? (
            children
          ) : (
            <img src={me} alt="me" className={isActive ? "active" : ""} />
          )}
        </Link>
      </li>
    );
  }

function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })
    return (
        <li>
            <Link to={ to } className={isActive ? "active" : ""}{...props}>
                {children}
            </Link>
        </li>
    )
}


