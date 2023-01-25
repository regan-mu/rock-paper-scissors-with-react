import "./rock.css";
import rock from "../../assets/icon-rock.svg";

function Rock() {
    return (
        <div className="game__option rock" id="rock">
            <img src={rock} alt="" />
        </div>
    )
}

export default Rock;