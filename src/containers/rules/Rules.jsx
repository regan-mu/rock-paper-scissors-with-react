import "./rules.css";
import rulesImg from "../../assets/image-rules.svg";
import close from "../../assets/icon-close.svg";

function Rules({closeRules}) {
    return (
        <div className="games_rules">
            <div className="rules_container">
                <div className="rules-top">
                    <p>Rules</p>
                    <img src={close} alt="" onClick={closeRules} />
                </div>
                <img className="rules-img" src={rulesImg} alt="" />
            </div>
        </div>
    )
}

export default Rules;