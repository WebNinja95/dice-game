export default function player({ playerNumber, score, isCurrentPlayer }) {
  return (
    <div className={`player ${isCurrentPlayer ? "active" : ""}`}>
      <h3>Player {playerNumber}</h3>
      <p>Score: {score}</p>
    </div>
  );
}
