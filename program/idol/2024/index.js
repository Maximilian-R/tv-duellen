import { Game } from "../../../library/game.js";

const game = new Game(
  { name: "Idol", year: 2024 },
  ["idol", "rounded", "theme-white"],
  ["✨", "🎙️", "🎶"]
);
game.contestant("Benjamin").eliminate();
game.contestant("Ella").bet("LR");
game.contestant("Joel");
game.contestant("Leo").bet("AR");
game.contestant("Leon").eliminate();
game.contestant("Lucas").bet("JR").eliminate();
game.contestant("Lukas").bet("FL");
game.contestant("Margaux");
game.contestant("Minou").bet("MR");
game.contestant("Olivia").bet("SB").eliminate();
game.contestant("Paulina").bet("RS").eliminate();
game.contestant("Robin H").eliminate();
game.contestant("Robin S").bet("OR").bet("ER");
game.contestant("Victoria");

export { game };
