import { fetchJSON } from "../utils/http";
import { Pokemon } from "../models/pokemon";
import { PokeAPIListResponse, PokeAPIResponse } from "../models/pokeApiTypes";

const BASE_URL = "https://pokeapi.co/api/v2";

export async function fetchPokemonList(limit: number): Promise<string[]> {
  const url = `${BASE_URL}/pokemon?limit=${limit}&offset=0`;
  const data = await fetchJSON<PokeAPIListResponse>(url);
  return data.results.map((p) => p.name);
}

export async function fetchPokemon(name: string): Promise<Pokemon> {
  const url = `${BASE_URL}/pokemon/${name}`;
  const data = await fetchJSON<PokeAPIResponse>(url);

  return {
    id: data.id,
    nome: data.name,
    tipos: data.types.map((t) => t.type.name),
    altura: data.height,
    peso: data.weight,
  };
}

export async function fetchAllPokemon(
  limit: number,
  onProgress?: (current: number, total: number, name: string) => void
): Promise<Pokemon[]> {
  const names = await fetchPokemonList(limit);
  const pokemons: Pokemon[] = [];

  let i = 0;
  for (const name of names) {
    onProgress?.(++i, names.length, name);
    const pokemon = await fetchPokemon(name);
    pokemon.push(pokemon);
  }

  return pokemons;
}
