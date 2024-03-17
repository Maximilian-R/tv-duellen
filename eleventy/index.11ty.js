import { html } from "@lit-labs/ssr";
import {
  renderToString,
  createEmojis,
  createLeaderboard,
} from "../library/views.js";
import { Leaderboard } from "../library/game.js";

export default {
  data: {
    title: "TV-Duellen",
  },

  render: ({ collections }) => {
    const content = html`<!DOCTYPE html>
      <html lang="sv-SE">
        <head>
          <meta name="robots" content="noindex" />
          <meta charset="UTF-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <link rel="stylesheet" href="./styles/styles.css" />
          <script src="./library/animation.js" type="module"></script>
          <title>TV-Duellen</title>
        </head>
        <body>
          <header>
            <h1>TV-Duellen</h1>
            ${createEmojis(["🎙️", "🥕", "🌴"])}
          </header>
          <main>
            <ul>
              ${collections.program.map(
                (program) =>
                  html`<li>
                    <a href=".${program.page.url}">${program.data.title}</a>
                  </li>`
              )}
            </ul>
            ${createLeaderboard(
              new Leaderboard(
                collections.program.map((program) => program.data.game)
              )
            )}
          </main>
        </body>
      </html>`;
    return renderToString(content);
  },
};
