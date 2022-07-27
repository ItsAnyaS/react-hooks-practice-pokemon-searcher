import React from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";
import {useState, useEffect} from 'react'

function PokemonPage() {
  const [pokemon, setPokemon] = useState([])
  const [search, setSearch] = useState('')
  const [newPokemon, setNewPokemon] = useState({})
  const getPokemon = async () => {
    let req = await fetch("http://localhost:3001/pokemon");
    let res = await req.json()
    setPokemon(res)
  }
  useEffect(()=> {
    getPokemon()
  }, [])

const handleChange = (name, value) => {
    setNewPokemon({
      ...newPokemon,
      [name]: value
})
}
console.log(newPokemon)
  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm handleChange={handleChange} pokemon={pokemon} setPokemon={setPokemon} newPokemon={newPokemon}/>
      <br />
      <Search setSearch={setSearch} />
      <br />
      <PokemonCollection pokemon={pokemon} search={search}/>
    </Container>
  );
}

export default PokemonPage;
