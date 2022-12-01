import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import linkedin from "../assets/img/linkedin-clone.png";
import profile from "../assets/img/profile.png";

const Banner = () => {
  return (
    <div>
      <section className="banner" id="home">
        <Container>
          <Row className="align-items-center">
            <Col xs={12} md={6} xl={7}>
              <span className="tagline">Welcome to my portfolio</span>
              <h1>Hi I'm Ayush Thakur</h1>
              <p>
                A B.tech graduate in IT field. I'm a Front-end Developer and my
                core is into React and JavaScript. Also working as a Technical
                Writer, Freelancer and Content Creator. Also loves to read
                books, cooking and huge video games lover
              </p>
            </Col>
            <Col xs={12} md={6} xl={5}>
              <img src={profile} alt="Header Img" />
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Banner;
