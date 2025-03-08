import { Game } from "../../../library/game.js";

const game = new Game(
  { name: "Robinson", year: 2025, version: 1, versionTitle: "Vår" },
  ["robinson", "rounded"],
  ["🌴", "🥥", "🔥"]
);

game.contestant("Clara");
game.contestant("Josefine");
game.contestant("Andreas E");
game.contestant("Anna");
game.contestant("Simon H");
game.contestant("Simon S");
game.contestant("Zuzana");
game.contestant("Angelica");
game.contestant("Kais");
game.contestant("Aron");

game.contestant("Andrea");
game.contestant("Christoffer");
game.contestant("Leith");
game.contestant("Toni");
game.contestant("David");
game.contestant("Juliette");
game.contestant("Madeleine");
game.contestant("Amanda Å");
game.contestant("Andreas L");
game.contestant("Sewit");

game.contestant("Sara");
game.contestant("Amanda E");
game.contestant("Pascal");

export { game };
