import React from "react";
import { Container, Card, Button } from "react-bootstrap";
import { historyContent } from "../../data"; // Ensure this file exports an array of objects
import "./about.css";

const OurHistory = () => {
  return (
    <div style={{ background: "#1a1a1a" }} className="py-5">
      <Container className="d-flex justify-content-center align-items-center h-100 ">
        {historyContent.map((data, index) => (
          <Card
            className="text-left w-100 history-card"
            key={index}
            style={{
              background: "#1a1a1a", // Dark background (slightly off-black for depth)
              color: "#fff", // White text for contrast
              border: "none", // Removes default Bootstrap border
            }}
          >
            <Card.Body>
              <Card.Title
                style={{
                  fontSize: "2.5rem",
                  fontWeight: "bold",
                  position: "relative",
                }}
                className="history-card-title"
              >
                {data.title}
                <div
                  style={{
                    width: "100px",
                    height: "4px",
                    backgroundColor: "#870be7",
                    marginTop: "10px",
                    transformOrigin: "left",
                  }}
                ></div>
              </Card.Title>
              <ul
                style={{
                  fontSize: "1.1rem",
                  marginBottom: "1.5rem",
                  listStyle: "none",
                  paddingLeft: "0",
                }}
                className="history-card-des"
              >
                {data.description.map((point, i) => (
                  <li key={i} style={{ marginBottom: "0.5rem" }}>
                    {point}
                  </li>
                ))}
              </ul>
              {/* <Button
                style={{
                  backgroundColor: "transparent", // Transparent background
                  border: "2px solid #870be7", // Attractive gold-colored border
                  color: "#000", // Matching text color
                  borderRadius: "30px", // Rounded button edges
                  padding: "10px 20px", // Spacing for better size and padding
                  fontWeight: "bold", // Make text bold
                  transition: "all 0.3s ease", // Smooth hover transition
                }}
                className="abt-his-btn"
                onMouseEnter={(e) => (
                  (e.target.style.backgroundColor = "#870be7"),
                  (e.target.style.color = "#000")
                )} // Hover effect: Fill with color
                onMouseLeave={(e) => (
                  (e.target.style.backgroundColor = "transparent"),
                  (e.target.style.color = "##870be7")
                )} // Reset on hover out
              >
                {data.buttonText}
              </Button> */}
            </Card.Body>
          </Card>
        ))}
      </Container>
    </div>
  );
};

export default OurHistory;
