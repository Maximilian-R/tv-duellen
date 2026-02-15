import { Game } from "../../../library/game.js";

const game = new Game(
  {
    name: "Melodifestivalen",
    year: 2026,
    title: "Melodi&shy;festivalen",
    short: "Mello",
  },
  ["melodifestivalen", "rounded", "theme-white"],
  ["🪩", "🎈", "🎤"],
);
game.contestant("Greczula");
game.contestant("A-teens");
game.contestant("Felicia");
game.contestant("Brandsta City Släckers");
game.contestant("Medina");
game.contestant("Saga");
game.contestant("");
game.contestant("");
game.contestant("");
game.contestant("");
game.contestant("");
game.contestant("");

export { game };
