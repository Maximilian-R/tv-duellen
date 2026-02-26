import { Game } from "../../library/game.js";

export class Farmen extends Game {
  constructor(year) {
    super({ name: "Farmen", year }, ["farmen"], ["🥕", "🌽", "🥔"], false);
  }
}
