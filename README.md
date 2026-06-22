# AI Renaissance 26

A small static website about how a country might build AI it actually owns: its own
chips, compute, models, and the capital to pool behind them. It has two pages plus an
interactive simulation, and it is published with GitHub Pages at
https://www.artificialnouveau.com/airenaissance26/

There is no build step and no framework. Everything is plain HTML, CSS, and JavaScript,
so you can edit a file, reload the browser, and see the change.

## Pages

- **Story** (`index.html`) walks through the scenario in five stages, with data cards that
  stack as you scroll and a one-page printable summary.
- **Players** (`players.html`) ranks real leaders, CEOs, and financiers by how likely they
  are to join a shared training consortium, shows each as a card with sources and clips,
  and includes the "Move the Table" simulation.

## Folder structure

The pages used to be two large single files. They are now split so contributors can work
on one element at a time without touching the rest.

```
airenaissance26/
  index.html          Story page: markup and copy only
  players.html        Players page: markup only
  css/
    story.css         Story page styles
    players.css       Players page styles
  js/
    story.js          Story behavior: dock card stacking, equal heights, print summary
    players-data.js   The cast data: personas, categories, ordering, photos, sources
    players.js        Players rendering: spectrum rail, cards, detail modal, filters
    simulation.js     The "Move the Table" simulation: personas, arguments, scoring
  og-image.png        Social share image (referenced in meta tags)
  .nojekyll           Tells GitHub Pages to serve files as-is
  README.md           This file
```

Fonts load from Google Fonts over the network, so the pages need an internet connection
to look right.

## Run it locally

The pages load their CSS and JS from the `css/` and `js/` folders using relative paths.
Opening `index.html` straight from the file system can block those from loading in some
browsers, so serve the folder over HTTP instead:

```
cd airenaissance26
python3 -m http.server 8000
```

Then open http://localhost:8000/ in your browser. Edit any file and refresh to see changes.

Any static server works. If you have Node installed, `npx serve` does the same thing.

## Where to make changes

- **A persona's bio, quote, photo, or sources** (Players page): edit the `PEOPLE` array in
  `js/players-data.js`. Photos live in the `PHOTOS` map, AI-sovereignty notes in `SOV`,
  involvement notes in `ORG`, and short tags in `TAGS`, all keyed by the persona `id`.
- **The spectrum order or the All / Corporate / Political / Finance groups**: edit
  `CATS` and `ORDER_BY_CAT` in `js/players-data.js`.
- **The simulation** (who appears, the arguments, how much each argument moves a player):
  edit the `P` (personas), `A` (arguments), and `G` (argument groups) arrays in
  `js/simulation.js`. Each argument's `d` map is the pull or push it applies per persona.
- **Look and feel**: edit `css/story.css` or `css/players.css`. Shared colors and fonts are
  defined as CSS variables in the `:root` block at the top of each file.
- **The story copy and stages**: edit the prose directly in `index.html`.
- **Rendering or interaction logic**: `js/players.js` (cast page) and `js/story.js` (story).

### One ordering rule

On the Players page, `players-data.js` must load before `players.js`, because the data file
defines the values (`PEOPLE`, `CATS`, `PHOTOS`, and so on) that the rendering file uses.
The script tags at the bottom of `players.html` are already in that order; keep it that way.

## Deploying

Pushing to the `main` branch publishes the site automatically through GitHub Pages. There
is nothing to compile. Keep new assets inside this folder and reference them with relative
paths so they resolve both locally and on the live site.
