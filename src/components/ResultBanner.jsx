export default function ResultBanner({ resultInfo }) {
  return (
    <div className={`result-banner ${
      resultInfo.type === "draw"
        ? "draw"
        : resultInfo.winner === "X"
        ? "win-x"
        : "win-o"
    }`}>
      <strong>
        {resultInfo.type === "draw"
          ? "It's a Draw!"
          : `Player ${resultInfo.winner} Wins!`}
      </strong>
      <span>
        {resultInfo.type === "draw"
          ? "Well played by both"
          : "Congratulations"}
      </span>
    </div>
  );
}