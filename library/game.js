const PLAYER_STATE = {
  WINNER: -1,
  PLAYING: 0,
  ELIMINATED: 1,
  QUIT: 2,
};

export const getPlayerStateLabel = (state) => {
  return Object.entries(PLAYER_STATE).find(
    ([key, value]) => value === state,
  )?.[0];
};

// Either give medals based on rarity, did you guess on the winner alone, with others, or with secondary votes
// or give medals based on position, 1st, 2nd, 3rd,
// or combination of both?
// give medals based on position, but score is based on rarity?
export class Leaderboard {
  constructor(games) {
    this.games = games;
    this.podiumPoints = [100, 50, 25];
    this.medals = ["🥇", "🥈", "🥉"];
  }

  sortMedals(medals) {
    return medals.sort(
      (a, b) => this.medals.indexOf(a) - this.medals.indexOf(b),
    );
  }

  get() {
    const leaderboard = {};

    this.games.forEach((game) => {
      game.contestants.forEach((contestant) => {
        contestant.votes.forEach((vote) => {
          leaderboard[vote.name] = { trophies: [], points: 0 };
        });
      });
    });

    this.games.forEach((game) => {
      const podium = game.contestants.filter(
        (contestant) => contestant.position <= this.podiumPoints.length,
      );
      podium.forEach((contestant) => {
        contestant.votes.forEach((vote) => {
          leaderboard[vote.name].points +=
            this.podiumPoints[contestant.position - 1];
          leaderboard[vote.name].trophies.push(
            this.medals[contestant.position - 1],
          );
        });
      });
    });

    // this.games.forEach((game) => {
    //   const winner = game.contestants.find(
    //     (contestant) => contestant.state === PLAYER_STATE.WINNER,
    //   );
    //   // const hasPrimary = winner?.votes.some((vote) => vote.primary);
    //   winner?.votes.forEach((vote) => {
    //     if (vote.primary && winner.primaryVotes === 1) {
    //       leaderboard[vote.name].trophies.push("🥇");
    //     } else if (vote.primary) {
    //       leaderboard[vote.name].trophies.push("🥈");
    //     } else {
    //       leaderboard[vote.name].trophies.push("🥉");
    //     }
    //   });
    // });

    Object.entries(leaderboard).forEach(([_, entry]) => {
      entry.trophies = this.sortMedals(entry.trophies);
    });

    return Object.entries(leaderboard).sort(
      ([_a, a], [_b, b]) => b.points - a.points,
    );
  }
}

export class Game {
  constructor(meta, theme, emojis, displayPosition = true) {
    this.meta = meta;
    this.emojis = emojis;
    this.contestants = [];
    this.defaultImageFormat = ".webp";
    this.theme = theme;
    this.displayPosition = displayPosition;
  }

  contestant(name, role) {
    const img =
      name.toLowerCase().replaceAll(" ", "-") + this.defaultImageFormat;
    const contestant = new Contestant(name, img, role);
    this.contestants.push(contestant);
    return contestant;
  }

  win(name) {
    const winner = this.contestants.find((c) => c.name === name);
    winner.win();
  }

  eliminate(...names) {
    const position =
      this.contestants.filter(
        (contestant) => contestant.state === PLAYER_STATE.PLAYING,
      ).length -
      names.length +
      1;

    const eliminatedContestants = names.map((name) =>
      this.contestants.find((c) => c.name === name),
    );
    eliminatedContestants.forEach((contestant) => {
      contestant.eliminate(position);
    });

    return {
      reason: (reason) => {
        eliminatedContestants.forEach((contestant) => {
          contestant.reason = reason;
        });
      },
    };
  }

  isLive() {
    return this.contestants.some(
      (contestant) => contestant.state === PLAYER_STATE.PLAYING,
    );
  }

  sortContestants() {
    this.contestants
      .sort((a, b) => a.name.localeCompare(b.name))
      .sort((a, b) => b.secondaryVotes - a.secondaryVotes)
      .sort((a, b) => b.primaryVotes - a.primaryVotes)
      .sort((a, b) => a.state - b.state)
      .sort((a, b) => a.position - b.position);
  }
}

class Contestant {
  constructor(name, img, role) {
    this.name = name;
    this.img = img;
    this.role = role;
    this.position;
    this.reason;
    this.state = PLAYER_STATE.PLAYING;
    this._votes = [];
  }

  primary(name) {
    this.bet(name, true);
    return this;
  }

  secondary(name) {
    this.bet(name, false);
    return this;
  }

  bet(name, primary = true) {
    this._votes.push({ name, primary });
    return this;
  }

  quit() {
    this.state = PLAYER_STATE.QUIT;
    return this;
  }

  eliminate(position, reason) {
    this.reason = reason;
    this.state = PLAYER_STATE.ELIMINATED;
    this.position = position ?? Infinity;
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
