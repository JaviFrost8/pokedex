import React, { useEffect, useState } from 'react'

export const PokemonAttack = ({ pokemon }) => {

  const [attacks, setAttacks] = useState([]);
  const [attack, setAttack] = useState('')

  useEffect(() => {
    if (pokemon) {
      setAttacks(pokemon.moves)
    }
  }, [pokemon])

  if (!pokemon) {
    return <div></div>

  }

  function selectMove(e) {
    const name = e.target.innerText;
    setAttack(name)
  }

  return (
    <div className='container'>
      <div className='pokemonAttacks'>
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />

          {!attack 
          ?
            attacks.slice(attacks.length - 4).map((attack, index) => {
              return <button onClick={selectMove} key={index}>{attack.move.name}</button>
            })
          :
            <span className='attackSelected'>{attack}</span>
          }
      </div>
    </div>
  )
}
