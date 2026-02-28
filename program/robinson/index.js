import { Game } from "../../library/game.js";

export class Robinson extends Game {
  constructor(year, version, versionTitle) {
    super(
      {
        name: "Robinson",
        year: year,
        version: version,
        versionTitle: versionTitle,
        versionPath: version,
      },
      ["robinson", "rounded"],
      ["🌴", "🥥", "🔥"],
      false,
    );
  }
}
