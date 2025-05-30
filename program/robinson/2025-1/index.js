import { Game } from "../../../library/game.js";

const game = new Game(
  { name: "Robinson", year: 2025, version: 1, versionTitle: "Vår" },
  ["robinson", "rounded"],
  ["🌴", "🥥", "🔥"]
);

game.contestant("Clara").quit();
game.contestant("Josefine").eliminate();
game.contestant("Andreas E").quit();
game.contestant("Anna").quit();
game.contestant("Simon H");
game.contestant("Simon S").eliminate();
game.contestant("Zuzana").eliminate();
game.contestant("Angelica").quit();
game.contestant("Kais");
game.contestant("Aron").bet("MR", false);

game.contestant("Andrea").eliminate();
game.contestant("Christoffer").bet("JR", false).eliminate();
game.contestant("Leith").quit();
game.contestant("Toni").eliminate();
game.contestant("David").bet("RS").eliminate();
game.contestant("Juliette");
game.contestant("Madeleine").eliminate();
game.contestant("Amanda Å").quit();
game.contestant("Andreas L").quit();
game.contestant("Sewit").eliminate();

game.contestant("Sara");
game.contestant("Amanda E").eliminate();
game.contestant("Pascal").quit();
game.contestant("Pål").bet("AR", false).bet("RS", false).bet("MR").eliminate();
game.contestant("Fabian").quit();
game.contestant("Sophie").bet("AR").bet("JR").bet("OR");
game.contestant("Pontus").bet("OR", false);

export { game };
