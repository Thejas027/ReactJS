import { useState } from "react";

const faqs = [
  {
    title: "What are some classic movies everyone should watch?",
    text: "Classic movies that are highly recommended include 'The Godfather', 'Casablanca', 'Gone with the Wind', 'Citizen Kane', and 'Pulp Fiction'. These films have made significant impacts on the film industry and are renowned for their storytelling, acting, and direction.",
  },
  {
    title: "How can I find showtimes for movies currently in theaters?",
    text: "You can find showtimes for current movies by visiting websites such as Fandango, AMC Theatres, or the official websites of local theaters. These platforms provide up-to-date information on showtimes, ticket availability, and theater locations.",
  },
  {
    title: "Are there any upcoming movie releases to look forward to?",
    text: "Yes, some highly anticipated upcoming movie releases include 'Mission: Impossible 8', 'Avatar 3', 'Guardians of the Galaxy Vol. 3', and 'Dune: Part Two'. These films are expected to attract a lot of attention and excitement from audiences worldwide.",
  },
];

export default function App() {
  return (
    <div>
      <Accordion data={faqs} />
    </div>
  );
}

function Accordion({ data }) {
  const [curOpen, setCurOpen] = useState(0);
  return (
    <div className="accordion">
      {data.map((el, i) => (
        <AccordionItem
          curOpen={curOpen}
          onOpen={setCurOpen}
          title={el.title}
          num={i}
          key={el.title}
        >
          {el.text}
        </AccordionItem>
      ))}

      <AccordionItem
        curOpen={curOpen}
        onOpen={setCurOpen}
        title="The React"
        num={22}
        key="test 1"
      >
        <p>Allows React developers to : </p>
        <ul>
          <li>Breakup UI into components</li>
          <li>Make components reusable</li>
          <li>Place state efficiency </li>
        </ul>
      </AccordionItem>
    </div>
  );
}

function AccordionItem({ num, title, curOpen, onOpen, children }) {
  const isOpen = num === curOpen;
  function handleToggle() {
    onOpen(isOpen ? null : num);
  }
  return (
    <div className={`item ${isOpen ? "open" : ""}`} onClick={handleToggle}>
      <p className="number">{num < 9 ? `0${num}` : num + 1}</p>
      <p className="title">{title}</p>
      <p className="icon">{isOpen ? "-" : "+"}</p>
      {isOpen && <div className="content-box">{children}</div>}
    </div>
  );
}
