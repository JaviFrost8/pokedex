import React from 'react'

export const PokemonInfo = ({pokemon}) => {

    if(!pokemon){
        return <div></div>
    }

  return (
    <div>
        <h2>{pokemon.name}</h2>
        <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        <p>Altura: {pokemon.height}</p>
        <p>Peso: {pokemon.weight}</p>
    </div>
  )
}
