import React from "react";
import { ProjectCard } from "./ProjectCard";
import youtube from "../assets/img/youtube-clone.png";
import fitness from "../assets/img/fitness-app.png";
import dashboard from "../assets/img/dashboard.png";
import crypto from "../assets/img/crypto.png";

const Projects = () => {
  const projects = [
    {
      title: "Video Player",
      imgUrl: `${youtube}`,
      link: "https://github.com/ayush2390/Youtube-Clone",
    },
    
    {
      title: "Fitness App",
      imgUrl: `${fitness}`,
      link: "https://github.com/ayush2390/Exercise-App",
    },
    {
      title: "Dashboard",
      imgUrl: `${dashboard}`,
      link: "https://github.com/ayush2390/Ecommerce-Dashboard",
    },
    {
      title: "Crypto App",
      imgUrl: `${crypto}`,
      link: "https://github.com/ayush2390/Crypto-App",
    },
  ];
  return (
    <section className="project" id="projects">
      <h2>Projects</h2>
      <div className="projectdiv">
        {projects.map((project, index) => {
          return (
            <ProjectCard
              title={project.title}
              imgUrl={project.imgUrl}
              link={project.link}
              key={index}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
