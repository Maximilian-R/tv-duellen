import { Game } from "../../../library/game.js";

const game = new Game(
  { name: "Idol", year: 2025 },
  ["idol", "rounded", "theme-white"],
  ["🎙️", "✨", "🎶"]
);
game.contestant("Allan").eliminate(11);
game.contestant("Alma").eliminate(11);
game.contestant("Arvid");
game.contestant("Ingrid").bet("ER").bet("FL");
game.contestant("Jénovic").bet("JR").eliminate(9);
game.contestant("Jonas");
game.contestant("Karl").bet("OR").eliminate(9);
game.contestant("Love B");
game.contestant("Love S").bet("MR");
game.contestant("Malva").eliminate(10);
game.contestant("Nicolina");
game.contestant("Nora").eliminate(11);
game.contestant("Rasmus").eliminate(11);
game.contestant("Rebecca").eliminate(10);
game.contestant("Sofia").bet("RS");
game.contestant("Tuva").bet("AR");

export { game };
