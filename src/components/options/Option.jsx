import "./option.css";
import data from "../../gameData";

function Option({playGame, option}) {
    const {name, image} = data[option]
    return (
        <div className={`game__option ${name}`}>
            <img id={name} src={image} alt=""  onClick={playGame}/>
        </div>
    )
}

export default Option;