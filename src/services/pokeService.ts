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

export async function fetchPokemonByIdOrName(idOrName: string | number): Promise<Pokemon> {
  const identifier = String(idOrName).trim().toLowerCase();

  if (!identifier) {
    throw new Error("É necessário informar um ID ou nome de pokémon.");
  }

  const url = `${BASE_URL}/pokemon/${identifier}`;

  try {
    const data = await fetchJSON<PokeAPIResponse>(url);

    return {
      id: data.id,
      nome: data.name,
      tipos: data.types.map((t) => t.type.name),
      altura: data.height,
      peso: data.weight,
    };
  } catch (err) {
    throw new Error(`Pokémon "${idOrName}" não encontrado na PokéAPI.`);
  }
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
    pokemons.push(pokemon);
  }

  return pokemons;
}
