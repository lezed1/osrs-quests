# Old School RuneScape Quests

OSRS Quests is a website that provides information on OSRS quests. This information is scraped from the OSRS Wiki and links back to the wiki.

[![Netlify Status](https://api.netlify.com/api/v1/badges/e64c45b5-f543-47e7-9757-71e98ad92b4e/deploy-status)](https://app.netlify.com/sites/osrs-quests/deploys)

## Usage

### Getting started

To set up this project, clone this repository and run:

```bash
yarn install
```

### Development

While developing the website, use:

```bash
yarn run dev
```

This will serve the site locally on port 3000. You can visit http://localhost:3000/ to preview the website. The Next.js development server will automatically reload the CSS or refresh the whole page, when stylesheets or content changes.

#### Styling with Prettier

Along side the development server, run:

```bash
yarn run prettier-watch
```

This will use Prettier to style any files that have changed.

### Static build

To build a static version of the website inside the `/out` folder, run:

```bash
yarn run build
```
