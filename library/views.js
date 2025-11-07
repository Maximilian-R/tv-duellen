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

  // <div class="rank">${index + 1}</div>
  return html`<div class="leaderboard-container">
    <h2>Leaderboard</h2>
    <ol class="leaderboard">
      ${leaderboard.map(
        ([key, value], index) =>
          html`<li>
            <div data-name="${key}" class="vote">${key}</div>
            <div class="stats">
              <div class="trophies">
                ${[...Array(value.trophies).keys()].map((v) => "🏆")}
              </div>
              <div class="points">${value.points}</div>
            </div>
          </li>`
      )}
    </ol>
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
      <h1>
        ${unsafeHTML(meta.title ?? meta.name)}
        ${meta.year}${meta.version ? " " + meta.versionTitle : ""}
      </h1>
      ${createEmojis(emojis)}
    </header>
  `;
}

export function createEmojis(emojis, small = false) {
  return html`<div class="emojis animate ${small ? "small" : undefined}">
    ${emojis.map(
      (emoji, index) =>
        html`<div style="--animation-order: ${index};">${emoji}</div>`
    )}
  </div>`;
}

export function createMain({ contestants, emojis }) {
  return html`<main>
    <ul>
      ${contestants.map((contestant) => createContestant(contestant))}
    </ul>
    ${createEmojis(emojis)}
  </main>`;
}

export function createContestant({ img, name, votes, state, position }) {
  return html`<li data-dialog-trigger>
    <picture
      state=${getPlayerStateLabel(state) ?? nothing}
      position=${Number.isFinite(position) ? position : nothing}
      ><img src="./images/${img}" onerror="replaceImage(this)"
    /></picture>
    <span>${name}</span>
    ${createVotes(votes)} ${createDialog({ name, votes, img })}
  </li>`;
}

export function createDialog({ name, votes, img }) {
  return html` <dialog>
    <form method="dialog">
      <button type="submit">Stäng</button>
    </form>
    <picture><img src="./images/${img}" /></picture>
    <h1>${name}</h1>
    ${createVotes(votes, true, false)}
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
        </div>`
    )}
    ${hiddenVotes}
  </div>`;
}
