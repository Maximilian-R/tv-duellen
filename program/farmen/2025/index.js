import { Farmen } from "../index.js";

const game = new Farmen(2025);

game.contestant("Jonna").quit();
game.contestant("Sofia").bet("AR", false).bet("OR").eliminate();
game.contestant("Alida").bet("OR", false).eliminate();
game.contestant("Jesper").bet("MR", false).eliminate(3);
game.contestant("Peter").quit();
game.contestant("Hanna").eliminate();
game.contestant("Andreas").eliminate();
game.contestant("Marica").bet("JR").bet("RS").eliminate();
game.contestant("Amanda").eliminate(2);
game.contestant("Adam").bet("MR").eliminate(3);
game.contestant("Robert").bet("RS", false).quit();
game.contestant("Jessica").eliminate();
game.contestant("Mikael").win();
game.contestant("Niklas").bet("AR").bet("JR", false).eliminate();
game.contestant("Graham").quit();
game.contestant("Nathalie").quit();

export { game };
