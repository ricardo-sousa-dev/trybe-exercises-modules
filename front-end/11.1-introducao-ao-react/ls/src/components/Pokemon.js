// import Pokedex from './components/Pokedex.js'; 
import React from 'react';

class Pokemon extends React.Component {
  render() {
  const { name, type, averageWeight:{value, measurementUnit}, image } = this.props.PokeInfo; 
    return (
      <section>
        <h1>{name}</h1>
        <p>Tipo: {type}</p>
        <p>Peso: {value} {measurementUnit}</p>
        <img src={image} alt={name}></img>
      </section>
    )
  }
}

export default Pokemon;