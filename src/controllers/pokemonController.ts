import { fetchAllPokemon } from "../services/pokeService";
import { saveJSON } from "../utils/file";
import path from "path";

const OUTPUT_PATH = path.resolve(__dirname, "../../data/pokemons.json");
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
