export interface PokemonType {
  type: {
    name: string;
  };
}

export interface PokemonData {
  id: number;
  name: string;
  height: number;
  weight: number;
  types: PokemonType[];
}

export class Pokemon {
  id: number;
  name: string;
  type: string[];
  height: number;
  weight: number;

  constructor(data: PokemonData) {
    this.id = data.id;
    this.name = data.name;
    this.type = data.types.map((t) => t.type.name);
    this.height = data.height;
    this.weight = data.weight;
  }
}
