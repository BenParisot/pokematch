import React, {useState, useEffect} from 'react'
import { getPokemon } from './services/getPokemon'

const CardList = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const fetchCharacters = () => (
    getPokemon().then(res => setPokemonList(res.results))
  )
  useEffect(() => {
    return fetchCharacters()
  }, [])
  const pokeList = pokemonList.map(pokemon => {
    return <li key={pokemon.name}>
      <h3>{pokemon.name}</h3>
      {/* <p>Pokemon img</p> */}
    </li>
  })
  return (
    <>
    <h1>Card List</h1>
    {/* {pokemonList} */}
    </>
  )
}

export default CardList
