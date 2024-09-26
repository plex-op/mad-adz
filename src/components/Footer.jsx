import { Container, Row, Col } from "react-bootstrap";
import youtubeIcon from "/img/svg/yt-icon.svg";
import instagramIcon from "/img/svg/insta-icon.svg";
import linkedinIcon from "/img/svg/link-icon.svg";
import { FaEnvelope, FaMobileAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="text-light py-5" id="footer">
      <Container>
        {/* <div data-aos="fade-right">
          <h5 className="mb-5" style={{ color: "#6c67e0" }}>
            Contact Us
          </h5>
        </div> */}
        <Row className="mb-4">
          <Col md={8} className="text-center text-md-start">
            <div className="social-icons  mb-5 d-flex flex-column g-10 footer-card">
              <div className="card1"></div>
              <div class="card2"></div>
              {/* <h2 className="font-weight-bold text-start">Let&apos;s Talk</h2> */}
              <div class="p">
                <img
                  src="/img/madadz.png"
                  alt=""
                  width={"100px"}
                  className="mb-3"
                />
                <p
                  className="mb-3"
                  style={{ fontSize: "14px", fontWeight: "500" }}
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
                <div className="d-flex align-items-center justify-content-center">
                  <a
                    href="#"
                    className="text-light mx-2 d-flex align-items-center"
                  >
                    <img
                      src={youtubeIcon}
                      alt="YouTube"
                      style={{
                        width: "24px",
                        height: "24px",
                        marginRight: "8px",
                      }}
                    />
                  </a>
                  <a
                    href="#"
                    className="text-light mx-2 d-flex align-items-center"
                  >
                    <img
                      src={instagramIcon}
                      alt="Instagram"
                      style={{
                        width: "24px",
                        height: "24px",
                        marginRight: "8px",
                      }}
                    />
                  </a>
                  <a
                    href="#"
                    className="text-light mx-2 d-flex align-items-center"
                  >
                    <img
                      src={linkedinIcon}
                      alt="LinkedIn"
                      style={{
                        width: "24px",
                        height: "24px",
                        marginRight: "8px",
                      }}
                    />
                  </a>
                </div>
              </div>
            </div>
          </Col>
          <Col md={2} className="text-start text-md-start">
            <h5 className="">NAVIGATION</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="/" className="text-light">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-light">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-light">
                  About
                </Link>
              </li>
              <li>
                <Link to="/ourworks" className="text-light">
                  Our Clients
                </Link>
              </li>
              <li>
                <Link to="/ourworks" className="text-light">
                  Blog
                </Link>
              </li>
            </ul>
          </Col>
          <Col md={2} className="text-start text-md-start">
            <h5 className="">OTHERS</h5>
            <ul className="list-unstyled fs-6">
              <li className="d-flex align-items-center">Contact Us</li>
              <li className="d-flex align-items-center">Privacy Policy</li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="text-center">
            <p style={{ fontSize: "14px" }}>Copyright © 2024 MadAdz</p>
            <p style={{ fontSize: "14px" }}>Powered by Madadz</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
