import "./top.css";
import logo from "../../assets/logo.svg"

function Top({scores}) {
    return (
        <div className="game__top">
            <img src={logo} alt="" />
            <div className="game__score">
                <p>Score</p>
                <h3>{scores}</h3>
            </div>
        </div>
    )
}

export default Top;