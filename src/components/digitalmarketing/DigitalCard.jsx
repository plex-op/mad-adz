import React from "react";
import { Card, Row, Col, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./digital.css"; // Optional for additional custom styling

const cardData = [
  {
    title: "Marketing Strategy",
    description:
      "A well-crafted marketing strategy aligns your brand's goals with target audience insights, driving long-term growth. It integrates market research, competitor analysis, and key messaging to enhance visibility and customer engagement.",
    imageUrl: "/img/tech/adobe-illustrator.svg",
  },
  {
    title: "Digital Advertising",
    description:
      "Leverage digital platforms like Google, social media, and display networks to reach your audience with precision. Through targeted ads, data-driven campaigns, and performance tracking, maximize ROI while optimizing user engagement.",
    imageUrl: "/img/tech/adobe-illustrator.svg",
  },
  {
    title: "Media Strategy",
    description:
      "An effective media strategy blends traditional and digital channels to amplify your brand’s presence. By analyzing audience behavior and media consumption patterns, you can ensure optimal reach, frequency, and impact across touchpoints.",
    imageUrl: "/img/tech/adobe-illustrator.svg",
  },
];

const DigitalCard = () => {
  return (
    <section style={{ backgroundColor: "#F9F9F9" }}>
      <Container className="mt-4 py-5">
        <h2 className="section-title mb-4" style={{ color: "black" }}>
          Digital Strategy
        </h2>
        <Row>
          {cardData.map((card, index) => (
            <Col md={4} sm={12} key={index} className="mb-4">
              <Card className="branding-card p-3">
                <div className="d-flex justify-content-center align-items-center mb-3">
                  <Card.Img
                    variant="top"
                    src={card.imageUrl}
                    style={{
                      width: "60px", // Ensure it's an icon-sized image
                      height: "auto", // Maintain aspect ratio
                    }}
                  />
                </div>
                <Card.Body className="text-center">
                  <Card.Title>{card.title}</Card.Title>
                  <Card.Text>{card.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default DigitalCard;
