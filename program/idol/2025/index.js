import { Idol } from "../index.js";

const game = new Idol(2025, 0);

game.contestant("Allan");
game.contestant("Alma");
game.contestant("Arvid");
game.contestant("Ingrid").bet("ER").bet("FL");
game.contestant("Jénovic").bet("JR");
game.contestant("Jonas");
game.contestant("Karl").bet("OR");
game.contestant("Love B");
game.contestant("Love S").bet("MR").bet("LR");
game.contestant("Malva");
game.contestant("Nicolina");
game.contestant("Nora");
game.contestant("Rasmus");
game.contestant("Rebecca");
game.contestant("Sofia").bet("RS");
game.contestant("Tuva").bet("AR");

game.eliminate("Allan", "Alma", "Nora", "Rasmus");
game.eliminate("Malva", "Rebecca");
game.eliminate("Jénovic", "Karl");
game.eliminate("Sofia", "Love B");
game.eliminate("Arvid");
game.eliminate("Jonas", "Ingrid");
game.eliminate("Nicolina");
game.eliminate("Love S");
game.win("Tuva");

game.lock();

export { game };
