export default function Cell({ value, onClick, isWinnig, gameOver }) {
    return (
        <div className={`cell ${value ? "filled": ""} ${gameOver ? "game-over" : ""} ${isWinnig ? "winning" : ""}`} onClick={onClick}>
            {value && (
                <span className={`mark mark-${value.toLowerCase()}`}>{value}</span>
            )}
        </div>
    )
}