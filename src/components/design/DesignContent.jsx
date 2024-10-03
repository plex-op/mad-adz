import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./gallery.css"; // Assuming this is the CSS file where styles are defined

const DesignContent = () => {
  // Array of additional information items
  const additionalInfo = [
    { name: "Brand Identity", icon: "/img/power.png" },
    { name: "Print Design", icon: "/img/power.png" },
    { name: "Social Media Posters", icon: "/img/power.png" },
    { name: "Web Graphics", icon: "/img/power.png" },
    { name: "Packaging Design", icon: "/img/power.png" },
    { name: "Illustration", icon: "/img/power.png" },
    { name: "Advertising", icon: "/img/power.png" },
    { name: "Presentation", icon: "/img/power.png" },
    { name: "Email Marketing", icon: "/img/power.png" },
    { name: "Infographic", icon: "/img/power.png" },
  ];

  return (
    <section className="py-5" style={{ background: "#eee" }}>
      <Container className="mt-4 description-container">
        <Row className="row align-items-center">
          {/* Icons Column with Flex Wrap */}
          <Col md={12}>
            <div className="d-flex flex-wrap justify-content-center align-items-center gap-3">
              {additionalInfo.map((service, index) => (
                <div className="box-btn box-bg" key={index}>
                  <div className="icon-box">
                    <img
                      src={service.icon}
                      alt={service.name}
                      className="icon-img"
                    />
                  </div>
                  <div className="box-text">
                    <p>{service.name}</p>
                  </div>
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default DesignContent;
