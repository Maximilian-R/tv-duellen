import { Robinson } from "../index.js";

const game = new Robinson(2026, 1, "Vår");

game.contestant("Anna");
game.contestant("Aydin");
game.contestant("Erika");
game.contestant("Iki");
game.contestant("Marie");
game.contestant("Anja");
game.contestant("Melina");
game.contestant("Nathalie");
game.contestant("Sebastian");
game.contestant("Waldo");
game.contestant("Aza");
game.contestant("Carl-Oscar");
game.contestant("Lema");
game.contestant("Mensur");
game.contestant("Ola");
game.contestant("Amadeus");
game.contestant("Hanna");
game.contestant("Jonas");
game.contestant("Lasse");
game.contestant("Sonja");

game.lock();

export { game };
