import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./service.css";

const ServiceBanner = () => {
  return (
    <section className="home-section">
      <Container className="vh-md-100 d-flex flex-column">
        <Row className="flex-grow-1 align-items-center">
          {/* Image Column */}
          <Col xs={12} md={4} className="order-1 order-md-2 mt-5 serv-img">
            <div style={{ position: "relative", width: "100%" }}>
              <div
                style={{
                  margin: "0 auto",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <img
                  src="/img/serv-img.png"
                  alt=""
                  style={{
                    width: "90%",
                    overflow: "hidden",
                    // boxShadow: "0 10px 30px rgba(0, 0, 0, 0.7)",
                  }}
                  className="rotate-img"
                />
              </div>
              <div
                style={{
                  position: "absolute",
                  bottom: "-20px",
                  // right: "0",
                  padding: "10px 20px",
                  backgroundColor: "#870be7",
                  border: "1px solid white",
                  color: "#fff",
                  borderRadius: "8px",
                  // margin: "0 auto",
                  display: "flex",
                  justifyContent: "center",
                  width: "100%",
                }}
              >
                <strong>Settings designed to work for you </strong>
              </div>
            </div>
          </Col>

          {/* Content Column */}
          <Col xs={12} md={8} className="home-content order-2 order-md-1 mt-5">
            <h2 style={{ fontSize: "60px", color: "#fff" }}>
              Transforming Ideas<span>into Digital Solutions</span>
            </h2>
            <p style={{ color: "white" }}>
              At MADADZ, we specialize in transforming your ideas into
              innovative digital solutions that drive results. Our expert web
              development team crafts responsive and visually appealing websites
              tailored to your business needs. We prioritize exceptional UI/UX
              design to ensure seamless user experiences that engage and convert
              visitors. Coupled with our strategic digital marketing services,
              we help elevate your brand's online presence and reach your target
              audience effectively. Partner with us to bring your vision to life
              and achieve lasting success in the digital landscape.
            </p>
            <Button
              variant="primary"
              className="home-btn mb-5"
              style={{
                background: "#333",
                color: "#fff",
                padding: "15px 25px",
                border: "none",
                borderRadius: "50px",
                cursor: "pointer",
              }}
            >
              Start Your Journey
            </Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ServiceBanner;
