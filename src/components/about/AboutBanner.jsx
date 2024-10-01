import React from "react";
import { Container, Button } from "react-bootstrap";
import { bannerData } from "../../data";
import "./about.css";

const AboutBanner = () => {
  return (
    <section className="banner-abt">
      <Container className="vh-100 d-flex justify-content-center align-items-center">
        {bannerData.map((data, index) => (
          <div className="text-center services-heading" key={index}>
            <span
              style={{
                fontSize: "1.5rem !important",
                letterSpacing: ".8px",
                marginBottom: "1.5rem",
                color: "White",
              }}
            >
              {data.title}
            </span>
            <h2
              style={{
                fontWeight: "800 !important",
                fontSize: "3.375rem !important",
                maxWidth: "580px",
                margin: "0 auto",
                marginBottom: "1rem",
                color: "White",
              }}
            >
              {data.mainText}
              <span>{data.spanText}</span>
            </h2>
            <p
              style={{
                fontWeight: "500",
                fontSize: "1.1rem",
                maxWidth: "680px",
                margin: "0 auto",
                color: "White",
              }}
            >
              {data.description}
            </p>
            <Button variant="primary" className="home-btn mt-5 btn-common">
              Start Your Journey
            </Button>
          </div>
        ))}
      </Container>
    </section>
  );
};

export default AboutBanner;
