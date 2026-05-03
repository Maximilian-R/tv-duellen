import { Robinson } from "../index.js";

const game = new Robinson(2026, 1, "Vår");

game.contestant("Anna");
game.contestant("Aydin").quit();
game.contestant("Erika").quit();
game.contestant("Iki");
game.contestant("Marie");
game.contestant("Anja");
game.contestant("Melina").quit();
game.contestant("Nathalie");
game.contestant("Sebastian");
game.contestant("Waldo").quit();
game.contestant("Aza");
game.contestant("Carl-Oscar");
game.contestant("Lema").quit();
game.contestant("Mensur").quit();
game.contestant("Ola");
game.contestant("Amadeus");
game.contestant("Hanna").quit();
game.contestant("Jonas");
game.contestant("Lasse");
game.contestant("Sonja");

game.contestant("Carolina");
game.contestant("Halil");

game.badge = "open";

game.eliminate("Anja");
game.eliminate("Sebastian");
game.eliminate("Carl-Oscar");

export { game };
