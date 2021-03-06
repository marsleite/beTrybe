import React from 'react';
import pokemons from './data';
import Pokemon from './Pokemon';


class Pokedex extends React.Component {
  render() {
    return (
      pokemons.map((poke, index) => <Pokemon info={ poke } key={ index } />)
    );
  }
};

export default Pokedex;