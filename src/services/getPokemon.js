export const getPokemon = () => {
  return fetch('https://pokeapi.co/api/v2/pokemon')
    .then(res => ([res.ok, res.json()]))
    .then(([ok, json]) => {
      if(!ok) return 'Unable to fetch Pokemon :('
      return json
    })
}
