import { useEffect, useReducer } from "react";
import Header from "./Header";
import Main from "./Main";

const initialStates = {
  questions: [],

  // 'loading' , 'error' , 'ready' , 'active, 'finished'
  status: "loading",
};

function reducer(state, action) {
  switch (action.type) {
    case "dataReceived":
      return { ...state, questions: action.payload, status: "ready" };

    case "dataFailed":
      return { ...state, status: "error " };

    default:
      throw new Error("action is unknown");
  }
}

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialStates);
  useEffect(function () {
    fetch("http://localhost:8000/questions")
      .then((res) => res.json())
      .then((data) => dispatch({ type: "dataReceived", payload: data }))
      .catch((err) => dispatch({ type: "dataFailed" }));
  }, []);

  return (
    <div className="app">
      <Header />
      <Main>
        <p>15/20</p>
        <p>Questions?</p>
      </Main>
    </div>
  );
}