import './App.css';
import { Top } from './components';
import {PlayScreen} from "./containers"

function App() {
  return (
    <div className="game__main">
      <Top />
      <PlayScreen />
      <button className="game__rules-btn">Rules</button>
    </div>
  )
}

export default App
