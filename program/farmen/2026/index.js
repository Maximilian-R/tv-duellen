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
game.contestant("Ayda").eliminate();
game.contestant("Bosse");
game.contestant("Erik");
game.contestant("Jenny");
game.contestant("Jonas").eliminate();
game.contestant("Kevin");
game.contestant("Niklas");
game.contestant("Nils").quit();
game.contestant("Pim").quit();
game.contestant("Stephanie");
game.contestant("Tindra").eliminate();
game.contestant("Vanessa");

// game.eliminate("Tindra");

export { game };
