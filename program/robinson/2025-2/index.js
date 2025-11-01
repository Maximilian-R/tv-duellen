import { Game } from "../../../library/game.js";

const game = new Game(
  { name: "Robinson", year: 2025, version: 2, versionTitle: "Höst" },
  ["robinson", "rounded"],
  ["🌴", "🥥", "🔥"]
);

game.contestant("Agust");
game.contestant("Akink");
game.contestant("Ania");
game.contestant("Ann-Helene");
game.contestant("Anna");
game.contestant("Carin");
game.contestant("Charlie");
game.contestant("Diana").quit();
game.contestant("Ebba");
game.contestant("Emilly");
game.contestant("Emma");
game.contestant("Jacob").quit();
game.contestant("Jasmine");
game.contestant("Johan");
game.contestant("Kevin");
game.contestant("Matteo");
game.contestant("René");
game.contestant("Salah").quit();
game.contestant("Samuel");
game.contestant("Susanne");
game.contestant("Ulf");

game.contestant("Lea");
game.contestant("Per");

export { game };
