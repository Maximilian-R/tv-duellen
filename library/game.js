const states = {
  winner: -1,
  null: 0,
  eliminated: 1,
  quitter: 2,
};

export class Game {
  constructor(meta, theme, emojis) {
    this.meta = meta;
    this.emojis = emojis;
    this.contestants = [];
    this.defaultImageFormat = ".jpg";
    this.theme = theme;
  }

  contestant(name) {
    const img =
      name.toLowerCase().replaceAll(" ", "-") + this.defaultImageFormat;
    const contestant = new Contestant(name, img);
    this.contestants.push(contestant);
    return contestant;
  }

  sortContestants() {
    this.contestants
      .sort((a, b) => a.name.localeCompare(b.name))
      .sort((a, b) => states[a.state] - states[b.state])
      .sort((a, b) => b.secondaryVotes - a.secondaryVotes)
      .sort((a, b) => b.primaryVotes - a.primaryVotes)
      .sort(
        (a, b) =>
          (a.state === "winner" ? 0 : 1) - (b.state === "winner" ? 0 : 1)
      );
  }
}

class Contestant {
  constructor(name, img) {
    this.name = name;
    this.img = img;
    this.state = null;
    this.position;
    this.winner = false;
    this._votes = [];
  }

  bet(name, primary = true) {
    this._votes.push({ name, primary });
    return this;
  }

  quit() {
    this.state = "quitter";
    return this;
  }

  eliminate(position) {
    this.state = "eliminated";
    this.position = position;
    return this;
  }

  win() {
    this.state = "winner";
    return this;
  }

  get votes() {
    return this._votes
      .sort((a, b) => a.name.localeCompare(b.name))
      .sort((a, b) => b.primary - a.primary);
  }

  get primaryVotes() {
    return this.votes.filter((vote) => vote.primary).length;
  }

  get secondaryVotes() {
    return this.votes.filter((vote) => !vote.primary).length;
  }
}
