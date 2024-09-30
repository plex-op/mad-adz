import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./gallery.css"; // Assuming you'll put your CSS in this file
import { FaCheck } from "react-icons/fa";

const DesignContent = () => {
  // Array of additional information items
  const additionalInfo = [
    "Brand Identity Design",
    "Print Design",
    "Social Media Posters",
    "Logo Design",
    "Web Graphics",
    "Packaging Design",
    "Illustration Services",
    "Advertising Design",
    "Presentation Design",
    "Email Marketing Graphics",
    "Infographic Design",
  ];

  return (
    <section className="py-5">
      <Container className="mt-4">
        <Row className="row align-items-center">
          <Col md={6} className="order-2 order-md-1">
            <h3 style={{ color: "white" }}></h3>
            <ul
              style={{
                color: "white",
                textAlign: "left",
                paddingLeft: "0", // Remove left padding for list
                listStyleType: "none", // Remove default bullets
              }}
            >
              {additionalInfo.map((info, index) => (
                <li
                  key={index}
                  style={{
                    marginBottom: "10px",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <FaCheck style={{ color: "#9D69FF", marginRight: "10px" }} />
                  {info}
                </li>
              ))}
            </ul>
          </Col>

          <Col md={6}>
            <div className="d-flex align-items-center order-1 order-md-2">
              <img src="/img/webdev.png" alt="" style={{ width: "100%" }} />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default DesignContent;
