import React, { useState } from 'react'

export const SearchBar = ({onSearch}) => {

    const [searchTerm, setSearchTerm] = useState('')

    const handleSearch = () => {
        onSearch(searchTerm.toLowerCase())
    }

  return (
    <div>
        <input
            type='text'
            placeholder='Introduce el nombre del pokémon'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
        />

        <button onClick={handleSearch}>Buscar</button>
    </div>
  )
}
