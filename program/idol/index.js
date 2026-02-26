import { Game } from "../../library/game.js";

export class Idol extends Game {
  constructor(year) {
    super(
      { name: "Idol", year },
      ["idol", "rounded", "theme-white"],
      ["🎙️", "✨", "🎶"],
      false,
    );
  }
}
