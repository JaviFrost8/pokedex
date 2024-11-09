import React, { useEffect, useState } from 'react'
import { fetchPokemon } from '../../services/fetchPokemon'
import { PokemonLogo } from '../PokemonLogo'
import { SearchBar } from '../SearchBar'
import { PokemonInfo } from '../PokemonInfo'
import { LateralBar } from '../LateralBar'

export const ContainerComponent = () => {

    const [pokemon, setPokemon] = useState(null)

    return (
        <div className='bigContainer'>
            <aside>
                <LateralBar />
            </aside>

            <div className='container'>
                <header>
                    <PokemonLogo />
                </header>

                <div className='main'>
                    <SearchBar onSearch={fetchPokemon} setPokemon={setPokemon}/>
                    <PokemonInfo pokemon={pokemon} />
                </div>
            </div>
        </div>
    )
}
