import { Game } from "../../library/game.js";

export class Baby extends Game {
  constructor(year) {
    super(
      { name: "Bebis", year, secondaryVotes: 0 },
      ["baby", "theme-white"],
      ["🍼", "🍼", "🍼"],
      false,
    );
  }

  sortContestants() {}
}
