import { Melodifestivalen } from "../index.js";

const game = new Melodifestivalen(2026);

game.contestant("Greczula").eliminate(2);
game.contestant("A-teens").eliminate(7);
game.contestant("Felicia").win();
game.contestant("Brandsta City Släckers").eliminate(5);
game.contestant("Medina").eliminate(3);
game.contestant("Saga").eliminate(12);
game.contestant("Smash Into Pieces").eliminate(4);
game.contestant("Cimberly").eliminate(6);
game.contestant("Lilla Al Fadji").eliminate(8);
game.contestant("Sanna Nielsen").eliminate(10);
game.contestant("Meira Omar").eliminate(9);
game.contestant("Robin Bengtsson").eliminate(11);

game.lock();

export { game };
