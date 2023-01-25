import { useState } from 'react';
import './App.css';
import { Top } from './components';
import {PlayScreen, Results, Rules} from "./containers"


function App() {
  const [played, setPlayed] = useState(false);
  const [displayRules, setDisplayRules] = useState(false);
  function closeRules(){
    setDisplayRules(false);
  }


  return (
    <div className="game__main">
      <Top />
      {played ? <Results /> : <PlayScreen />}
      {displayRules ? <Rules closeRules={closeRules} /> : null}
      <button onClick={() => {setDisplayRules(true)}} className="game__rules-btn">Rules</button>
    </div>
  )
}

export default App
