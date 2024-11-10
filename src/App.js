import React, { useState } from "react";
import TargetSetter from "./components/targetSetter.jsx";
import Game from "./components/game.jsx";

function App() {
  const [targetScore, setTargetScore] = useState(null);

  return (
    <div className="app-container">
      <h1>Dice Game</h1>
      {targetScore === null ? (
        <TargetSetter setTargetScore={setTargetScore} />
      ) : (
        <Game targetScore={targetScore} />
      )}
    </div>
  );
}

export default App;
