import { Game } from "../../library/game.js";

export class Forradarna extends Game {
  constructor(year) {
    super(
      { name: "Förrädarna", year },
      ["förrädarna", "theme-white"],
      ["🎭", "🗡️", "🩸"],
      false,
    );
  }
}
