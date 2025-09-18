import { defineConfig } from '@rsbuild/core';
import { pluginCssMinimizer } from '@rsbuild/plugin-css-minimizer';
import { pluginReact } from '@rsbuild/plugin-react';
import { TanStackRouterRspack } from '@tanstack/router-plugin/rspack';


export default defineConfig({
  plugins: [pluginReact(), pluginCssMinimizer()],
  html: {
    title: "Jeff Van Rees",
    favicon: './favicon.ico',
  },
  output: {
    assetPrefix: '/',
  },
  source: {
    assetsInclude: [
      /\.geojson$/,
      /\.html$/,
    ]
  },
  tools: {
    rspack: {
      plugins: [
        TanStackRouterRspack({ target: 'react', autoCodeSplitting: true }),
      ],
    },
  },
})