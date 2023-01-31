import { useState } from 'react';
import './App.css';
import { Top } from './components';
import {PlayScreen, Results, Rules} from "./containers"


function App() {
  const [played, setPlayed] = useState(false);
  const [displayRules, setDisplayRules] = useState(false);
  const [winner, setWinner] = useState(false);
  const [scores, setScores]= useState(0);
  const [choices, setChoices] = useState({
    player: "",
    house: ""
  });
  function closeRules(){
    setDisplayRules(false);
  }
  function addScores() {
    setScores(prev => {
      return prev+1;
    });
  }

  function deductScores(){
    setScores(prev => {
      return prev-1;
    });
  }
  function handleGame(playerOption){
    const options = ["rock", "paper", "scissors"];
    const randomNumber = Math.floor(Math.random() * 3);
    const houseOption = options[randomNumber];
    setChoices({player: playerOption, house: houseOption});
    if (playerOption === houseOption) {
      setWinner("Draw");
    } 
    else if (playerOption === "rock") {
      if (houseOption === "paper") {
        setWinner("You loose");
        deductScores()
      } else {
          setWinner("You win");
          addScores()
      }
    }
    else if (playerOption === "paper") {
      if (houseOption === "scissors") {
          setWinner("You loose");
          deductScores()
      } else  {
        setWinner("You win");
        addScores();
      }
    }
    else if (playerOption === "scissors") {
      if (houseOption === "rock") {
        setWinner("You loose");
        deductScores()
      } else {
          setWinner("You win");
          addScores()
      }
    }
    return houseOption;
  }
  function playGame(e) {
    if (!played) {
      handleGame(e.target.id);
      setPlayed(true);
    }
  }

  function restartGame() {
    setPlayed(false);
    setWinner(false);
    setChoices({
      player: "",
      house: ""
    })
  }

  return (
    <div className="game__main">
      <Top scores={scores} />
      {played ? <Results winner={winner} restartGame={restartGame} choices = {choices} /> : <PlayScreen playGame={playGame} />}
      {displayRules ? <Rules closeRules={closeRules} /> : null}
      <button onClick={() => {setDisplayRules(true)}} className="game__rules-btn">Rules</button>
    </div>
  )
}

export default App
