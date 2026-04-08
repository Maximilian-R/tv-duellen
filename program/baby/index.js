import { Game } from "../../library/game.js";

export class Baby extends Game {
  constructor(year) {
    super(
      { name: "Bebis", year },
      ["baby", "theme-white"],
      ["🍼", "🍼", "🍼"],
      false,
    );
  }

  sortContestants() {}
}
