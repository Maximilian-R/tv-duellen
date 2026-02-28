import { Robinson } from "../index.js";

const game = new Robinson(2024, 1, "Vår");

game.contestant("Ci").eliminate().bet("MR").bet("OR", false);
game.contestant("Alma").eliminate();
game.contestant("Hanna").quit();
game.contestant("Maureen").eliminate(2);
game.contestant("Olivia").win();
game.contestant("Zayera").eliminate();
game.contestant("Simone").eliminate(3);
game.contestant("Karin").eliminate();
game.contestant("Desirée").quit();
game.contestant("Charlotta").quit().bet("RS", false);
game.contestant("Helen").eliminate();

game.contestant("Rooble").eliminate();
game.contestant("Pål").eliminate();
game.contestant("Pelle").eliminate().bet("AR").bet("JR", false);
game.contestant("Mark").eliminate().bet("OR").bet("RS").bet("AR", false);
game.contestant("Pontus").eliminate();
game.contestant("Lars").quit();
game.contestant("Marcus").eliminate().bet("MR", false);
game.contestant("Kemo").quit();
game.contestant("Fredrik").quit();
game.contestant("Gustav").eliminate();
game.contestant("Alexander").eliminate().bet("JR");

game.lock();

export { game };
