import { fileURLToPath, URL } from 'url';

import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    svgr(),
    tsconfigPaths({
      root: process.cwd(),
    }),
  ],

  resolve: {
    alias: [
      {
        find: /^@\/(.*)/,
        replacement: fileURLToPath(new URL('./src/$1', import.meta.url)),
      },
      {
        find: /^@aspire\/ui\/internal\/(.*)/,
        replacement: fileURLToPath(
          new URL('../../packages/aspire-ui/src/$1', import.meta.url)
        ),
      },
      {
        find: /^@aspire\/shared\/internal\/(.*)/,
        replacement: fileURLToPath(
          new URL('../../packages/aspire-shared/src/$1', import.meta.url)
        ),
      },
      {
        find: '@aspire/ui',
        replacement: fileURLToPath(
          new URL('../../packages/aspire-ui/src', import.meta.url)
        ),
      },

      {
        find: '@aspire/shared',
        replacement: fileURLToPath(
          new URL('../../packages/aspire-shared/src', import.meta.url)
        ),
      },
    ],
  },
});
