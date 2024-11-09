import React, { useEffect, useState } from 'react'
import { fetchPokemonAttack } from '../services/fetchPokemonAttack';

export const PokemonAttack = ({ pokemon }) => {

  const [attacks, setAttacks] = useState([]);
  const [attack, setAttack] = useState('')
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (pokemon) {
      const fetchAttack = async () => {
        setLoading(true);
        const fetchedAttacks = await Promise.all(
          pokemon.moves.slice(pokemon.moves.length - 4).map(async (attack) => {
            const url = attack.move.url;
            const data = await fetchPokemonAttack(url);
            return data
          })
        )

        console.log(fetchedAttacks)
        setAttacks(fetchedAttacks)
        setLoading(false);
      }

      fetchAttack()

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

        {loading ? (
          <div>Cargando ataques...</div>
        ) : !attack ? (
          attacks.map((attackData, index) => {
            const spanishName = attackData.names.find(
              (name) => name.language.name === 'es'
            )

            return <div key={index}>
              <button onClick={selectMove}>
                {spanishName ? spanishName.name : attackData.name} <span className='potencia'>{attackData.power ? attackData.power + 'p' : ''}</span>
              </button>
            </div>
          })
        ) : (
          <div className='attackSelectedContainer'>
            <span className='attackSelected'>{attack}</span>
          </div>
        )}
      </div>
    </div>
  )
}
