import { useState } from 'react'
import './App.css'
import img from './assets/img/pokemon.png'
import { SearchBar } from './components/SearchBar'
import { PokemonInfo } from './components/PokemonInfo'
function App() {

  const [pokemon, setPokemon] = useState(null)

  const fetchPokemon = async (nombre) => {
    try{
      const url = `https://pokeapi.co/api/v2/pokemon/${nombre}`
      const res = await fetch(url)
      const data = await res.json()

      setPokemon(data)

    }catch(err){
      alert('No se ha encontrado ningún pokemon')
      setPokemon(null)
    }
  }
  
  return (
    <div>
      <header>
        <img src={img} alt='pokemon' />
      </header>
    

      <div className='info'>
        <SearchBar onSearch={fetchPokemon} />
        <PokemonInfo pokemon={pokemon} />
      </div>
    </div>
  )
}

export default App
