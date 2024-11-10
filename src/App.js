import React, { useState } from "react";
import TargetSetter from "./components/targetSetter.jsx";
import Game from "./components/game.jsx";
import "./App.css";

function App() {
  const [targetScore, setTargetScore] = useState(null);

  return (
    <div className="app-container">
      {targetScore === null ? (
        <TargetSetter setTargetScore={setTargetScore} />
      ) : (
        <Game targetScore={targetScore} />
      )}
    </div>
  );
}

export default App;
