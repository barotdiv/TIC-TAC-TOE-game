import Cell from "./Cell";

export default function Board({ squares, handleClick, winLine, gameOver }) {
    return (
        <div className="board">
            {squares.map((val, i) => (
                <Cell key={i} value={val} onClick={() => handleClick(i)} isWinnig={winLine.includes(i)} gameOver={gameOver} />
            ))}
        </div>
    );
}