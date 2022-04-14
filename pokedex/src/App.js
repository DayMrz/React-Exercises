import Pokedex from './components/Pokedex'
import Pokecard from './components/Pokecard'
import './App.css';

function App() {
  return (
    <div className="App">
      <h1> Pokedex</h1>
      <Pokedex />
      <Pokecard
        id={4}
        name="Charmander"
        type="fire"
        exp={62}
      />
    </div>
  );
}

export default App;
