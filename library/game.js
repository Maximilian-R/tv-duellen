const states = {
  winner: -1,
  null: 0,
  eliminated: 1,
  quitter: 2,
};

export class Leaderboard {
  constructor(games) {
    this.games = games;
  }

  get() {
    const leaderboard = {};

    this.games.forEach((game) => {
      game.contestants.forEach((contestant) => {
        contestant.votes.forEach((vote) => {
          leaderboard[vote.name] = 0;
        });
      });
    });

    this.games.forEach((game) => {
      const winner = game.contestants.find(
        (contestant) => contestant.state === "winner"
      );
      const hasPrimary = winner?.votes.some((vote) => vote.primary);
      winner?.votes
        .filter((vote) => (hasPrimary ? vote.primary : true))
        .forEach((vote) => {
          leaderboard[vote.name] = leaderboard[vote.name] + 1;
        });
    });
    return Object.entries(leaderboard).sort(([_a, a], [_b, b]) => b - a);
  }
}

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
      .sort((a, b) => b.secondaryVotes - a.secondaryVotes)
      .sort((a, b) => b.primaryVotes - a.primaryVotes)
      .sort((a, b) => states[a.state] - states[b.state])
      .sort((a, b) => a.position - b.position)
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
    // this.position = 1;
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
