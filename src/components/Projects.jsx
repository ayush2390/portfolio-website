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
      link: "https://play-video-online.netlify.app/",
    },

    {
      title: "Fitness App",
      imgUrl: `${fitness}`,
      link: "https://exercyse.netlify.app/",
    },
    {
      title: "Dashboard",
      imgUrl: `${dashboard}`,
      link: "https://dash-boad.netlify.app/",
    },
    {
      title: "Crypto App",
      imgUrl: `${crypto}`,
      link: "https://criptoo.netlify.app/",
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
