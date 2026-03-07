import { Melodifestivalen } from "../index.js";

const game = new Melodifestivalen(2026);

game.contestant("Greczula").eliminate(2);
game.contestant("A-teens");
game.contestant("Felicia").win();
game.contestant("Brandsta City Släckers");
game.contestant("Medina").eliminate(3);
game.contestant("Saga");
game.contestant("Smash Into Pieces");
game.contestant("Cimberly");
game.contestant("Lilla Al Fadji");
game.contestant("Sanna Nielsen");
game.contestant("Meira Omar");
game.contestant("Robin Bengtsson");

game.badge = "closed";
game.lock();

export { game };
