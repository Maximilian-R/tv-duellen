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
      `program/${slugify(game.meta.name, {
        customReplacements: [
          ["ö", "o"],
          ["ä", "a"],
          ["å", "a"],
        ],
      })}/${game.meta.year}${
        game.meta.versionPath ? "-" + game.meta.versionPath : ""
      }/index.html`,
    eleventyComputed: {
      title: ({ game }) =>
        `${game.meta.short ?? game.meta.name} ${game.meta.year}${
          game.meta.versionPath ? " " + game.meta.versionTitle : ""
        }`,
      themes: ({ game }) => game.theme,
      metaGame: ({ game }) => {
        return game.meta.name;
      },
      metaYear: ({ game }) => {
        return game.meta.year;
      },
      metaVersion: ({ game }) => {
        return game.meta.version;
      },
      metaLocked: ({ game }) => {
        return game.locked;
      },
      metaPrimary: ({ game }) => {
        return game.meta.primaryVotes;
      },
      metaSecondary: ({ game }) => {
        return game.meta.secondaryVotes;
      },
    },
  },
  render: (data) => {
    return createGame(data.game);
  },
};
