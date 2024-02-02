
export const ProjectCard = ({ title, imgUrl, link }) => {
  return (
    <div>
    <div className="proj-imgbx">
      <a href={link}>
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>Try Now</h4>
        </div>
      </a>
    </div>
      <div className="project-name">{title}</div>
    </div>
  );
};
