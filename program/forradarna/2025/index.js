import { Game } from "../../../library/game.js";

const game = new Game(
  { name: "Förrädarna", year: 2025 },
  ["förrädarna", "theme-white"],
  ["🎭", "🗡️", "🩸"],
  false
);

const traitor = "🎭";

game.contestant("Ahmed", traitor);
game.contestant("Alexander", traitor);
game.contestant("Alexandra");
game.contestant("Britta");
game.contestant("Cleo");
game.contestant("Gry");
game.contestant("Isabella");
game.contestant("Jan");
game.contestant("Janina");
game.contestant("Joel");
game.contestant("Johannes");
game.contestant("Malick");
game.contestant("Malou");
game.contestant("Marcus");
game.contestant("Matilda", traitor);
game.contestant("Mona");
game.contestant("Rebecka");
game.contestant("Samuel");
game.contestant("Tom");
game.contestant("Wilmer");

game.eliminate("Joel").reason("MURDER");
game.eliminate("Samuel");

export { game };
