export default function ScoreBoard({ score }) {
    return (
        <div className="score-row">
            <div className="score-item">
                <div className="score-num" style={{color: "#e8734a"}}>{score.X}</div>
                <div className="score-label">Player X</div>
            </div>
            <div className="score-divider" />
            <div className="score-item">
                <div className="score-num" style={{color: "#aaa"}}>{score.D}</div>
                <div className="score-label">Draws</div>
            </div>
            <div className="score-divider" />
            <div className="score-item">
                <div className="score-num" style={{color: "#5a8dee"}}>{score.O}</div>
                <div className="score-label">Player O</div>
            </div>
        </div>
    );
}