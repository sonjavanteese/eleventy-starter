const isDev = process.env.NODE_ENV !== 'production'
const purge = {
  content: ['pages/**/*.njk', 'scripts/**/*.js', 'scripts/**/*.svelte'],
  extractors: [
    {
      extractor: value => value.match(/[A-z0-9-:%/]+/g) || [],
      extensions: ['js', 'njk', 'svelte'],
    },
  ],
}

module.exports = {
  plugins: [
    require('postcss-import'),
    require('tailwindcss')('./tailwind.config.js'),
    require('autoprefixer'),
    ...(isDev
      ? []
      : [require('@fullhuman/postcss-purgecss')(purge), require('cssnano')]),
  ],
}
