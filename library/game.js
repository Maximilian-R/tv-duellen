const PLAYER_STATE = {
  WINNER: -1,
  PLAYING: 0,
  ELIMINATED: 1,
  QUIT: 2,
};

export const getPlayerStateLabel = (state) => {
  return Object.entries(PLAYER_STATE).find(
    ([key, value]) => value === state
  )?.[0];
};

export class Leaderboard {
  constructor(games) {
    this.games = games;
    this.podiumPoints = [100, 50, 25];
  }

  get() {
    const leaderboard = {};

    this.games.forEach((game) => {
      game.contestants.forEach((contestant) => {
        contestant.votes.forEach((vote) => {
          leaderboard[vote.name] = { trophies: 0, points: 0 };
        });
      });
    });

    this.games.forEach((game) => {
      const podium = game.contestants.filter(
        (contestant) => contestant.position <= this.podiumPoints.length
      );
      podium.forEach((contestant) => {
        contestant.votes.forEach((vote) => {
          leaderboard[vote.name].points +=
            this.podiumPoints[contestant.position - 1];
        });
      });
    });

    this.games.forEach((game) => {
      const winner = game.contestants.find(
        (contestant) => contestant.state === PLAYER_STATE.WINNER
      );
      const hasPrimary = winner?.votes.some((vote) => vote.primary);
      winner?.votes
        .filter((vote) => (hasPrimary ? vote.primary : true))
        .forEach((vote) => {
          leaderboard[vote.name].trophies = leaderboard[vote.name].trophies + 1;
        });
    });
    return Object.entries(leaderboard).sort(
      ([_a, a], [_b, b]) => b.points - a.points
    );
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
      .sort((a, b) => a.state - b.state)
      .sort((a, b) => (a.position ?? Infinity) - (b.position ?? Infinity));
  }
}

class Contestant {
  constructor(name, img) {
    this.name = name;
    this.img = img;
    this.position;
    this.state = PLAYER_STATE.PLAYING;
    this._votes = [];
  }

  bet(name, primary = true) {
    this._votes.push({ name, primary });
    return this;
  }

  quit() {
    this.state = PLAYER_STATE.QUIT;
    return this;
  }

  eliminate(position) {
    this.state = PLAYER_STATE.ELIMINATED;
    this.position = position;
    return this;
  }

  win() {
    this.state = PLAYER_STATE.WINNER;
    this.position = 1;
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
