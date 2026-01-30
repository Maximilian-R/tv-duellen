import { Game } from "../../../library/game.js";

const game = new Game(
  { name: "Farmen", year: 2026 },
  ["farmen"],
  ["🥕", "🌽", "🥔"],
);
game.contestant("Ahmed");
game.contestant("Alexander");
game.contestant("Amanda");
game.contestant("Angelica");
game.contestant("Ayda");
game.contestant("Bosse");
game.contestant("Erik");
game.contestant("Jenny");
game.contestant("Jonas");
game.contestant("Kevin");
game.contestant("Niklas");
game.contestant("Nils");
game.contestant("Pim");
game.contestant("Stephanie");
game.contestant("Tindra");
game.contestant("Vanessa");

export { game };
