import { fetchAllPokemon, fetchPokemonByIdOrName } from "../services/pokeService";
import { saveJSON, loadJSON } from "../utils/file";
import { Pokemon } from "../models/pokemon";
import path from "path";

const OUTPUT_PATH = path.resolve(__dirname, "../../pc_box.json");
const LIMIT = 150;

export async function runPokemonController(): Promise<void> {
  console.log(`Buscando ${LIMIT} pokémons na PokéAPI...\n`);

  const pokemons = await fetchAllPokemon(
    LIMIT,
    (current, total, name) => {
      process.stdout.write(`\rProgresso: ${current}/${total} — ${name.padEnd(20)}`);
    }
  );

  console.log(`\n\n Total obtido: ${pokemons.length} pokémons`);
  saveJSON(OUTPUT_PATH, pokemons);
}

function loadBox(): Pokemon[] {
  return loadJSON<Pokemon[]>(OUTPUT_PATH) ?? [];
}

export function isPokemonInBox(id: number): boolean {
  const box = loadBox();
  return box.some((p) => p.id === id);
}

export async function addPokemonToBox(idOrName: string | number): Promise<Pokemon> {
  const pokemon = await fetchPokemonByIdOrName(idOrName);
  const box = loadBox();

  if (box.some((p) => p.id === pokemon.id)) {
    throw new Error(
      `Erro: o pokémon "${pokemon.nome}" (ID ${pokemon.id}) já está na pc_box.`
    );
  }

  box.push(pokemon);
  saveJSON(OUTPUT_PATH, box);
  console.log(`"${pokemon.nome}" (ID ${pokemon.id}) adicionado à pc_box.`);

  return pokemon;
}

export function removePokemonFromBox(id: number): Pokemon {
  const box = loadBox();
  const index = box.findIndex((p) => p.id === id);

  if (index === -1) {
    throw new Error(`Erro: nenhum pokémon com ID ${id} encontrado na pc_box.`);
  }

  const removed = box[index];
  box.splice(index, 1);
  saveJSON(OUTPUT_PATH, box);
  console.log(`"${removed.nome}" (ID ${removed.id}) removido da pc_box.`);

  return removed;
}
