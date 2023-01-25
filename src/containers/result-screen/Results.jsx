import "./results.css";
import { Paper, Rock, Scissors } from "../../components";
function Results() {
    return (
        <div className="game__results">
            <div className="results__choice">
                <h4>You picked</h4>
                <Paper />
            </div>
            <div className="results__choice">
                <h4>The house picked</h4>
                <Rock />
            </div>
        </div>
    )
}

export default Results