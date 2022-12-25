import { Pokemon, ResourceList } from "../types/response";

export const fetchPokemons = async () => {
  const res = await fetch("https://pokeapi.co/api/v2/pokemon");
  return (await res.json()) as Promise<ResourceList>;
};

export const fetchPokemonByName = async (name: string) => {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
  return (await res.json()) as Promise<Pokemon>;
};
