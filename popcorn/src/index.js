import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import StarRating from "./components/StarRating";  

function Test() {
  const [movieRating, setMovieRating] = useState(0);

  return (
    <div>
      <StarRating color="blue" maxRating={10} onSetRating={setMovieRating} />
      <p>This movie was rated {movieRating} stars</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    {/* <StarRating
      maxRating={5}
      // message={["Terrible", "Bad", "okay", "Good", "Amazing"]}
      message={[]}
      color="#fcc419"
      size={48}
      className=""
      defaultRating={0}
    /> */}
  </React.StrictMode>
);
