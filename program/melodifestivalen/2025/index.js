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
game.contestant("Annika Wickihalder").bet("RS").bet("EMS");
game.contestant("Dolly Style");
game.contestant("Erik Segerstedt").bet("OR", false);
game
  .contestant("Greczula")
  .bet("MR")
  .bet("OR")
  .bet("AR")
  .bet("LR")
  .bet("AMS", false);
game.contestant("John Lundvik");
game
  .contestant("Kaj")
  .bet("RS", false)
  .bet("AR", false)
  .bet("JR", false)
  .bet("FL", false)
  .bet("AMS")
  .bet("ER");
game.contestant("Klara Hammarström").bet("ER", false);
game.contestant("Maja Ivarsson");
game.contestant("Meira Omar").bet("JR");
game.contestant("Måns Zelmerlöw").bet("FL").bet("EMS", false);
game.contestant("Saga Ludvigsson");
game.contestant("Scarlet").bet("MR", false);

export { game };
