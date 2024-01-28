import { Game } from "../../../library/game.js";

const game = new Game(
  { name: "Robinson", year: 2024 },
  ["robinson", "rounded"],
  ["🌴", "🥥", "🔥"]
);

game.contestant("Ci");
game.contestant("Alma");
game.contestant("Hanna");
game.contestant("Maureen");
game.contestant("Olivia");
game.contestant("Zayera");
game.contestant("Simone");
game.contestant("Karin");
game.contestant("Desirée");
game.contestant("Charlotta");
game.contestant("Helen");

game.contestant("Rooble");
game.contestant("Pål");
game.contestant("Pelle");
game.contestant("Mark");
game.contestant("Pontus");
game.contestant("Lars");
game.contestant("Kemo");
game.contestant("Marcus");
game.contestant("Fredrik");
game.contestant("Gustav");
game.contestant("Alexander");

export { game };
