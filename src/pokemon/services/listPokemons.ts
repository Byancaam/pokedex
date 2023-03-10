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
  const endpoint = `${process.env.REACT_APP_POKEAPI}/pokemon`;

  const response = await axios.get<ListPokemonInterface>(endpoint)

  return response.data;
}

