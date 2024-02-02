import React from "react";
import ExperienceCard from "./ExperienceCard";

const Experience = () => {
  const myExperience = [
    {
      position: "System Engineer Trainee",
      duration: "Feb 22 - Feb 23",
      company: "TCS",
    },
    {
      position: "Technical Writer",
      duration: "July 22 - Present",
      company: "LambdaTest",
    },
    {
      position: "React Developer Intern",
      duration: "Dec 22 - Feb 23",
      company: "Inovare Services",
    },
    {
      position: "Developer Advocate",
      duration: "Feb 23 - Mar 23",
      company: "Linkall",
    },
    {
      position: "Community Manager",
      duration: "June 23 - Present",
      company: "ReactPlay",
    },
    {
      position: "Content Creator",
      duration: "Jan 22 - Present",
      company: "Twitter @JSAyushThakur",
    },
    {
      position: "Developer Advocate",
      duration: "Aug 23 - Nov 23",
      company: "Tembo",
    },
  ];
  return (
    <div className="experience-card">
      <h2>Experience</h2>
      {myExperience.map((data, index) => {
        return (
          <ExperienceCard
            position={data.position}
            company={data.company}
            duration={data.duration}
            key={index}
          />
        );
      })}
    </div>
  );
};

export default Experience;
