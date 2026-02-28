import { Game } from "../../library/game.js";

export class Idol extends Game {
  constructor(year, secondaryVotes) {
    super(
      { name: "Idol", year, secondaryVotes },
      ["idol", "rounded", "theme-white"],
      ["🎙️", "✨", "🎶"],
      false,
    );
  }
}
