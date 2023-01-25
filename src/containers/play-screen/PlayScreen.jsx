import "./playScreen.css";
import bg from "../../assets/bg-triangle.svg";
import { Paper, Rock, Scissors } from "../../components";

function PlayScreen(){
    return (
        <div className="game__playscreen">
            <img className="playscreen-bg" src={bg} alt="" />
            <Paper />
            <Rock />
            <Scissors />
        </div>
    )
}

export default PlayScreen;