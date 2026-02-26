import { Idol } from "../index.js";

const game = new Idol(2024);

game.contestant("Benjamin").eliminate(13);
game.contestant("Ella").bet("LR").eliminate(8);
game.contestant("Joel").eliminate(2);
game.contestant("Leo").bet("AR").eliminate(5);
game.contestant("Leon").eliminate(14);
game.contestant("Lucas").bet("JR").eliminate(10);
game.contestant("Lukas").bet("FL").eliminate(7);
game.contestant("Margaux").win();
game.contestant("Minou").bet("MR").eliminate(3);
game.contestant("Olivia").eliminate(9); //.bet("GUEST")
game.contestant("Paulina").bet("RS").eliminate(11);
game.contestant("Robin H").eliminate(12);
game.contestant("Robin S").bet("OR").bet("ER").eliminate(4);
game.contestant("Victoria").eliminate(6);

export { game };
