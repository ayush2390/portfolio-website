import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, imgUrl, link }) => {
  return (
    <div className="proj-imgbx">
      <a href={link}>
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
        </div>
      </a>
    </div>
  );
};
