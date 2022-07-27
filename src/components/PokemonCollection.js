import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({pokemon, search}) {

  const handlerender = () => {
    if (!search){
      return pokemon;
    }else {
      let filteredPokemon = pokemon.filter((mon) => 
        mon.name.toLowerCase().includes(search.toLowerCase())
      )
      return filteredPokemon
    }
    
  }
  return (
    <Card.Group itemsPerRow={6}>
      <h1>Hello From Pokemon Collection</h1>
      {handlerender().map(mon => {
        return (<PokemonCard mon={mon} key={mon.id}/>)
      })}
    </Card.Group>
  );
}

export default PokemonCollection;
