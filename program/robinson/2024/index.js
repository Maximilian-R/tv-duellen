import { Game } from "../../../library/game.js";

const game = new Game(
  { name: "Robinson", year: 2024 },
  ["robinson", "rounded"],
  ["🌴", "🥥", "🔥"]
);

game.contestant("Ci").eliminate().bet("MR").bet("OR", false);
game.contestant("Alma");
game.contestant("Hanna").quit();
game.contestant("Maureen");
game.contestant("Olivia");
game.contestant("Zayera");
game.contestant("Simone");
game.contestant("Karin").eliminate();
game.contestant("Desirée").quit();
game.contestant("Charlotta").quit().bet("RS", false);
game.contestant("Helen").eliminate();

game.contestant("Rooble");
game.contestant("Pål");
game.contestant("Pelle").bet("AR").bet("JR", false);
game.contestant("Mark").bet("OR").bet("RS").bet("AR", false);
game.contestant("Pontus").eliminate();
game.contestant("Lars").quit();
game.contestant("Marcus").bet("MR", false);
game.contestant("Kemo").quit();
game.contestant("Fredrik").quit();
game.contestant("Gustav");
game.contestant("Alexander").bet("JR");

export { game };
