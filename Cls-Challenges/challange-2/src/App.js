import { useState } from "react";

export default function App() {
  // const [step, setStep] = useState(1);
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  const date = new Date("July 07 2024");
  date.setDate(date.getDate() + count);

  function handleDecrement() {
    setCount((c) => c - step);
  }

  function handleIncrement() {
    setCount((c) => c + step);
  }
  return (
    <>
      <div className="steps">
        <button
          className="step-decrement step"
          onClick={() => setStep((s) => s - 1)}
        >
          -
        </button>
        <h3 className="step-text">Step : {step}</h3>
        <button
          className="step-increment step"
          onClick={() => setStep((s) => s + 1)}
        >
          +
        </button>
      </div>

      <div className="count">
        <button className="step count-decrement" onClick={handleDecrement}>
          -
        </button>
        <h3 className="count-text">Count : {count}</h3>
        <button className="step count-increment" onClick={handleIncrement}>
          +
        </button>
      </div>

      <div className="text">
        {/* Steps{step} : {messages[step - 1]}{" "} */}
        <span>
          {count === 0
            ? "Today is "
            : count > 0
            ? `${count} days form today is `
            : `${Math.abs(count)} days ago was`}
        </span>
        <span>{date.toDateString()}</span>
      </div>
    </>
  );
}
