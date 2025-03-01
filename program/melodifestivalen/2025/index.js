import { Game } from "../../../library/game.js";

const game = new Game(
  {
    name: "Melodifestivalen",
    year: 2025,
    title: "Melodi&shy;festivalen",
    short: "Mello",
  },
  ["melodifestivalen", "rounded", "theme-white"],
  ["🪩", "🎈", "🎤"]
);
game.contestant("Annika Wickihalder");
game.contestant("Dolly Style");
game.contestant("Erik Segerstedt");
game.contestant("Greczula");
game.contestant("John Lundvik");
game.contestant("Kaj");
game.contestant("Klara Hammarström");
game.contestant("Maja Ivarsson");
game.contestant("Meira Omar");
game.contestant("Måns Zelmerlöw");
game.contestant("Saga Ludvigsson");
game.contestant("Scarlet");

export { game };
