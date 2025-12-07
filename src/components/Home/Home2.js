import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
  I started my journey in Networks and Cybersecurity,
  before discovering my passion for <span className="purple">Data Science </span>
  and <span className="purple">Artificial Intelligence</span>.
  Today, I thrive on analyzing and transforming data to build
  useful, intelligent, and impactful solutions.
  <br />
  <br />
  I primarily work with
  <i>
    <b className="purple"> Python, SQL, Pandas, Scikit-learn, TensorFlow </b>
  </i>
  and I also explore technologies related to Web Development and Systems.
  <br />
  <br />
  My fields of interest include building new
  <i>
    <b className="purple"> Machine Learning models, Data Pipelines, </b>
  </i>
  and I maintain a strong focus on <b className="purple">Cybersecurity</b>.
  <br />
  <br />
  Whenever possible, I love building projects that bridge the gap between
  <b className="purple"> Data Science </b> and{" "}
  <i>
    <b className="purple">Development (React.js, APIs, Automation)</b>.
  </i>
</p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
