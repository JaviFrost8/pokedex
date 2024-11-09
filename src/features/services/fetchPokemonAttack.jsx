export async function fetchPokemonAttack(urlInfoAttack){
  
    try{
      const res = await fetch(urlInfoAttack)
      const data = await res.json()
  
      return data
  
    }catch(err){
      return alert('No se ha encontrado ningún ataque')
    }
  }