import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { RiWhatsappFill } from "react-icons/ri";
import { MdEmail, MdLocationOn } from "react-icons/md";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import Form from "react-bootstrap/Form";
import "./contact.css";
import { Link } from "react-router-dom";

const ContactForm = () => {
  return (
    <div id="contact-section" style={{ padding: "50px 0" }}>
      <Container className="mt-5">
        <div className="contact-heading text-center">
          <h2 style={{ color: "#fff", fontSize: "40px" }}>
            Let’s Build Together.
          </h2>
          <p style={{ color: "white" }}>
            There is no recruitment problem that we cannot solve. Let us know
            how we can help.
          </p>
        </div>

        <Row>
          <Col xs={12} md={6} className="mb-4">
            <div
              className="contact-details p-4"
              style={{
                background: "rgba(255, 255, 255, 0.1)",
                width: "100%",
                height: "100%",
                borderRadius: "20px",
                boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
              }}
            >
              <h3 className="mb-3" style={{ color: "#fff" }}>
                Meet Us
              </h3>
              <div className="d-flex flex-column">
                <p
                  className="d-flex align-items-center"
                  style={{
                    fontSize: "16px",
                    wordWrap: "break-word",
                    color: "white",
                  }}
                >
                  <RiWhatsappFill
                    style={{
                      fontSize: "30px",
                      marginRight: "10px",
                      color: "white",
                    }}
                  />
                  +91 93616 24563
                </p>
                <p
                  className="d-flex align-items-center"
                  style={{
                    fontSize: "14px",
                    wordWrap: "break-word",
                    color: "white",
                  }}
                >
                  <MdEmail
                    style={{
                      fontSize: "30px",
                      marginRight: "10px",
                      color: "white",
                    }}
                  />
                  support@madads.co.in
                </p>
                <h3 style={{ color: "#fff" }}>Location</h3>
                <p
                  className="d-flex align-items-center"
                  style={{
                    fontSize: "14px",
                    wordWrap: "break-word",
                    color: "white",
                  }}
                >
                  347, Old Gst Road, East Tambaram, Chennai - 600059
                </p>

                {/* Social Media Icons Section */}
                <div className="d-flex align-items-center mt-3">
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "white", marginRight: "10px" }}
                  >
                    <FaFacebookF style={{ fontSize: "25px" }} />
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "white", marginRight: "10px" }}
                  >
                    <FaTwitter style={{ fontSize: "25px" }} />
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "white", marginRight: "10px" }}
                  >
                    <FaInstagram style={{ fontSize: "25px" }} />
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "white", marginRight: "10px" }}
                  >
                    <FaLinkedinIn style={{ fontSize: "25px" }} />
                  </a>
                </div>
              </div>
            </div>
          </Col>

          {/* Form Section */}
          <Col xs={12} md={6} className="mb-4">
            <div
              className="contact-details p-4"
              style={{
                background: "rgba(255, 255, 255, 0.1)",
                width: "100%",
                height: "100%",
                borderRadius: "20px",
                boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
              }}
            >
              <h3
                style={{
                  marginBottom: "20px",
                  fontWeight: "bold",
                  color: "#fff",
                }}
              >
                Talk To Us
              </h3>
              <Form>
                <Form.Group controlId="formGroupName">
                  <Form.Label style={{ color: "white", fontSize: "16px" }}>
                    Name
                  </Form.Label>
                  <Form.Control
                    className="mb-3 enquiry-input"
                    type="text"
                    placeholder="Your Name"
                    style={{
                      borderRadius: "25px",
                      border: "1px solid #ccc",
                      padding: "10px",
                      background: "transparent",
                      color: "white",
                    }}
                  />
                </Form.Group>

                <Form.Group controlId="formGroupEmail">
                  <Form.Label style={{ color: "white", fontSize: "16px" }}>
                    Email
                  </Form.Label>
                  <Form.Control
                    className="mb-3 enquiry-input"
                    type="email"
                    placeholder="Your Email"
                    style={{
                      borderRadius: "25px",
                      border: "1px solid #ccc",
                      padding: "10px",
                      background: "transparent",
                      color: "white",
                    }}
                  />
                </Form.Group>

                <Form.Group controlId="formGroupCity">
                  <Form.Label style={{ color: "white", fontSize: "16px" }}>
                    City
                  </Form.Label>
                  <Form.Control
                    className="mb-3 enquiry-input"
                    type="text"
                    placeholder="Your City"
                    style={{
                      borderRadius: "25px",
                      border: "1px solid #ccc",
                      padding: "10px",
                      background: "transparent",
                      color: "white",
                    }}
                  />
                </Form.Group>

                <Form.Group controlId="formGroupMessage">
                  <Form.Label style={{ color: "white", fontSize: "16px" }}>
                    Message
                  </Form.Label>
                  <Form.Control
                    className="enquiry-input"
                    as="textarea"
                    rows={3}
                    placeholder="Your Message"
                    style={{
                      borderRadius: "15px",
                      border: "1px solid #ccc",
                      padding: "10px",
                      background: "transparent",
                      color: "white",
                    }}
                  />
                </Form.Group>

                <div className="d-flex justify-content-center align-items-center mt-3">
                  <div
                    className="g-recaptcha"
                    data-sitekey="your_site_key"
                  ></div>
                  <Link className="btn-common">Send Message</Link>
                </div>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ContactForm;
