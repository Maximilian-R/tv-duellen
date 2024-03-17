import { Game } from "../../../library/game.js";

const game = new Game(
  { name: "Farmen", year: 2024 },
  ["farmen"],
  ["🥕", "🌽", "🥔"]
);
game.contestant("Maxine").eliminate().bet("AR").bet("OR");
game.contestant("Ciro").eliminate().bet("JR");
game.contestant("Tim").eliminate().bet("RS");
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
game.contestant("Fredrik").eliminate();
game.contestant("Anna").eliminate();
game.contestant("Martina").quit();
game.contestant("Ronja").eliminate();
game.contestant("Cornelia N").eliminate();
game.contestant("Levin").win();
game.contestant("Yorgo").quit();
game.contestant("Alessia").eliminate();
game.contestant("Desirée N").quit();
game.contestant("Per E").quit();

export { game };
