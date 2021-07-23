import React from "react";
import data from "../data";
import Pokemon from "./Pokemon.js";

class Pokedex extends React.Component {
  render() {
    return (
      <div>
        {data.map((poks) => <Pokemon PokeInfo={ poks }/>)}

    </div>
    );
  }
}

export default Pokedex;
