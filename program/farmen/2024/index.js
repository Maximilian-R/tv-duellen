import { Game } from "../../../library/game.js";

const game = new Game(
  { name: "Farmen", year: 2024 },
  ["farmen"],
  ["🥕", "🌽", "🥔"]
);
game.contestant("Maxine").bet("AR").bet("OR");
game.contestant("Ciro").eliminate().bet("JR");
game.contestant("Tim").bet("RS");
game.contestant("Desirée S").bet("MR");
game.contestant("Magnus").bet("JR", false).bet("MR", false).bet("OR", false);
game.contestant("Cornelia G").bet("AR", false);
game.contestant("Jennifer").eliminate().bet("RS", false);
game.contestant("Andreas").eliminate();
game.contestant("Per R");
game.contestant("Fredrik");
game.contestant("Anna").eliminate();
game.contestant("Martina").quit();
game.contestant("Ronja");
game.contestant("Cornelia N");
game.contestant("Levin");
game.contestant("Yorgo").quit();
game.contestant("Alessia").eliminate();
game.contestant("Desirée N").quit();
game.contestant("Per E").quit();

export { game };
