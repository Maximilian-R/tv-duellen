import { Game } from "../../../library/game.js";

const game = new Game(
  { name: "Idol", year: 2023 },
  ["idol", "rounded", "theme-white"],
  ["✨", "🎙️", "🎶"]
);
game.contestant("Antranik").eliminate();
game.contestant("Aus").eliminate();
game
  .contestant("Cimberly")
  .win()
  .bet("AR")
  .bet("JR")
  .bet("ER", false)
  .bet("RS", false);
game.contestant("Emil").eliminate();
game.contestant("Fredrik").eliminate();
game.contestant("Isak").eliminate().bet("ER");
game.contestant("Jordan").eliminate().bet("JR", false).bet("OR");
game.contestant("Louisa").eliminate();
game.contestant("Olivia").eliminate().bet("AR", false);
game.contestant("Saga").eliminate().bet("AR", false).bet("MR");
game
  .contestant("Simon")
  .eliminate()
  .bet("FL")
  .bet("JR", false)
  .bet("LR")
  .bet("RS");
game.contestant("Tilda").eliminate().bet("MR", false);

export { game };
