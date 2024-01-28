import { html } from "@lit-labs/ssr";
import { renderToString } from "../../library/views.js";

export default async ({ title, themes, content }) => {
  const template = html`<!DOCTYPE html>
    <html lang="sv-SE">
      <head>
        <meta name="robots" content="noindex" />
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="../../../styles/styles.css" />
        <script src="../../../library/animation.js" type="module"></script>
        <title>${title}</title>
      </head>
      <body class="${themes?.join(" ")}">
        ${content}
      </body>
    </html>`;
  return renderToString(template);
};
