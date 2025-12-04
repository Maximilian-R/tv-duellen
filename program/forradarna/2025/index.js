import { Game } from "../../../library/game.js";

const game = new Game(
  { name: "Förrädarna", year: 2025 },
  ["förrädarna", "theme-white"],
  ["🎭", "🗡️", "🩸"],
  false
);

const traitor = "🎭";

game
  .contestant("Ahmed", traitor)
  .primary("OR")
  .primary("JR")
  .primary("AR")
  .primary("FL")
  .primary("RS");
game.contestant("Alexander", traitor);
game.contestant("Alexandra").secondary("RS");
game.contestant("Britta");
game.contestant("Cleo").secondary("MR");
game.contestant("Gry").secondary("AR");
game.contestant("Isabella").primary("ER");
game.contestant("Jan");
game.contestant("Janina").secondary("OR");
game.contestant("Joel");
game.contestant("Johannes", traitor);
game.contestant("Malick").primary("LR");
game.contestant("Malou");
game.contestant("Marcus");
game.contestant("Matilda", traitor).bet("LR");
game.contestant("Mona").secondary("JR");
game.contestant("Rebecka");
game.contestant("Samuel");
game.contestant("Tom").secondary("FL");
game.contestant("Wilmer").primary("MR");

game.eliminate("Joel").reason("MURDER");
game.eliminate("Samuel");
game.eliminate("Jan").reason("MURDER");
game.eliminate("Alexander");
game.eliminate("Britta");
game.eliminate("Isabella").reason("MURDER");
game.eliminate("Johannes");
game.eliminate("Mona").reason("MURDER");
game.eliminate("Rebecka");
game.eliminate("Janina").reason("MURDER");
game.eliminate("Gry");

export { game };
