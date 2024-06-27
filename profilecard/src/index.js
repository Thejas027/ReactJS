import React, { StrictMode } from "react";
import ReactDOM, { createRoot } from "react-dom/client";
import "./style.css";

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
      <Skill skill="Html+Css" emoji="💪" color="green"/>
      <Skill skill="JavaScript" emoji="💪" color="orange" />
      <Skill skill="React" emoji="👶" color="blue" />
      <Skill skill="C++" emoji="💪" color="orangeRed" />
    </div>
  );
}

function Skill(props) {
  return (
    <div className="skill" style={{backgroundColor:props.color}}>
      <span>{props.skill}</span>
      <span>{props.emoji}</span>
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
