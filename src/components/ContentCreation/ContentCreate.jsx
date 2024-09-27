import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FaCheck } from "react-icons/fa"; // Checkmark icon

// Sample data
const servicesData = [
  {
    img: "/img/webdev.png",
    title: "Web & App Development",
    description: "Transforming ideas into unified web and app Development",
    points: [
      "Recommended for bulk hiring (5+ roles)",
      "Exclusive Search",
      "Cross-functional scalability",
      "Fixed Pricing Model",
      "Dedicated Team of recruiters",
      "Employer Brand Representation",
      "End-to-end recruitment process management",
    ],
  },
  {
    img: "/img/uiux.jpg",
    title: "UI / UX Designing",
    description: "Transforming user feedback into impactful design",
    points: [
      "Recommended for bulk hiring (5+ roles)",
      "Exclusive Search",
      "Cross-functional scalability",
      "Fixed Pricing Model",
      "Dedicated Team of recruiters",
      "Employer Brand Representation",
      "End-to-end recruitment process management",
    ],
  },
  {
    img: "/img/digmarketing.jpg",
    title: "Digital & SEO Solutions",
    description: "Connecting businesses with customers in the digital realm",
    points: [
      "Recommended for bulk hiring (5+ roles)",
      "Exclusive Search",
      "Cross-functional scalability",
      "Fixed Pricing Model",
      "Dedicated Team of recruiters",
      "Employer Brand Representation",
      "End-to-end recruitment process management",
    ],
  },
];

const ContentCreate = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", checkMobile);
    checkMobile();

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  return (
    <div
      id="service-card-info"
      style={{
        backgroundColor: "#F9F9F9",
        padding: "50px 0",
      }}
    >
      <Container>
        {servicesData.map((service, index) => (
          <Row
            key={index}
            className="d-flex align-items-center mb-5"
            style={{
              flexDirection: isMobile
                ? "column"
                : index % 2 === 0
                ? "row"
                : "row-reverse",
            }}
          >
            {/* Image Column */}
            <Col md={6} className="mb-3">
              <img
                src={service.img}
                alt={service.title}
                style={{
                  width: "100%",
                  height: "auto", // Maintain aspect ratio
                  borderRadius: "10px",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                }}
              />
            </Col>

            {/* Content Column */}
            <Col md={6}>
              <h6 style={{ color: "#9D69FF", fontSize: "1.5rem" }}>
                {service.title}
              </h6>
              <h3
                style={{
                  fontSize: "1.2rem", // Adjust font size for mobile
                  fontWeight: "bold",
                  color: "#000",
                }}
              >
                {service.description}
              </h3>
              <ul style={{ listStyleType: "none", paddingLeft: 0 }}>
                {service.points.map((point, idx) => (
                  <li
                    key={idx}
                    style={{
                      fontSize: "1rem",
                      marginBottom: "0.5rem",
                      display: "flex",
                      alignItems: "center",
                      color: "#000",
                    }}
                  >
                    <FaCheck
                      style={{ color: "#9D69FF", marginRight: "10px" }}
                    />
                    {point}
                  </li>
                ))}
              </ul>
              <Button
                variant="primary"
                className="home-btn"
                style={{
                  backgroundColor: "#9D69FF",
                  color: "#fff",
                  padding: "15px 25px",
                  border: "none",
                  borderRadius: "50px",
                  cursor: "pointer",
                  marginTop: "20px",
                }}
              >
                Learn more
              </Button>
            </Col>
          </Row>
        ))}
      </Container>
    </div>
  );
};

export default ContentCreate;
