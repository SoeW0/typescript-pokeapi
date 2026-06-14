## Pokédex TypeScript Lite
## Sobre o projeto
O Pokédex TypeScript Lite é uma aplicação simples em Node.js com TypeScript
que consulta dados de Pokémon na PokeAPI e organiza alguns resultados em um
catálogo local durante a execução do programa.
## Objetivo
Praticar os principais conceitos do Módulo 01:
- Node.js;
- JavaScript no back-end;
- TypeScript;
- interfaces;
- funções tipadas;
- arrays;
- objetos;
- JSON;
- métodos de array;
- classes;
- async/await;
- fetch;
- tratamento de erros;
- GitHub;
- GitFlow;
- Kanban.
## Tecnologias utilizadas
- Node.js
- TypeScript
- TSX
- PokeAPI
- Git
- GitHub
## Pré-requisitos
Antes de executar o projeto, é necessário ter instalado:
- Node.js
- npm
- Git
## Como instalar
Clone o repositório:
```bash
git clone https://github.com/SoeW0/typescript-pokeapi.git
```
Acesse a pasta do projeto:
```bash
cd typescript-pokeapi
```
Instale as dependências:
```bash
npm install
```
Compile o Programa:
```bash
npx tsc
```
Como executar
Execute o projeto em ambiente de desenvolvimento:
```bash
//Adiciona Pokemon por ID ou Nome
npm start -- add <nome/id>

//Fetch geral na API
npm run fetch

//Remove Pokemon por ID
npm start -- remove <id>
```
Estrutura do projeto
typescript-pokeapi/
├── src/
│   ├── controllers/
│   │   └── pokemonController.ts
│   ├── models/
│   │   ├── pokemon.ts
│   │   └── pokeApiTypes.ts
│   ├── services/
│   │   └── pokeService.ts
│   ├── utils/
│   │   ├── file.ts
│   │   └── http.ts
│   └── main.ts
├── data/
│   └── pc_box.json
├── package.json
└── tsconfig.json
Funcionalidades
- Buscar Pokémon por nome ou ID
- Tratar erro de Pokémon inexistente
- Transformar resposta da API em objeto simplificado
- Adicionar Pokémon ao catálogo local
- Exibir mensagens no terminal
SAIDA:
```JSON
[
  {
    "id": 1,
    "nome": "bulbasaur",
    "tipos": [
      "grass",
      "poison"
    ],
    "altura": 7,
    "peso": 69
  },
  {
    "id": 2,
    "nome": "ivysaur",
    "tipos": [
      "grass",
      "poison"
    ],
    "altura": 10,
    "peso": 130
  },
  {
    "id": 3,
    "nome": "venusaur",
    "tipos": [
      "grass",
      "poison"
    ],
    "altura": 20,
    "peso": 1000
  },
  {
    "id": 4,
    "nome": "charmander",
    "tipos": [
      "fire"
    ],
    "altura": 6,
    "peso": 85
  },
  {
    "id": 5,
    "nome": "charmeleon",
    "tipos": [
      "fire"
    ],
    "altura": 11,
    "peso": 190
  },
```
