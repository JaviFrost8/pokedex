import React, { useState } from 'react'

export const SearchBar = ({onSearch}) => {

    const [searchTerm, setSearchTerm] = useState('')

    const handleSubmit = () => {

      if(searchTerm == ''){
        searchTerm == 'pikachu'
      }

      onSearch(searchTerm.toLowerCase())

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
