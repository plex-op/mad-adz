import React from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import "./gallery.css"; // Assuming you'll put your CSS in this file

const DesignContent = () => {
  return (
    <section className="py-5">
      <Container className=" mt-4">
        <Row className="row">
          <Col md={6}>
            <h3 style={{ color: "white" }}>Additional Information</h3>
            <p style={{ color: "white", textAlign: "justify" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis consequuntur tempore laudantium nam harum repellat
              quod sit, animi dignissimos quae provident culpa facilis quasi
              iure. Tempora corrupti minima nemo sit rem, soluta molestias et,
              provident quia vero enim repellendus. Ipsum laboriosam ducimus
              nesciunt vel nam ea. Quibusdam assumenda labore voluptatem optio
              illum eaque neque, quas corrupti saepe distinctio impedit itaque
              consectetur fugit, molestiae voluptatum delectus. Ullam dolore,
              rem quidem odit recusandae incidunt quisquam sapiente eligendi
              tenetur. Recusandae, nesciunt optio consequatur voluptatem
              asperiores reprehenderit harum necessitatibus blanditiis hic omnis
              ut cum ab dignissimos amet ad minima nisi ipsam modi aliquam quod
              error.
            </p>
          </Col>
          <Col md={6}>
            <div className="d-flex align-items-center">
              {/* <div
                className="light"
                style={{
                  width: "20px",
                  height: "20px",
                  borderRadius: "50%",
                  backgroundColor: "#ffeb3b", // Light color (yellow)
                  marginRight: "10px",
                }}
              ></div> */}
              <img src="/img/webdev.png" alt="" style={{ width: "100%" }} />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default DesignContent;
