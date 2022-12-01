import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import react from "../assets/img/react.png";
import redux from "../assets/img/redux.png";
import js from "../assets/img/js.png";
import next from "../assets/img/next.png";
import colorSharp from "../assets/img/color-sharp.png";
import html from "../assets/img/html-logo.png";
import firebase from "../assets/img/firebase.png";
import github from "../assets/img/github-logo.png";

const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  const slideImages = [
    {
      src: `${react}`,
      name: "React",
    },
    {
      src: `${next}`,
      name: "Next",
    },
    {
      src: `${redux}`,
      name: "Redux",
    },
    {
      src: `${js}`,
      name: "JavaScript",
    },
    {
      src: `${html}`,
      name: "HTML",
    },
    {
      src: `${firebase}`,
      name: "Firebase",
    },
    {
      src: `${github}`,
      name: "Github",
    },
  ];
  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-box">
              <h2>Skills</h2>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="skill-slider"
              >
                {slideImages.map((image, index) => (
                  <div>
                    <img
                      src={image.src}
                      alt={image.name}
                      className="sliding-images"
                    />
                    <h5 className="name">{image.name}</h5>
                  </div>
                ))}
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
      <img src={colorSharp} className="background-image-left" />
    </section>
  );
};

export default Skills;
