import React, { useEffect, useState } from 'react'
import { fetchPokemon } from '../services/fetchPokemon'
import { PokemonLogo } from './PokemonLogo'
import { SearchBar } from './SearchBar'
import { PokemonInfo } from './PokemonInfo'

export const ContainerComponent = () => {

    const [pokemon, setPokemon] = useState(null)
    
    return (
        <div>
            <header>
                <PokemonLogo />
            </header>


            <div className='main'>
                <SearchBar onSearch={fetchPokemon} setPokemon={setPokemon} />
                <PokemonInfo pokemon={pokemon} />
            </div>
        </div>
    )
}
