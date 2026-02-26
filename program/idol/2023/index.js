import { Idol } from "../index.js";

const game = new Idol(2023);

game.contestant("Antranik").eliminate(6);
game.contestant("Aus").eliminate(11);
game
  .contestant("Cimberly")
  .win()
  .bet("AR")
  .bet("JR")
  .bet("ER", false)
  .bet("RS", false);
game.contestant("Emil").eliminate(10);
game.contestant("Fredrik").eliminate(12);
game.contestant("Isak").eliminate(9).bet("ER");
game.contestant("Jordan").eliminate(5).bet("JR", false).bet("OR");
game.contestant("Louisa").eliminate(4);
game.contestant("Olivia").eliminate(8).bet("AR", false);
game.contestant("Saga").eliminate(2).bet("AR", false).bet("MR");
game
  .contestant("Simon")
  .eliminate(3)
  .bet("FL")
  .bet("JR", false)
  .bet("LR")
  .bet("RS");
game.contestant("Tilda").eliminate(7).bet("MR", false);

export { game };
