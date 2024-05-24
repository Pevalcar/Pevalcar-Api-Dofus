// prettier.config.js, .prettierrc.js, prettier.config.mjs, or .prettierrc.mjs

/** @type {import("prettier").Config} */
const config = {
  plugins: ["prettier-plugin-astro", "prettier-plugin-tailwindcss"],
  trailingComma: "es5",
  tabWidth: 4,
  semi: false,
  singleQuote: true,
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
  ],
};

export default config;

// export default {
//   plugins: ['prettier-plugin-astro', 'prettier-plugin-tailwindcss'],
//   overrides: [
//     {
//       files: '*.astro',
//       options: {
//         parser: 'astro',
//       },
//     },
//   ],
// };
