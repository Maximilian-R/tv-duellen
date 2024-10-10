import { Game } from "../../../library/game.js";

const game = new Game(
  { name: "Idol", year: 2024 },
  ["idol", "rounded", "theme-white"],
  ["✨", "🎙️", "🎶"],
);
game.contestant("Benjamin");
game.contestant("Ella");
game.contestant("Joel");
game.contestant("Leo");
game.contestant("Leon");
game.contestant("Lucas");
game.contestant("Lukas");
game.contestant("Margaux");
game.contestant("Minou");
game.contestant("Olivia");
game.contestant("Paulina");
game.contestant("Robin H");
game.contestant("Robin S");
game.contestant("Victoria");

export { game };
