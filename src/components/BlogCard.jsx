export const BlogCard = ({ title, imgUrl, link, desc }) => {
  return (
    <div className="blog-flex-container">
      <div className="blog-imgbx">
        <img src={imgUrl} />
      </div>
      <div className="blog-txtx">
        <div className="blog-name">
          <a href={link}>{title}</a>
        </div>
        <div className="blog-desc">
          {desc}
          <a href={link}>read more...</a>
        </div>
      </div>
    </div>
  );
};
