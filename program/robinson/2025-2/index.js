import { Robinson } from "../index.js";

const game = new Robinson(2025, 2, "Höst");

game.contestant("Agust").eliminate();
game.contestant("Akink").secondary("RS").secondary("MR").eliminate();
game.contestant("Ania").eliminate();
game.contestant("Ann-Helene").eliminate();
game.contestant("Anna").eliminate();
game.contestant("Carin").eliminate();
game.contestant("Charlie").eliminate();
game.contestant("Diana").quit();
game.contestant("Ebba").eliminate();
game.contestant("Emilly").eliminate();
game.contestant("Emma").eliminate();
game.contestant("Jacob").quit();
game.contestant("Jasmine").eliminate();
game.contestant("Johan").win();
game.contestant("Kevin").eliminate();
game
  .contestant("Matteo")
  .primary("RS")
  .primary("AR")
  .primary("JR")
  .primary("OR")
  .eliminate(2);
game.contestant("René").eliminate();
game.contestant("Salah").quit();
game.contestant("Samuel").secondary("AR").primary("MR").eliminate(2);
game.contestant("Susanne").eliminate();
game.contestant("Ulf").eliminate();
game.contestant("Lea").eliminate();
game.contestant("Per").secondary("JR").secondary("OR").eliminate();

game.lock();

export { game };
