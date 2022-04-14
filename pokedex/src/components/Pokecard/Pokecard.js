import { useState, useEffect } from 'react'

// https://reactjs.org/docs/hooks-reference.html
// useState*
// useEffect
// useCallback
// useRef*
// useReducer
// useId
// useContext
// useMemo
// useTransition

import "./Pokecard.css"

const POKE_ASSET = "https://assets.pokemon.com/assets/cms2/img/pokedex/detail";
const POKE_API = "https://pokeapi.co/api/v2/pokemon";

function Pokecard(props) {
  const [data, setData] = useState({
    name: '',
    type: '',
    exp: '',
    image: '',
  })

  const { id } = props;
  const { name, type, exp, image } = data;

  useEffect(
    () => {
      setData(prevValue => {
        return ({ ...prevValue, image: `${POKE_ASSET}/${String(id).padStart(3, '0')}.png` })
      })

      fetch(`${POKE_API}/${id}`)
        .then(res => res.json())
        .then(res => {
          setData(prevValue => {
            return ({
              ...prevValue,
              name: res.name,
              type: res.types.map(({ type: { name } }) => name).join('/'),
              exp: res.base_experience,
            })
          })
        })
    },
    [id]
  )

  return (
    <div className="Pokecard">
      <h1>{name}</h1>
      <img src={image} alt={name} />
      <div>Type: {type}</div>
      <div>EXP: {exp}</div>
    </div>
  )
}

export default Pokecard;
