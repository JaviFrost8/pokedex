export async function fetchPokemon(nombre){
  
  try{
    const url = `https://pokeapi.co/api/v2/pokemon/${nombre}`
    const res = await fetch(url)
    const data = await res.json()

    return data

  }catch(err){
    return alert('No se ha encontrado ningún pokémon')
  }
}
