import React, { useState } from "react";
import "../css/target.css";

function TargetSetter({ setTargetScore }) {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const target = parseInt(inputValue);
    if (!isNaN(target) && target >= 1 && target <= 100) {
      setTargetScore(target);
    } else {
      alert("Please enter a valid target score between 1 and 100.");
    }
  };

  return (
    <div className="target-setter">
      <h2>Set Your Target Score</h2>
      <form onSubmit={handleSubmit} className="target-form">
        <input
          type="number"
          placeholder="Enter target (1-100)"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="target-input"
        />
        <button type="submit" className="target-button">
          Set Target
        </button>
      </form>
    </div>
  );
}

export default TargetSetter;
