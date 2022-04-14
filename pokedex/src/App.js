import { useState } from 'react'

import Pokedex from './components/Pokedex'
import Pokecard from './components/Pokecard'
import './App.css';

function App() {
  const [id, setId] = useState(true)

  return (
    <div className="App">
      <h1>Pokedex</h1>
      <h2>Current id: {id}</h2>
      <Pokedex />
      {id && <Pokecard id={1} />}

      <button type="button" onClick={() => setId(currentId => !currentId)}>toggle</button>
    </div>
  );
}

export default App;
