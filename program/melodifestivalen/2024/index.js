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
game.contestant("Jacqline").bet("OR").bet("JR",false);
game.contestant("Liamoo");
game.contestant("Maria Sur");
game.contestant("Smash Into Pieces").bet("MS",false);
game.contestant("Danny Saucedo").bet("LR",false).bet("AR",false);
game.contestant("Dotter");
game.contestant("Jay Smith").bet("RS",false).bet("MS").bet("MS",false);
game.contestant("Annika Wickihalder").bet("RS").bet("MR").bet("MS");
game.contestant("Marcus & Martinus").bet("JR").bet("LR").bet("AR").bet("OR",false);
game.contestant("Medina").bet("MR",false);

export { game };
