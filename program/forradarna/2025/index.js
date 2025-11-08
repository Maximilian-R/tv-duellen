import { Game } from "../../../library/game.js";

const game = new Game(
  { name: "Förrädarna", year: 2025 },
  ["förrädarna", "theme-white"],
  ["🎭", "🗡️", "🩸"]
);
game.contestant("Ahmed");
game.contestant("Alexander");
game.contestant("Alexandra");
game.contestant("Britta");
game.contestant("Cleo");
game.contestant("Gry");
game.contestant("Isabella");
game.contestant("Jan");
game.contestant("Janina");
game.contestant("Joel").eliminate(); // 20
game.contestant("Johannes");
game.contestant("Malick");
game.contestant("Malou");
game.contestant("Marcus");
game.contestant("Matilda");
game.contestant("Mona");
game.contestant("Rebecka");
game.contestant("Samuel");
game.contestant("Tom");
game.contestant("Wilmer");

export { game };
