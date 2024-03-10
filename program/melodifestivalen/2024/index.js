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
game.contestant("Lisa Ajax").eliminate();
game.contestant("Cazzi Opeia").eliminate();
game.contestant("Jacqline").bet("OR").bet("JR",false).eliminate();
game.contestant("Liamoo").eliminate();
game.contestant("Maria Sur").eliminate();
game.contestant("Smash Into Pieces").bet("MS",false).eliminate();
game.contestant("Danny Saucedo").bet("LR",false).bet("AR",false).eliminate();
game.contestant("Dotter").eliminate();
game.contestant("Jay Smith").bet("RS",false).bet("MS").bet("MS",false).eliminate();
game.contestant("Annika Wickihalder").bet("RS").bet("MR").bet("MS").eliminate();
game.contestant("Marcus & Martinus").bet("JR").bet("LR").bet("AR").bet("OR",false).winner();
game.contestant("Medina").bet("MR",false).eliminate();

export { game };
