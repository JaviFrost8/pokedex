import React, { useState } from 'react'

export const SearchBar = ({onSearch, setPokemon}) => {

    const [searchTerm, setSearchTerm] = useState('')

    const handleSubmit = async () => {

      const data = await onSearch(searchTerm.toLowerCase())
      setPokemon(data)
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
