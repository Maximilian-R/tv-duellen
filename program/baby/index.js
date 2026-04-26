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

  win(name) {
    super.win(name);

    this.contestants
      .filter((c) => c.name !== name)
      .forEach((c) => c.eliminate(2, "EMPTY"));
  }
}
