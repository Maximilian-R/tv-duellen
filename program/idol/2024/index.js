import { Game } from "../../../library/game.js";

const game = new Game(
  { name: "Idol", year: 2024 },
  ["idol", "rounded", "theme-white"],
  ["🎙️", "✨", "🎶"]
);
game.contestant("Benjamin").eliminate();
game.contestant("Ella").bet("LR").eliminate();
game.contestant("Joel").eliminate();
game.contestant("Leo").bet("AR").eliminate();
game.contestant("Leon").eliminate();
game.contestant("Lucas").bet("JR").eliminate();
game.contestant("Lukas").bet("FL").eliminate();
game.contestant("Margaux").win();
game.contestant("Minou").bet("MR").eliminate();
game.contestant("Olivia").eliminate(); //.bet("GUEST")
game.contestant("Paulina").bet("RS").eliminate();
game.contestant("Robin H").eliminate();
game.contestant("Robin S").bet("OR").bet("ER").eliminate();
game.contestant("Victoria").eliminate();

export { game };
