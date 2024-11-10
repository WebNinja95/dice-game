import React from "react";
import "../App.css";

function Dice({ currentRoll }) {
  const diceImages = [
    "/images/dice-1.png",
    "/images/dice-2.png",
    "/images/dice-3.png",
    "/images/dice-4.png",
    "/images/dice-5.png",
    "/images/dice-6.png",
  ];

  return (
    <div className="dice-container">
      <img
        src={diceImages[currentRoll[0] - 1]}
        alt={`Die 1: ${currentRoll[0]}`}
        className="dice"
      />
      <img
        src={diceImages[currentRoll[1] - 1]}
        alt={`Die 2: ${currentRoll[1]}`}
        className="dice"
      />
    </div>
  );
}

export default Dice;
