import { Game } from "../../../library/game.js";

const game = new Game(
  { name: "Melodifestivalen", year: 2024, title: "Melodi&shy;festivalen" },
  ["melodifestivalen", "rounded", "theme-white"],
  ["🪩", "🎈", "🎤"]
);
game.defaultImageFormat = ".png";
game.contestant("Lisa Ajax");
game.contestant("Cazzi Opeia");
game.contestant("Jacqline");
game.contestant("Liamoo");
game.contestant("Maria Sur");
game.contestant("Smash Into Pieces");
game.contestant("TBA");
game.contestant("TBA");
game.contestant("TBA");
game.contestant("TBA");
game.contestant("TBA");
game.contestant("TBA");

export { game };
