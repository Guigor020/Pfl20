import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiAnaconda,
  SiJupyter,
  SiWindows,
  SiLinux, // On utilise l'icône Linux standard qui est compatible
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiWindows />
        <div className="tech-icons-text">Windows</div>
      </Col>
      
      <Col xs={4} md={2} className="tech-icons">
        <SiLinux /> {/* Affiche le pingouin Linux */}
        <div className="tech-icons-text">Parrot OS</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
        <div className="tech-icons-text">VS Code</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiAnaconda />
        <div className="tech-icons-text">Anaconda</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiJupyter />
        <div className="tech-icons-text">Jupyter</div>
      </Col>
    </Row>
  );
}

export default Toolstack;