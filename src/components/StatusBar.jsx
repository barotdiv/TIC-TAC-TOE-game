export default function StatusBar({ currentPlayer, gameOver }) {
  return (
    <div className="status-bar">
      <div className={`player-tag ${!gameOver && currentPlayer==="X" ? "active-x" : "inactive"}`}>
        <div className={`dot ${!gameOver && currentPlayer==="X" ? "dot-x" : "dot-inactive"}`} />
        Player X
      </div>

      <span className="vs">vs</span>

      <div className={`player-tag ${!gameOver && currentPlayer==="O" ? "active-o" : "inactive"}`}>
        Player O
        <div className={`dot ${!gameOver && currentPlayer==="O" ? "dot-o" : "dot-inactive"}`} />
      </div>
    </div>
  );
}