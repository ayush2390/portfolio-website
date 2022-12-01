import { Container, Row, Col } from "react-bootstrap";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/github.png";
import navIcon3 from "../assets/img/twitter.png";
import navIcon4 from "../assets/img/showwcase.png";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            {" "}
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/ayush-thakur-5b6351161/">
                <img src={navIcon1} alt="Icon" />
              </a>
              <a href="https://github.com/ayush2390">
                <img src={navIcon2} alt="Icon" />
              </a>
              <a href="https://twitter.com/JSAyushThakur">
                <img src={navIcon3} alt="Icon" />
              </a>
              <a href="https://www.showwcase.com/ayush2390">
                <img src={navIcon4} alt="" />
              </a>
            </div>
            <p>Connect With Me</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
