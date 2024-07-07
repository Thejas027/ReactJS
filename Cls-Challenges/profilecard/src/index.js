import React, { StrictMode } from "react";
import ReactDOM, { createRoot } from "react-dom/client";
import "./style.css";

const skills = [
  {
    skill: "Html+Css",
    level: "advance",
    color: "#2662EA",
  },
  {
    skill: "JavaScript",
    level: "advance",
    color: "#EFD81D",
  },
  {
    skill: "Git and Git-hub",
    level: "intermediate",
    color: "red",
  },
  {
    skill: "C++",
    level: "advance",
    color: "#266223",
  },
  {
    skill: "React",
    level: "beginner",
    color: "#67DAFB",
  },
];

function App() {
  return (
    <div className="card">
      <Avatar />

      <div className="data">
        <Intro />

        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return <img className="avatar" src="images/profile1.jpg" alt="Thejas " />;
}

function Intro() {
  return (
    <div>
      <h2>Thejas</h2>
      <p>
        I'm currently learning full-stack development, focusing on building
        robust web applications. This journey involves mastering both front-end
        and back-end technologies to create dynamic, responsive, and efficient
        applications.
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      {/* <Skill skill="Html+Css" emoji="💪" color="green" />
      <Skill skill="JavaScript" emoji="💪" color="orange" />
      <Skill skill="React" emoji="👶" color="blue" />
      <Skill skill="C++" emoji="💪" color="orangeRed" /> */}
      {skills.map((skill) => (
        <Skill skill={skill.skill} color={skill.color} level={skill.level} />
      ))}
    </div>
  );
}

function Skill({ skill, color, level }) {
  return (
    <div className="skill" style={{ backgroundColor: color }}>
      <span>{skill}</span>
      <span>
        {level === "beginner" && "👶"}
        {level === "intermediate" && "👍"}
        {level === "advance" && "💪"}
      </span>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
