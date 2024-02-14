import React, { useState } from "react";
import "./App.css";

// Import images
// import cuteImage from "./cute-image.jpg";
import grumpyImage from "./grumpy-image.jpg";

function App() {
  const [answer, setAnswer] = useState("");

  const handleYes = () => {
    setAnswer("yes");
  };

  const handleNo = () => {
    setAnswer("no");
  };

  const handleBegin = () => {
    setAnswer("");
  };

  return (
    <div className="App">
      {answer === "" && (
        <div>
          <h1>Do you wanna be my valentine?</h1>
          <button onClick={handleYes}>Yes</button>
          <button onClick={handleNo}>No</button>
        </div>
      )}

      {answer === "yes" && (
        <div className="yes-background" onClick={handleBegin}>
          <div className="centered-text">I'm happy to be your valentine!</div>
        </div>
      )}

      {answer === "no" && (
        <div>
          <img src={grumpyImage} alt="Grumpy" />
          <p>Wrong answer! Try again:</p>
          <button onClick={handleYes}>Yes</button>
        </div>
      )}
    </div>
  );
}

export default App;
