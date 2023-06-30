import React from 'react';

export default function PokemonList({ pokedex }) {
  const listPokemon = pokedex.map((item) => (
    <li key={item.number}>{item.name}</li>
  ));
  return <ul>{listPokemon}</ul>;
}
