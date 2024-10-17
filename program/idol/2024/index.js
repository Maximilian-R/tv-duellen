import { Game } from "../../../library/game.js";

const game = new Game(
  { name: "Idol", year: 2024 },
  ["idol", "rounded", "theme-white"],
  ["✨", "🎙️", "🎶"]
);
game.contestant("Benjamin");
game.contestant("Ella").bet("MR");
game.contestant("Joel");
game.contestant("Leo").bet("AR");
game.contestant("Leon").eliminate();
game.contestant("Lucas").bet("JR");
game.contestant("Lukas").bet("FL");
game.contestant("Margaux");
game.contestant("Minou");
game.contestant("Olivia");
game.contestant("Paulina").bet("RS");
game.contestant("Robin H");
game.contestant("Robin S").bet("OR").bet("ER");
game.contestant("Victoria");

export { game };
