import axios from 'axios';
export interface PokemonListInterface {
  name: string;
  url: string;
}


interface ListPokemonInterface {
  count: number;
  next: null | string;
  results: PokemonListInterface[];
}

export async function listPokemon (): Promise<ListPokemonInterface> {
  const endpoint = 'https://pokeapi.co/api/v2/pokemon';

  const response = await axios.get<ListPokemonInterface>(endpoint)

  return response.data;
}

