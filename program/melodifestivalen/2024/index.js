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
game.contestant("Lisa Ajax").eliminate(11);
game.contestant("Cazzi Opeia").eliminate(4);
game.contestant("Jacqline").bet("OR").bet("JR", false).eliminate(9);
game.contestant("Liamoo").eliminate(5);
game.contestant("Maria Sur").eliminate(7);
game.contestant("Smash Into Pieces").bet("AMS", false).eliminate(3);
game.contestant("Danny Saucedo").bet("LR", false).bet("AR", false).eliminate(6);
game.contestant("Dotter").eliminate(12);
game
  .contestant("Jay Smith")
  .bet("RS", false)
  .bet("AMS")
  .bet("EMS", false)
  .eliminate(10);
game
  .contestant("Annika Wickihalder")
  .bet("RS")
  .bet("MR")
  .bet("EMS")
  .eliminate(8);
game
  .contestant("Marcus & Martinus")
  .bet("JR")
  .bet("LR")
  .bet("AR")
  .bet("OR", false)
  .win();
game.contestant("Medina").bet("MR", false).eliminate(2);

export { game };
