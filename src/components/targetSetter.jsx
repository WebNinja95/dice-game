import React, { useState } from "react";

function TargetSetter({ setTargetScore }) {
  const [input, setInput] = useState("");

  const handleSetTarget = () => {
    const score = parseInt(input);
    if (score >= 0 && score <= 100) {
      setTargetScore(score);
    } else {
      alert("Please enter a number between 0 and 100.");
    }
  };

  return (
    <div>
      <h2>Set Target Score</h2>
      <input
        type="number"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter target score (0-100)"
      />
      <button onClick={handleSetTarget}>Set Target</button>
    </div>
  );
}

export default TargetSetter;
