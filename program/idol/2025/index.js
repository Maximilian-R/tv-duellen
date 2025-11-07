import { Game } from "../../../library/game.js";

const game = new Game(
  { name: "Idol", year: 2025 },
  ["idol", "rounded", "theme-white"],
  ["🎙️", "✨", "🎶"]
);
game.contestant("Allan").eliminate(12);
game.contestant("Alma").eliminate(12);
game.contestant("Arvid");
game.contestant("Ingrid").bet("ER").bet("FL");
game.contestant("Jénovic").bet("JR");
game.contestant("Jonas");
game.contestant("Karl").bet("OR");
game.contestant("Love B");
game.contestant("Love S").bet("MR");
game.contestant("Malva").eliminate(11);
game.contestant("Nicolina");
game.contestant("Nora").eliminate(12);
game.contestant("Rasmus").eliminate(12);
game.contestant("Rebecca").eliminate(11);
game.contestant("Sofia").bet("RS");
game.contestant("Tuva").bet("AR");

export { game };
