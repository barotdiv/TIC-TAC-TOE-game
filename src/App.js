import { useState, useEffect } from "react";
import { checkWinner } from "./utils/checkWinner";

import Board from "./components/Board";
import ScoreBoard from "./components/ScoreBoard";
import StatusBar from "./components/StatusBar";
import ResultBanner from "./components/ResultBanner";
import "./styles/tictactoe.css";

export default function App() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isX, setIsX] = useState(true);
  const [score, setScore] = useState({ X: 0, O: 0, D: 0 });
  const [gameOver, setGameOver] = useState(false);
  const [resultInfo, setResultInfo] = useState(null);

  const result = checkWinner(squares);
  const isDraw = !result && squares.every(Boolean);

  useEffect(() => {
    if (result) {
      setScore(s => ({ ...s, [result.winner]: s[result.winner] + 1 }));
      setResultInfo({ type: "win", winner: result.winner });
      setGameOver(true);
    } else if (isDraw) {
      setScore(s => ({ ...s, D: s.D + 1 }));
      setResultInfo({ type: "draw" });
      setGameOver(true);
    }
  }, [squares]);

  function handleClick(i) {
    if (squares[i] || gameOver) return;
    const next = [...squares];
    next[i] = isX ? "X" : "O";
    setSquares(next);
    setIsX(!isX);
  }

  function reset() {
    setSquares(Array(9).fill(null));
    setIsX(true);
    setGameOver(false);
    setResultInfo(null);
  }

  function resetAll() {
    reset();
    setScore({ X: 0, O: 0, D: 0 });
  }

  const winLine = result?.line || [];
  const currentPlayer = isX ? "X" : "O";

  return (
    <div className="app">
      <h1 className="title">Tic-Tac-Toe</h1>
      <p className="subtitle">Classic · Two Players</p>

      <div className="card">

        <ScoreBoard score={score} />

        {!resultInfo && (
          <StatusBar currentPlayer={currentPlayer} gameOver={gameOver} />
        )}

        {resultInfo && <ResultBanner resultInfo={resultInfo} />}

        <Board
          squares={squares}
          handleClick={handleClick}
          winLine={winLine}
          gameOver={gameOver}
        />

        <div className="footer">
          <button className="btn" onClick={resetAll}>Reset Scores</button>
          <button className="btn primary" onClick={reset}>
            {gameOver ? "Play Again" : "New Game"}
          </button>
        </div>

      </div>
    </div>
  );
}
