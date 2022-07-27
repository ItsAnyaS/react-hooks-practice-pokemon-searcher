import React, {useState} from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({handleChange, setPokemon, pokemon, newPokemon}) {

  const [sprite, setSprite] = useState({})
  const handleInput = (e) => {
    handleChange(e.target.name, e.target.value)

  }

  const handleSpriteFrontInput = (value) => {
    setSprite({ ...sprite, 'front': value });
    handleChange("sprites", sprite);
  };

  const handleSpriteBackInput = (value) => {
    setSprite({ ...sprite, 'back': value });
    handleChange("sprites", sprite);
  };

  const handleSubmit = (e) => {
      e.preventDefault()
      console.log('submiited')
      setPokemon([...pokemon, newPokemon])
      fetch("http://localhost:3001/pokemon", {
        method: "POST",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify(newPokemon)
      });
  }
  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form onSubmit={handleSubmit}>
        <Form.Group widths="equal">
          <Form.Input
            fluid
            label="Name"
            placeholder="Name"
            name="name"
            onChange={handleInput}
          />
          <Form.Input
            fluid
            label="hp"
            placeholder="hp"
            name="hp"
            onChange={handleInput}
          />
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
            onChange={(e) => {
              handleSpriteFrontInput(e.target.value);
            }}
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
            onChange={(e) => {
             handleSpriteBackInput(e.target.value)
            }}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
