import React from "react";
import { Container, Row, Col, Card, Image } from "react-bootstrap";
import avatar from "../img/profile.jpg";
import "../style/About.css";

function About() {
  return (
    // About section
    <section id="about" className="py-5">
      <h1 className="about-heading">About Me</h1>
      <Container>
        <Row>
          <Col
            xs={12}
            md={4}
            className="d-flex justify-content-center align-items-center mb-4 mb-md-0"
          >
            <Image src={avatar} rounded fluid className="about-image" />
          </Col>
          <Col xs={12} md={8}>
            <Card>
              <Card.Body>
                <Card.Title className="text-center mb-4">
                  About Yves Harry Deslouches
                </Card.Title>
                <Card.Text>
                  Yves Harry Deslouches, a passionate 26-year-old, has discovered his
                  purpose across a diverse array of fields, including Faith,
                  Philosophy, and Coding. As a
                  dedicated lifelong student, Yves Harry's unfatiguable intellectual pursuit led him to embark on an unforgettable
                  journey at the University of Toronto's esteemed 12-week
                  Full-Stack Developer Coding Bootcamp. Fueled by insatiable
                  curiosity and a genuine desire to make a difference in the
                  world, Yves Harry has committed himself to mastering his craft and relentlessly
                  pursuing excellence in every endeavor, regardless of the
                  challenges he faced.
                </Card.Text>
                <Card.Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet consectetur deleniti eaque voluptate aliquid, expedita iusto doloremque quaerat sunt! Quos repellendus sequi nihil eius error ipsum at earum nemo iusto.
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad, fuga modi recusandae cumque nulla minus blanditiis architecto aut facere enim. Ducimus temporibus at iure esse ullam maxime, error officiis aperiam.
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

// Export About
export default About;
