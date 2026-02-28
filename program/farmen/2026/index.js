import { Farmen } from "../index.js";

const game = new Farmen(2026);

game.contestant("Ahmed");
game.contestant("Alexander").primary("AR");
game.contestant("Amanda");
game.contestant("Angelica");
game.contestant("Ayda");
game.contestant("Bosse");
game.contestant("Erik").primary("JR").secondary("MR");
game.contestant("Jenny").secondary("RS").secondary("OR");
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
game.contestant("Jörgen").primary("OR");
game.contestant("Nowaleya");

game.eliminate("Tindra");
game.eliminate("Ayda");
game.eliminate("Jonas");
// game.quit(["Nils", "Pim"]);
game.eliminate("Kevin");
// game.quit("Hampus");
game.eliminate("Nowaleya");
// game.eliminate("Angelica");

game.lock();

export { game };
