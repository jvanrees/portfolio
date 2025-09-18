<div align="center">
  <img src="src/img/logo_row.svg" alt="Jeff Van Rees Logo" width="400">
</div>

# Jeff Van Rees - Portfolio

This is my personal portfolio website, showcasing my work in web development, mapping, and data visualization.

## About This Project

This portfolio is an updated version of my original 2018 portfolio, rebuilt using modern web technologies and components:

- **Framework**: React 19 with TypeScript
- **Build Tool**: Rsbuild
- **Routing**: TanStack Router
- **UI Components**: Mantine
- **Maps**: MapLibre GL JS with Mapbox/MapTiler integration



## Setup

Install the dependencies:

```bash
pnpm install
```

## Development

Start the dev server:

```bash
pnpm dev
```

## Build

Build the app for production:

```bash
pnpm build
```

## Preview

Preview the production build locally:

```bash
pnpm preview
```

## Deployment

The site is automatically deployed to GitHub Pages on pushes to the main branch.

**Live Site**: [portfolio.jvanrees.com](https://portfolio.jvanrees.com)

## Environment Variables

Create a `.env` file with your API keys:

```env
PUBLIC_MAPTILER_API_KEY=your_maptiler_key
PUBLIC_MAPBOX_API_KEY=your_mapbox_key
```

