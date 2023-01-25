import "../optionStyles.css";
import scissors from "../../assets/icon-scissors.svg";

function Scissors() {
    return (
        <div className="game__option scissors" id="scissors">
            <img src={scissors} alt="" />
        </div>
    )
}

export default Scissors;