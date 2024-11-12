import React, { useEffect, useState } from 'react'
import { fetchPokemonAttack } from '../services/fetchPokemonAttack';

export const PokemonAttack = ({ pokemon }) => {

  const [attacks, setAttacks] = useState([]);
  const [selectedAttack, setSelectedAttack] = useState(null)
  const [loading, setLoading] = useState(true);
  const [isAttackSelected, setIsAttackSelected] = useState(false);
  const [spanishName, setSpanishName] = useState('')

  const pokeTypes = {
    normal: 'Normal',
    fighting: 'Lucha',
    flying: 'Volador',
    poison: 'Venenoso',
    ground: 'Tierra',
    rock: 'Roca',
    bug: 'Insecto',
    ghost: 'Fantasma',
    steel: 'Acero',
    fire: 'Fuego',
    water: 'Agua',
    grass: 'Planta',
    electric: 'Eléctrico',
    psychic: 'Psíquico',
    ice: 'Hielo',
    dragon: 'Dragón',
    dark: 'Siniestro',
    fairy: 'Hada',
    stellar: 'Astral',
    unknown: 'Unknown'
  }

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

        setAttacks(fetchedAttacks)
        setLoading(false);
      }

      fetchAttack()
    }

  }, [pokemon])

  if (!pokemon) {
    return <div></div>
  }

  function handleSelectMove(e, attackData) {
    const name = e.target.innerText;
    setSpanishName(name.slice(0, -3))
    setSelectedAttack(attackData)
    setIsAttackSelected(true)
  }

  function getType(){
    const typeKeys = Object.keys(pokeTypes);
    const keyFind = typeKeys.find(type => type === pokemon.types[0].type.name);
    const typeValue = pokeTypes[keyFind]
    return typeValue
  }

  return (
    <div className='container'>
      <div className='pokemonAttacks'>
        {!isAttackSelected ? <span className='selectionAttack'>Selecciona un ataque para <span className='pokemonName'>{pokemon.name.toUpperCase()}</span></span> : ''}
        {loading ? (
          <div>Cargando ataques...</div>
        ) : !selectedAttack ? (
          attacks.map((attackData, index) => { //Recorrer los 4 ataques y encontrar el lenguaje español.
            const spanishName = attackData.names.find(
              (name) => name.language.name === 'es',
            )

            return <div key={index}>
              <button onClick={(e) => handleSelectMove(e, attackData)}>
                {spanishName ? spanishName.name : attackData.name} <span className='potencia'>{attackData.power ? attackData.power + 'p' : ''}</span>
              </button>
            </div>
          })
        ) : (
          <div className='infoContainer'>
            <div className='pokeNameContainer'><span className='pokeName'>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</span></div>
            <span className='id'>#{pokemon.id.toString().padStart(3, '0')}</span>
            <div className='imgContainer'>
              <img src={pokemon.sprites.front_default} alt={pokemon.name} />
            </div>
            <span className='pokeType'>Tipo: {getType()}</span>
            <div className='infoAttack'>
              <div className='infoDato'>Ataque: <span className='info'>{spanishName ? spanishName : selectedAttack.name}</span></div>
              <div className='infoDato'>Daño: <span className='info'>{selectedAttack.power ? selectedAttack.power : '-'}</span></div>
              <div className='infoDato'>Precisión: <span className='info'>{selectedAttack.accuracy}</span></div>
              <div className='infoDato'>PP: <span className='info'>{selectedAttack.pp}</span></div>
            </div>
          </div>
        )}
      </div>
    </div>
  ) 
}
