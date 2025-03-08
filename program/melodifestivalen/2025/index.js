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
game.contestant("Annika Wickihalder").bet("RS").bet("EMS").eliminate();
game.contestant("Dolly Style").eliminate();
game.contestant("Erik Segerstedt").bet("OR", false).eliminate();
game
  .contestant("Greczula")
  .bet("MR")
  .bet("OR")
  .bet("AR")
  .bet("LR")
  .bet("AMS", false)
  .eliminate();
game.contestant("John Lundvik").eliminate();
game
  .contestant("Kaj")
  .bet("RS", false)
  .bet("AR", false)
  .bet("JR", false)
  .bet("FL", false)
  .bet("AMS")
  .bet("ER")
  .win();
game.contestant("Klara Hammarström").bet("ER", false).eliminate();
game.contestant("Maja Ivarsson").eliminate();
game.contestant("Meira Omar").bet("JR").eliminate();
game.contestant("Måns Zelmerlöw").bet("FL").bet("EMS", false).eliminate();
game.contestant("Saga Ludvigsson").eliminate();
game.contestant("Scarlet").bet("MR", false).eliminate();

export { game };
