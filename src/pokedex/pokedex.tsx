import React, { useState } from 'react';

interface PokedexProps {}

const pokemonsArray: string[] = ['Pikachu', 'Ditto', 'Metapod', 'Magikarp'];

export const Pokedex: React.FC<PokedexProps> = () => {
  const [pokemons, setPokemons] = useState<string[]>(pokemonsArray);
  const [selectedPokemon, setSelectedPokemon] = useState<string | undefined>('undefined');

  return (
    <div>
      <h1>Pokedex</h1>

      Pokemons:
      {pokemons.map(pokemon => (
        <button onClick={() => setSelectedPokemon(pokemon)}>{pokemon}</button> 
      ))}
      <h2>Pokemon Selecionado:{selectedPokemon ||"Nenhum pokemon selecionado"}</h2>
    </div>
  );
};
