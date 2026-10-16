import { Game } from "../../library/game.js";

export class Forradarna extends Game {
  constructor(year, version, versionTitle) {
    super(
      {
        name: "Förrädarna",
        year,
        version: version,
        versionTitle: versionTitle,
        versionPath: version,
      },
      ["förrädarna", "theme-white"],
      ["🎭", "🗡️", "🩸"],
      false,
    );
  }
}
