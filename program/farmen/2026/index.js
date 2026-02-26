import { Game } from "../../../library/game.js";

const game = new Game(
  { name: "Farmen", year: 2026 },
  ["farmen"],
  ["🥕", "🌽", "🥔"],
  false,
);
game.contestant("Ahmed").secondary("MR");
game.contestant("Alexander").primary("AR");
game.contestant("Amanda");
game.contestant("Angelica");
game.contestant("Ayda");
game.contestant("Bosse");
game.contestant("Erik").primary("JR");
game.contestant("Jenny").secondary("RS");
game.contestant("Jonas");
game.contestant("Kevin");
game.contestant("Niklas");
game.contestant("Nils").quit();
game.contestant("Pim").quit();
game
  .contestant("Stephanie")
  .primary("RS")
  .secondary("AR")
  .secondary("JR")
  .primary("MR");
game.contestant("Tindra");
game.contestant("Vanessa");
game.contestant("Hampus").quit();
game.contestant("Jörgen");
game.contestant("Nowaleya");

game.eliminate("Tindra");
game.eliminate("Ayda");
game.eliminate("Jonas");
// game.quit(["Nils", "Pim"]);
game.eliminate("Kevin");
// game.quit("Hampus");
game.eliminate("Nowaleya");

export { game };
