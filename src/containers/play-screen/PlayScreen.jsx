import "./playScreen.css";
import bg from "../../assets/bg-triangle.svg";
import { Option } from "../../components";

function PlayScreen({playGame}){
    return (
        <div className="game__playscreen">
            <img className="playscreen-bg" src={bg} alt="" />
            <Option playGame={playGame} option="paper" />
            <Option playGame={playGame} option="rock"/>
            <Option playGame={playGame} option="scissors"/>
        </div>
    )
}

export default PlayScreen;