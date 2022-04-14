import "./Pokecard.css"
const POKE_API = "https://assets.pokemon.com/assets/cms2/img/pokedex/detail";

function Pokecard(props) {
  const imgSrc = `${POKE_API}/${String(props.id).padStart(3, '0')}.png`;

  return (
    <div className="Pokecard">
      <h1>{props.name}</h1>
      <img src={imgSrc} alt={props.name} />
      <div>Type: {props.type}</div>
      <div>EXP: {props.exp}</div>
    </div>
  )
}

export default Pokecard;
