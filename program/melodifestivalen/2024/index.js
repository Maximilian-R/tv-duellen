import { Game } from "../../../library/game.js";

const game = new Game(
  {
    name: "Melodifestivalen",
    year: 2024,
    title: "Melodi&shy;festivalen",
    short: "Mello",
  },
  ["melodifestivalen", "rounded", "theme-white"],
  ["🪩", "🎈", "🎤"]
);
game.contestant("Lisa Ajax");
game.contestant("Cazzi Opeia");
game.contestant("Jacqline");
game.contestant("Liamoo");
game.contestant("Maria Sur");
game.contestant("Smash Into Pieces");
game.contestant("Danny Saucedo");
game.contestant("Dotter");
game.contestant("Jay Smith");
game.contestant("Annika Wickihalder");
game.contestant("Marcus & Martinus");
game.contestant("Medina");

export { game };
