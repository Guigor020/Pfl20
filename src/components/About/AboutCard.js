import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I’m <span className="purple">Mouhamadou Gorgui CISSE</span>{" "}
            from <span className="purple">Dakar, Senegal</span>.
            <br />
            I’m currently a <span className="purple">Master 2 Student</span> in Data Science & AI at Mundiapolis university in Casablanca.
            <br />
            I have a background in <span className="purple">Cybersecurity</span> and I am actively looking for my <span className="purple">End-of-Studies Internship (PFE)</span>.
            <br />
            <br />
            Outside of coding, I love engaging in activities that keep me
            creative and inspired:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Traveling, discovering new places
            </li>
            <li className="about-activity">
              <ImPointRight /> Going to the gym, boosting energy and focus
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring New Technologies 
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Data is not just numbers, it's the new oil!"{" "}
          </p>
          <footer className="blockquote-footer">MGC</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
