import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { listPokemon, PokemonListInterface } from '../pokemon/services/listPokemons';

interface PokedexProps {}

export const Pokedex: React.FC<PokedexProps> = () => {
  const [pokemons, setPokemons] = useState<PokemonListInterface[]>([]);
  const [selectedPokemon, setSelectedPokemon] = useState<
    PokemonListInterface | undefined
  >(undefined);

  const [selectedPokemonDetails, setSelectedPokemonDetails] = useState<
    any | undefined
  >(undefined);

  useEffect(() => {
    listPokemon().then(response => setPokemons(response.results));
  }, []);

  useEffect(() => {
    if (!selectedPokemon) return;

    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${selectedPokemon.name}`)
      .then(response => setSelectedPokemonDetails(response.data));
  }, [selectedPokemon]);

  return (
    <>
      <h1>Pokedex</h1>
      Pokemons:
      {pokemons.map(pokemon => (
        <button onClick={() => setSelectedPokemon(pokemon)}>
          {pokemon.name}
        </button>
      ))}
      <h2>
        Pokemon Selecionado:
        {selectedPokemon?.name || 'Nenhum pokemon selecionado'}
      </h2>
      {JSON.stringify(selectedPokemonDetails, undefined, 2)}
    </>
  );
};
