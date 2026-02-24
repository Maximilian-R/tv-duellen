import { Game } from "../../../library/game.js";

const game = new Game(
  { name: "Robinson", year: 2024, version: 2, versionTitle: "Höst" },
  ["robinson", "rounded"],
  ["🌴", "🥥", "🔥"],
  false,
);

game.contestant("Maxim").bet("AR", false).eliminate();
game.contestant("Amanda R").eliminate();
game.contestant("Natalie").eliminate();
game.contestant("Alva").bet("RS").eliminate();
game.contestant("Roger").eliminate();
game.contestant("Viktor").bet("MR").bet("OR", false).eliminate();
game.contestant("Gertrud").eliminate();

game.contestant("Monireh").eliminate();
game.contestant("Emmeli").bet("RS", false).eliminate();
game.contestant("Nabaz").eliminate(2);
game.contestant("Oliver").bet("JR", false).bet("OR").eliminate();
game.contestant("Thomas").eliminate();
game.contestant("Elsa").eliminate();
game.contestant("Ramia").eliminate();

game.contestant("Ali").eliminate();
game.contestant("Tommy").eliminate();
game.contestant("Ida").bet("JR").win();
game.contestant("Ludvig").eliminate();
game.contestant("Lena").eliminate();
game.contestant("Amanda B").bet("AR").eliminate(2);
game.contestant("Chris").eliminate();

game.contestant("Tove").bet("MR", false).eliminate();
game.contestant("Patrik").eliminate();

export { game };
