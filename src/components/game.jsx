import React, { useState } from "react";
import Dice from "./dice.jsx";
import Player from "./player.jsx";
import "../css/game.css";

function Game({ targetScore }) {
  const [currentPlayer, setCurrentPlayer] = useState(1);
  const [scores, setScores] = useState({ 1: 0, 2: 0 });
  const [currentRoll, setCurrentRoll] = useState([1, 1]);

  const rollDice = () => {
    const die1 = Math.floor(Math.random() * 6) + 1;
    const die2 = Math.floor(Math.random() * 6) + 1;
    setCurrentRoll([die1, die2]);

    if (die1 === 6 && die2 === 6) {
      setScores((prev) => ({ ...prev, [currentPlayer]: 0 }));
      alert(`Player ${currentPlayer} rolled double six! Score reset to 0.`);
    } else {
      setScores((prev) => ({
        ...prev,
        [currentPlayer]: prev[currentPlayer] + die1 + die2,
      }));
    }
  };

  const hold = () => {
    if (scores[currentPlayer] >= targetScore) {
      alert(`Player ${currentPlayer} wins!`);
      window.location.reload();
    } else {
      setCurrentPlayer(currentPlayer === 1 ? 2 : 1);
    }
  };

  return (
    <div className="game-container">
      <h2>Target Score: {targetScore}</h2>
      <div className="players-container">
        <Player
          playerNumber={1}
          score={scores[1]}
          isCurrentPlayer={currentPlayer === 1}
        />
        <Player
          playerNumber={2}
          score={scores[2]}
          isCurrentPlayer={currentPlayer === 2}
        />
      </div>
      <Dice currentRoll={currentRoll} />
      <button onClick={rollDice}>Roll Dice</button>
      <button onClick={hold}>Hold</button>
    </div>
  );
}

export default Game;
