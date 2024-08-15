import Timer from "./Timer";
import NextButton from "./NextButton";
export default function Footer({
  dispatch,
  numQuestions,
  secondsRemaining,
  answer,
  index,
}) {
  return (
    <footer>
      <Timer dispatch={dispatch} secondsRemaining={secondsRemaining} />
      <NextButton
        dispatch={dispatch}
        answer={answer}
        index={index}
        numQuestions={numQuestions}
      />
    </footer>
  );
}
