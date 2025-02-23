import { Game } from "../../../library/game.js";

const game = new Game(
  { name: "Farmen", year: 2025 },
  ["farmen"],
  ["🥕", "🌽", "🥔"]
);
game.contestant("Jonna").quit();
game.contestant("Sofia");
game.contestant("Alida");
game.contestant("Jesper");
game.contestant("Peter").quit();
game.contestant("Hanna").eliminate();
game.contestant("Andreas");
game.contestant("Marica");
game.contestant("Amanda").eliminate();
game.contestant("Adam");
game.contestant("Robert");
game.contestant("Jessica").eliminate();
game.contestant("Mikael");
game.contestant("Niklas");
game.contestant("Graham").quit();
game.contestant("Nathalie").quit();

export { game };
