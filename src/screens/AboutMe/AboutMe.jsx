import React from "react";
import "./AboutMe.css";

let imgUrl = "https://picsum.photos/800";

function AboutMe() {
  return (
    <div id="aboutme" className="aboutme-container">
      <img src={imgUrl} alt="aboutme" />
      <div className= "divclass">
        <h1>About Me</h1>
        <p>
            Hi there! My name is Samuel Yuabov, and I'm currently a student at Queens College Cuny pursuing a degree in computer science. As a computer science major, I'm passionate about technology and how it can be used to solve complex problems. I'm constantly working on personal projects and looking for ways to expand my coding knowledge. I love the challenge of creating something from scratch and seeing it come to life. When I'm not coding, you can usually find me exploring new technologies, or hanging out with friends. I'm excited to see where my journey in computer science takes me and am always looking for opportunities to learn and grow.
        </p>
      </div>
    </div>
  );
}

export default AboutMe;
