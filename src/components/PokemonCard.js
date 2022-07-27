import React, {useState} from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({mon}) {
const [isFront, setIsFront]= useState(true)
  return (
    <Card>
      <div onClick={()=> {setIsFront(prev => !prev)}}>
        <div className="image">
          <img
            src={isFront ? mon.sprites.front : mon.sprites.back}
            alt={mon.name}
          />
        </div>
        <div className="content">
          <div className="header">{mon.name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {mon.hp}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
