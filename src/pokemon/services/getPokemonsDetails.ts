import axios from 'axios';
export interface PokemonListInterface {
  name: string;
  url: string;
}

interface GetPokemonDetailsInterface {
  count: number;
  next: null | string;
  results: PokemonListInterface[];
}

export async function getPokemonDetails (name: string): Promise<GetPokemonDetailsInterface> {
  const endpoint = `https://pokeapi.co/api/v2/pokemon/${name}`;

  const response = await axios.get<GetPokemonDetailsInterface>(endpoint)

  return response.data;
}
