import { nothing } from "lit";
import { unsafeHTML } from "lit/directives/unsafe-html.js";
import { collectResultSync } from "@lit-labs/ssr/lib/render-result.js";
import { render as litRender, html } from "@lit-labs/ssr";

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
        ([key, value]) =>
          html`<li>
            <div data-name="${key}" class="vote">${key}</div>
            ${[...Array(value).keys()].map((v) => "🏆")}
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

export function createEmojis(emojis) {
  return html`<div class="emojis animate">
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
  return html`<li>
    <picture state=${state ?? nothing} position=${position ?? nothing}
      ><img src="./images/${img}"
    /></picture>
    <span>${name}</span>
    ${createVotes(votes)}
  </li>`;
}

export function createVotes(votes) {
  return html` <div class="votes animate">
    ${votes.map(
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
  </div>`;
}
