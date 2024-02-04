import React from "react";

const ExperienceCard = ({ position, company, duration }) => {
  return (
    <div className="experience-card-container">
      <div className="experience-card-shape">
        <div className="experience-card-circle"></div>
        <div className="experience-card-line"></div>
      </div>
      <div className="blog-txtx experience-card-content">
        <div className="experience-name">
          <p>
            {position} ({company})
          </p>
        </div>
        <div className="experience-date">{duration}</div>
      </div>
    </div>
  );
};

export default ExperienceCard;
