import { Game } from "../../../library/game.js";

const game = new Game(
  { name: "Farmen", year: 2025 },
  ["farmen"],
  ["🥕", "🌽", "🥔"]
);
game.contestant("Jonna").quit();
game.contestant("Sofia").bet("AR", false).bet("OR");
game.contestant("Alida").bet("OR", false);
game.contestant("Jesper").bet("MR", false);
game.contestant("Peter").quit();
game.contestant("Hanna").eliminate();
game.contestant("Andreas");
game.contestant("Marica").bet("JR").bet("RS");
game.contestant("Amanda").eliminate();
game.contestant("Adam").bet("MR");
game.contestant("Robert").bet("RS", false);
game.contestant("Jessica").eliminate();
game.contestant("Mikael");
game.contestant("Niklas").bet("AR").bet("JR", false);
game.contestant("Graham").quit();
game.contestant("Nathalie").quit();

export { game };
