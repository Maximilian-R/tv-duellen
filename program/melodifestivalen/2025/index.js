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
game.contestant("Annika Wickihalder").bet("RS").bet("EMS").eliminate(8);
game.contestant("Dolly Style").eliminate(5);
game.contestant("Erik Segerstedt").bet("OR", false).eliminate(9);
game
  .contestant("Greczula")
  .bet("MR")
  .bet("OR")
  .bet("AR")
  .bet("LR")
  .bet("AMS", false)
  .eliminate(3);
game.contestant("John Lundvik").eliminate(6);
game
  .contestant("Kaj")
  .bet("RS", false)
  .bet("AR", false)
  .bet("JR", false)
  .bet("FL", false)
  .bet("AMS")
  .bet("ER")
  .bet("ARL")
  .win();
game.contestant("Klara Hammarström").bet("ER", false).eliminate(4);
game.contestant("Maja Ivarsson").eliminate(11);
game.contestant("Meira Omar").bet("JR").eliminate(10);
game.contestant("Måns Zelmerlöw").bet("FL").bet("EMS", false).eliminate(2);
game.contestant("Saga Ludvigsson").eliminate(12);
game.contestant("Scarlet").bet("MR", false).eliminate(7);

export { game };
