import { nothing } from "lit";
import { unsafeHTML } from "lit/directives/unsafe-html.js";
import { collectResultSync } from "@lit-labs/ssr/lib/render-result.js";
import { render as litRender, html } from "@lit-labs/ssr";
import { getPlayerStateLabel } from "./game.js";

export function renderToString(content) {
  const output = litRender(content);
  return collectResultSync(output);
}

export function createLeaderboard(leaderboard) {
  leaderboard = leaderboard.get();

  return html`<div class="leaderboard-container">
    <h2>Leaderboard</h2>

    <ol class="leaderboard">
      ${leaderboard.map(
        ([key, value], index) =>
          html`<li>
            <div class="rank">${index + 1}</div>
            <div data-name="${key}" class="vote">${key}</div>
            <div class="stats">
              ${null &&
              html`<div class="trophies">
                🥇${value.trophies[1]} 🥈${value.trophies[2]}
                🥉${value.trophies[3]}
              </div>`}
              ${true &&
              html` <div class="trophies">
                ${[...Array(value.trophies[1]).keys()].map(() => "🥇")}${[
                  ...Array(value.trophies[2]).keys(),
                ].map(() => "🥈")}${[...Array(value.trophies[3]).keys()].map(
                  () => "🥉",
                )}
              </div>`}

              <div class="points">${value.points}</div>
            </div>
          </li>`,
      )}
    </ol>

    <div class="leaderboard-info">
      <h3>Poängberäkning</h3>
      ${createEmojis(["🥇 100 ", "🥈 50", "🥉 25"], true, true)}

      <h3>Reservröster</h3>
      ${createEmojis(["🥇 60 ", "🥈 30", "🥉 15"], true, true)}
    </div>
  </div>`;
}

export function createGame(game) {
  game.sortContestants();
  return html`${createHeader(game)}${createMain(game)}`;
}

export function createHeader({ meta, emojis }) {
  return html`
    <header>
      <a class="home" href="../../../">Tillbaka</a>
      <h1 class="neon-sign">${unsafeHTML(meta.title ?? meta.name)}</h1>
      <h2>${meta.year}${meta.versionPath ? " " + meta.versionTitle : ""}</h2>
      ${createEmojis(emojis)}
    </header>
  `;
}

export function createEmojis(emojis, small = false, column = false) {
  return html`<div
    class="emojis animate ${small ? "small" : undefined} ${column
      ? "column"
      : undefined}"
  >
    ${emojis.map(
      (emoji, index) =>
        html`<div style="--animation-order: ${index};">${emoji}</div>`,
    )}
  </div>`;
}

export function createMain({
  contestants,
  emojis,
  displayPosition,
  fallbackImage,
}) {
  return html`<main>
    <ul>
      ${contestants.map((contestant) =>
        createContestant(contestant, displayPosition, fallbackImage),
      )}
    </ul>
    ${createEmojis(emojis)}
  </main>`;
}

export function createContestant(
  { img, name, votes, state, position, role, reason },
  displayPosition,
  fallbackImage,
) {
  return html`<li data-dialog-trigger data-contestant="${name}">
    <picture
      state=${getPlayerStateLabel(state) ?? nothing}
      reason=${reason ?? nothing}
      position=${displayPosition && Number.isFinite(position)
        ? position
        : nothing}
      ><img
        src="./images/${img}"
        onerror="replaceImage(this, ${fallbackImage
          ? `"../images/${fallbackImage}"`
          : null})"
    /></picture>
    <span>${name}</span>
    ${createVotes(votes)} ${createRole(role)}
    ${createDialog({ name, votes, img, role })}
  </li>`;
}

export function createDialog({ name, votes, img, role }) {
  return html` <dialog class="background">
    <form method="dialog">
      <button type="submit">Stäng</button>
    </form>
    <div style="position: relative;">
      <picture><img src="./images/${img}" /></picture>
      <h1>${name}</h1>
      ${createVotes(votes, true, false)} ${createRole(role)}
    </div>
  </dialog>`;
}

export function createVotes(votes, showAll = false, animate = true) {
  let renderVotes = [...votes];
  const hasPrimary = votes.some((vote) => vote.primary);
  const hasSeveralSecondary = votes.filter((vote) => !vote.primary).length > 1;
  const maxRenderVotes = 4;

  if (!showAll) {
    if (
      hasPrimary &&
      hasSeveralSecondary &&
      renderVotes.length > maxRenderVotes
    ) {
      renderVotes = votes.filter((vote) => vote.primary);
    }

    if (renderVotes.length > maxRenderVotes) {
      renderVotes = renderVotes.slice(0, maxRenderVotes - 1);
    }
  }

  const hiddenVotes =
    renderVotes.length < votes.length
      ? html`
          <div
            class="vote collapse"
            style="--animation-order: ${renderVotes.length};"
            data-primary=${false}
          >
            +${votes.length - renderVotes.length}
          </div>
        `
      : nothing;

  return html` <div class="votes ${animate ? "animate" : ""}">
    ${renderVotes.map(
      ({ name, primary }, index) =>
        html`<div
          class="vote"
          style="--animation-order: ${index};"
          data-name=${name}
          data-primary=${primary}
        >
          ${name}
        </div>`,
    )}
    ${hiddenVotes}
  </div>`;
}

export function createRole(role) {
  if (role) {
    return html`<div class="role">${role}</div>`;
  }
}
