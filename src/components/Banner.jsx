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
                - Developer Advocate <br/>
                - Community Manager <br/>
                - Technical Content Creator
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
