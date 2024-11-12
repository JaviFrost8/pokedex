import React, { useState } from 'react'
import { LateralBar } from '../LateralBar'
import { SearchBar } from '../SearchBar';
import { fetchPokemon } from '../../services/fetchPokemon';
import { PokemonAttack } from '../PokemonAttack';
import { Principal } from './Principal';

export const Battle = () => {

  const [pokemon, setPokemon] = useState(null)
  const [pokemon2, setPokemon2] = useState(null)


  return (
    <Principal>
      <div className='bigContainer'>
        <div className='container'>

          {
            !pokemon
              ?
              <h2>Selecciona un pokemon y un ataque.</h2>
              : !pokemon2 ?
                <h2>Selecciona el segundo pokemon y el ataque </h2> : <h2>¡FIGHT!</h2>
          }

          <div className='main'>
            <SearchBar
              onSearch={fetchPokemon}
              pokemon={pokemon}
              setPokemon={setPokemon}
              pokemon2={pokemon2}
              setPokemon2={setPokemon2}
            />

            <div className='containerPokemons'>
              <div className='containerPokemon'>
                <PokemonAttack pokemon={pokemon} />
              </div>
              {
                pokemon2 ? <span className='vs'>VS</span> : ''
              }
              <div className='containerPokemon'>
                <PokemonAttack pokemon={pokemon2} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Principal>

  )
}
