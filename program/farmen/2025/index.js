import { Game } from "../../../library/game.js";

const game = new Game(
  { name: "Farmen", year: 2025 },
  ["farmen"],
  ["🥕", "🌽", "🥔"]
);
game.contestant("Jonna");
game.contestant("Sofia");
game.contestant("Alida");
game.contestant("Jesper");
game.contestant("Peter");
game.contestant("Hanna");
game.contestant("Andreas");
game.contestant("Marica");
game.contestant("Amanda");
game.contestant("Adam");
game.contestant("Robert");
game.contestant("Jessica");
game.contestant("Mikael");
game.contestant("Niklas");
game.contestant("Graham");
game.contestant("Nathalie");

export { game };
