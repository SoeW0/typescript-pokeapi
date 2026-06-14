import {
  runPokemonController,
  addPokemonToBox,
  removePokemonFromBox,
} from "./controllers/pokemonController";

async function main() {
  const [command, arg] = process.argv.slice(2);

  switch (command) {
    case "add": {
      if (!arg) {
        throw new Error("Uso: npm start -- add <id|nome>");
      }
      await addPokemonToBox(arg);
      break;
    }

    case "remove": {
      if (!arg) {
        throw new Error("Uso: npm start -- remove <id>");
      }
      const id = Number(arg);
      if (Number.isNaN(id)) {
        throw new Error("O ID deve ser um número.");
      }
      removePokemonFromBox(id);
      break;
    }

    case "fetch":
    case undefined: {
      await runPokemonController();
      break;
    }

    default: {
      throw new Error(
        `Comando desconhecido: "${command}". Use "fetch", "add <id|nome>" ou "remove <id>".`
      );
    }
  }
}

main().catch((err) => {
  console.error("❌ Erro:", err.message);
  process.exit(1);
});
