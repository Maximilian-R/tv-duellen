import { Robinson } from "../index.js";

const game = new Robinson(2026, 2, "Höst");

game.contestant("Baran").quit();
game.contestant("Celine").quit();
game.contestant("Christoffer");
game.contestant("Claudia");
game.contestant("Devin");
game.contestant("Erik").quit();
game.contestant("Fredrik");
game.contestant("Jessica");
game.contestant("Juliette");
game.contestant("Maria");
game.contestant("Martin").quit();
game.contestant("Matilda");
game.contestant("Milo");
game.contestant("Moa");
game.contestant("Olle").quit();
game.contestant("Petra");
game.contestant("Philip");
game.contestant("Siri");
game.contestant("Sofia");
game.contestant("Tommy");
game.contestant("Tove");
game.contestant("Sebastian");
game.contestant("Ida");
game.contestant("Desiree");

game.badge = "live";
// game.lock();

game.eliminate("Sofia");
game.eliminate("Moa");
game.eliminate("Claudia");
game.eliminate("Desiree");
game.eliminate("Ida");
game.eliminate("Christoffer");
game.eliminate("Siri");

export { game };
