import { html } from "@lit-labs/ssr";
import { renderToString } from "../../library/views.js";

export default async ({
  title,
  themes,
  content,
  metaGame,
  metaYear,
  metaVersion,
  metaLocked,
  metaPrimary,
  metaSecondary,
}) => {
  const template = html`<!DOCTYPE html>
    <html lang="sv-SE">
      <head>
        <meta name="game" content="${metaGame}" />
        <meta name="year" content="${metaYear}" />
        <meta name="version" content="${metaVersion}" />
        <meta name="locked" content="${metaLocked}" />
        <meta name="primary" content="${metaPrimary}" />
        <meta name="secondary" content="${metaSecondary}" />
        <meta name="robots" content="noindex" />
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="../../../styles/styles.css" />
        <link
          rel="icon"
          type="image/x-icon"
          href="../../../images/favicon.jpg"
        />
        <script src="../../../library/animation.js" type="module"></script>
        <script src="../../../library/dialog.js" type="module"></script>
        <script src="../../../library/voting.js" type="module"></script>
        <script>
          window.replaceImage = function (img, src) {
            if (src) {
              img.src = src;
            } else {
              const replacement = document.createElement("div");
              replacement.className = "img error";
              img.replaceWith(replacement);
            }
          };
        </script>
        <title>${title}</title>
      </head>
      <body class="${themes?.join(" ")} program">
        <div class="background page-background"></div>
        ${content}
      </body>
    </html>`;
  return renderToString(template);
};
