import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

// J'utilise les images existantes pour l'instant pour éviter les erreurs.
// Pensez à ajouter vos propres captures d'écran dans le dossier Assets plus tard.
import leaf from "../../Assets/Projects/leaf.png";     // Pour le projet YOLO
import chatify from "../../Assets/Projects/chatify.png"; // Pour le projet RAG
import editor from "../../Assets/Projects/codeEditor.png"; // Pour le projet Fusion

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          
          {/* PROJET 1 : COMPUTER VISION */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf} // Changez cette image plus tard
              isBlog={false}
              title="Real-Time Object Detection (YOLOv8)"
              description="A computer vision project utilizing YOLOv8 to detect and classify objects in real-time video streams. Optimized for performance with PyTorch and OpenCV, capable of identifying traffic signs and pedestrians with high accuracy (mAP@50 > 0.95)."
              ghLink="https://github.com/VOTRE-PSEUDO/NOM-DU-REPO-YOLO"
              demoLink="https://huggingface.co/" // Lien vers une démo ou une vidéo youtube si dispo
            />
          </Col>

          {/* PROJET 2 : RAG / CYBER */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify} // Changez cette image plus tard
              isBlog={false}
              title="CyberSec RAG Assistant"
              description="An AI-powered assistant built with LangChain and OpenAI API (or Mistral). It uses Retrieval-Augmented Generation (RAG) to query a vector database containing cybersecurity course materials, providing accurate answers with citations while minimizing hallucinations."
              ghLink="https://github.com/VOTRE-PSEUDO/NOM-DU-REPO-RAG"
              // demoLink=""  <-- Enlevez le commentaire si vous avez un lien de démo
            />
          </Col>

          {/* PROJET 3 : FUSION CAPTEURS / DATA */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor} // Changez cette image plus tard
              isBlog={false}
              title="LiDAR & Camera Sensor Fusion"
              description="Implementation of a Sensor Fusion algorithm combining 3D Point Clouds (LiDAR) and RGB Images (Camera) using the KITTI dataset. Used for precise 3D object tracking and depth estimation in autonomous driving scenarios."
              ghLink="https://github.com/VOTRE-PSEUDO/NOM-DU-REPO-FUSION"
              // demoLink="" 
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;