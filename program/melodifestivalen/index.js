import { Game } from "../../library/game.js";

export class Melodifestivalen extends Game {
  constructor(year) {
    super(
      {
        name: "Melodifestivalen",
        year: year,
        title: "Melodi&shy;festivalen",
        short: "Mello",
      },
      ["melodifestivalen", "rounded", "theme-white"],
      ["🪩", "🎈", "🎤"],
    );
  }
}
