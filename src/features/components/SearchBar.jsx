import React, { useState } from 'react'

export const SearchBar = ({ onSearch, pokemon, setPokemon, pokemon2, setPokemon2 }) => { 

  const [searchTerm, setSearchTerm] = useState('')

    const handleSubmit = async () => {

      if(!searchTerm){
        alert('Introduce un pokemon')

      }else if(!pokemon){
        const data = await onSearch(searchTerm.toLowerCase())
        setPokemon(data);
        setSearchTerm('')

      }else{
        const data2 = await onSearch(searchTerm.toLowerCase())
        setPokemon2(data2)
      }
    }
  
  return (
    <div className='search-container'>
      <input
        type='text'
        placeholder='Busca un pokémon'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <button onClick={handleSubmit}>Buscar</button>
    </div>
  )
}
