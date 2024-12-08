import { Game } from "../../../library/game.js";

const game = new Game(
  { name: "Robinson", year: 2024, version: 2, versionTitle: "Höst" },
  ["robinson", "rounded"],
  ["🌴", "🥥", "🔥"]
);

game.contestant("Maxim").bet("AR", false);
game.contestant("Amanda R").eliminate();
game.contestant("Natalie");
game.contestant("Alva").bet("RS").eliminate();
game.contestant("Roger").eliminate();
game.contestant("Viktor").bet("MR").bet("OR", false);
game.contestant("Gertrud").eliminate();

game.contestant("Monireh").eliminate();
game.contestant("Emmeli").bet("RS", false).eliminate();
game.contestant("Nabaz");
game.contestant("Oliver").bet("JR", false).bet("OR");
game.contestant("Thomas").eliminate();
game.contestant("Elsa").eliminate();
game.contestant("Ramia").eliminate();

game.contestant("Ali");
game.contestant("Tommy").eliminate();
game.contestant("Ida").bet("JR");
game.contestant("Ludvig").eliminate();
game.contestant("Lena").eliminate();
game.contestant("Amanda B").bet("AR");
game.contestant("Chris").eliminate();

game.contestant("Tove").bet("MR", false);
game.contestant("Patrik");

export { game };
