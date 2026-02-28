import { Farmen } from "../index.js";

const game = new Farmen(2024);

game.contestant("Maxine").eliminate().bet("AR").bet("OR");
game.contestant("Ciro").eliminate().bet("JR");
game.contestant("Tim").eliminate(3).bet("RS");
game.contestant("Desirée S").eliminate().bet("MR");
game
  .contestant("Magnus")
  .eliminate()
  .bet("JR", false)
  .bet("MR", false)
  .bet("OR", false);
game.contestant("Cornelia G").eliminate().bet("AR", false);
game.contestant("Jennifer").eliminate().bet("RS", false);
game.contestant("Andreas").eliminate();
game.contestant("Per R").eliminate();
game.contestant("Fredrik").eliminate(3);
game.contestant("Anna").eliminate();
game.contestant("Martina").quit();
game.contestant("Ronja").eliminate();
game.contestant("Cornelia N").eliminate(2);
game.contestant("Levin").win();
game.contestant("Yorgo").quit();
game.contestant("Alessia").eliminate();
game.contestant("Desirée N").quit();
game.contestant("Per E").quit();

game.lock();

export { game };
