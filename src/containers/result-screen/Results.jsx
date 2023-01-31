import "./results.css";
import { Option } from "../../components";
function Results({winner, choices, restartGame}) {
    return (
        <div className="game__results">
            <div className="results__choice">
                <h4>You picked</h4>
                <Option option={choices.player} />
            </div>
            <div className="result__display">
                <h2>{winner}</h2>
                <button onClick={restartGame} className="restart__btn">Play again</button>
            </div>
            <div className="results__choice">
                <h4>The house picked</h4>
                <Option option={choices.house} />
            </div>
        </div>
    )
}

export default Results