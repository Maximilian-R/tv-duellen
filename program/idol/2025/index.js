import { Game } from "../../../library/game.js";

const game = new Game(
  { name: "Idol", year: 2025 },
  ["idol", "rounded", "theme-white"],
  ["✨", "🎙️", "🎶"]
);
game.contestant("Allan");
game.contestant("Alma");
game.contestant("Arvid");
game.contestant("Ingrid");
game.contestant("Jénovic");
game.contestant("Jonas");
game.contestant("Karl");
game.contestant("Love B");
game.contestant("Love H");
game.contestant("Malva");
game.contestant("Nicolina");
game.contestant("Nora");
game.contestant("Rasmus");
game.contestant("Rebecca");
game.contestant("Sofia");
game.contestant("Tuva");

export { game };
