import { Game } from "../../../library/game.js";

const game = new Game(
  { name: "Farmen", year: 2025 },
  ["farmen"],
  ["🥕", "🌽", "🥔"]
);
game.contestant("Jonna").quit();
game.contestant("Sofia").bet("AR", false).bet("OR").eliminate();
game.contestant("Alida").bet("OR", false).eliminate();
game.contestant("Jesper").bet("MR", false).eliminate();
game.contestant("Peter").quit();
game.contestant("Hanna").eliminate();
game.contestant("Andreas").eliminate();
game.contestant("Marica").bet("JR").bet("RS").eliminate();
game.contestant("Amanda").eliminate();
game.contestant("Adam").bet("MR").eliminate();
game.contestant("Robert").bet("RS", false).quit();
game.contestant("Jessica").eliminate();
game.contestant("Mikael").win();
game.contestant("Niklas").bet("AR").bet("JR", false).eliminate();
game.contestant("Graham").quit();
game.contestant("Nathalie").quit();

export { game };
