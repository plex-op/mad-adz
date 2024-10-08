import React from "react";
import { Container } from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function TechStack({ clientLogoRef }) {
  const clients = [
    {
      logo: "/img/tech/html.svg",
      title: "Client 1",
    },
    {
      logo: "/img/tech/css3.svg",
      title: "Client 2",
    },
    {
      logo: "/img/tech/javascript.svg",
      title: "Client 3",
    },
    {
      logo: "/img/tech/typescript.svg",
      title: "Client 3",
    },
    {
      logo: "/img/tech/bootstrap.svg",
      title: "Client 4",
    },
    {
      logo: "/img/tech/react.svg",
      title: "Client 5",
    },
    {
      logo: "/img/tech/xjs.svg",
      title: "Client 4",
    },
    {
      logo: "/img/tech/flutter.svg",
      title: "Client 4",
    },
    {
      logo: "/img/tech/angular.svg",
      title: "Client 4",
    },
    {
      logo: "/img/tech/vue.svg",
      title: "Client 4",
    },
    {
      logo: "/img/tech/dj.svg",
      title: "Client 4",
    },
  ];

  // Slider settings for continuous scrolling
  const settings = {
    dots: false,
    infinite: true, // Infinite loop scrolling
    speed: 5000, // Slow down speed to create a continuous scrolling effect
    slidesToShow: 4, // Show 4 logos at a time
    slidesToScroll: 1, // Scroll 1 logo at a time
    autoplay: true, // Enable autoplay
    autoplaySpeed: 0, // Remove pause between scrolls for continuous effect
    cssEase: "linear", // Linear transition for smooth continuous scrolling
    arrows: false, // Disable navigation arrows
    pauseOnHover: false, // Do not pause on hover
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <section
      id="our-clients"
      ref={clientLogoRef}
      style={{ background: "#eee" }}
      className="py-5"
    >
      <Container className="mt-5">
        {/* <div data-aos="fade-right">
          <h2 className="section-title" style={{ color: "black" }}>
            Tech Stack
          </h2>
        </div> */}
        <div
          className="container experience-stats"
          style={{ background: "transparent" }}
        >
          <Slider {...settings}>
            {clients.map((client, index) => (
              <div key={index} className="text-center p-2">
                {" "}
                {/* Reduced padding */}
                <img
                  src={client.logo}
                  alt={client.title}
                  style={{
                    width: "60px", // Reduced size
                    height: "auto",
                    objectFit: "contain",
                    margin: "0 auto", // Center logos
                  }}
                />
              </div>
            ))}
          </Slider>
        </div>
      </Container>
    </section>
  );
}

export default TechStack;
