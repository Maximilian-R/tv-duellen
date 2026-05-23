import { Forradarna } from "../index.js";

const game = new Forradarna(2026);

const traitor = "🎭";

game.contestant("Adelina");
game.contestant("Anna");
game.contestant("Carl");
game.contestant("Dan");
game.contestant("Elaf");
game.contestant("Gunnar");
game.contestant("Henrik");
game.contestant("Johan");
game.contestant("Julia");
game.contestant("Luay");
game.contestant("Mona");
game.contestant("Parham");
game.contestant("Patrik", traitor);
game.contestant("Sebastian");
game.contestant("Simi").quit();
game.contestant("Tilda");
game.contestant("Bibi");
game.contestant("Jonna");
game.contestant("Miriam", traitor);
game.contestant("Torbjörn", traitor);

game.badge = "live";
game.lock();

game.eliminate("Henrik").reason("MURDER");
game.eliminate("Elaf");
game.eliminate("Jonna").reason("MURDER");
game.eliminate("Bibi");
game.eliminate("Adelina").reason("MURDER");
game.eliminate("Gunnar");
game.eliminate("Dan").reason("MURDER");
game.eliminate("Julia");
game.eliminate("Sebastian").reason("MURDER");
game.eliminate("Luay");

export { game };
