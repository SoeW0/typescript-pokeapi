import { runPokemonController } from "./controllers/pokemonController";

runPokemonController().catch((err) => {
  console.error("❌ Erro:", err.message);
  process.exit(1);
});
