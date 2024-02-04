import React from "react";
import { BlogCard } from "./BlogCard";
import breakpoints from "../assets/img/css-breakpoints.png";
import display from "../assets/img/css-display.png";
import hover from "../assets/img/hover.png";
import header from "../assets/img/header.png";
import jsconcepts from "../assets/img/js-concepts.png";

const Blogs = () => {
  const blogs = [
    {
      title: "Common CSS Breakpoints For Media Queries",
      imgUrl: `${breakpoints}`,
      link: "https://www.lambdatest.com/blog/common-css-breakpoints/",
      desc: "As technology is growing every day, the diversification in the types of electronic devices is also expanding ",
    },
    {
      title:
        "CSS Display Property: Exploring Different Values And Their Effects",
      imgUrl: `${display}`,
      link: "https://www.lambdatest.com/blog/css-display-property/",
      desc: "When building a website or web product, the most crucial factor to consider is user experience ",
    },
    {
      title: "An Interactive Guide To CSS Hover Effects",
      imgUrl: `${hover}`,
      link: "https://www.lambdatest.com/blog/css-hover-effects/",
      desc: "Building a website is all about thinking about the user experience ",
    },
    {
      title: "Important JavaScript Concepts for React",
      imgUrl: `${jsconcepts}`,
      link: "https://www.showwcase.com/article/34825/important-javascript-concepts-for-react",
      desc: "If you are into the field of Web Development, then you must have heard the name React ",
    },
    {
      title: "A Complete Guide To CSS Headers",
      imgUrl: `${header}`,
      link: "https://www.lambdatest.com/blog/css-header/",
      desc: "One of the integral aspects of a web product is to build an ever-lasting mesmerizing experience ",
    },
  ];
  return (
    <section className="blogs" id="blogs">
      <h2>My Blogs</h2>
      <div className="blogdiv">
        {blogs.map((project, index) => {
          return (
            <BlogCard
              title={project.title}
              imgUrl={project.imgUrl}
              link={project.link}
              key={index}
              desc={project.desc}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Blogs;
