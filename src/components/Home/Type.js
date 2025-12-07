import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Data Scientist",
          "AI Enthusiast",
          "Data & Security Analytics",
          "Machine Learning Engineer (Junior)",
          "Data Analyst & Storyteller"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
