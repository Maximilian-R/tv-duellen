import slugify from "@sindresorhus/slugify";
import { createGame } from "../library/views.js";

export default {
  data: {
    tags: "program",
    layout: "default.11ty.js",
    pagination: {
      data: "programs",
      size: 1,
      alias: "game",
      addAllPagesToCollections: true,
    },
    permalink: ({ game }) =>
      `program/${slugify(game.meta.name)}/${game.meta.year}${
        game.meta.version ? "-" + game.meta.version : ""
      }/index.html`,
    eleventyComputed: {
      title: ({ game }) =>
        `${game.meta.short ?? game.meta.name} ${game.meta.year}${
          game.meta.version ? "-" + game.meta.version : ""
        }`,
      themes: ({ game }) => game.theme,
    },
  },
  render: (data) => {
    return createGame(data.game);
  },
};
