import { fileURLToPath, URL } from 'url';

import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    svgr({
      include: '**/*.svg',
    }),
    tsconfigPaths(),
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
        find: '@aspire/ui',
        replacement: fileURLToPath(
          new URL('../../packages/aspire-ui/src', import.meta.url)
        ),
      },
    ],
  },

  build: {
    rollupOptions: {
      onwarn(warning, warn) {
        if (
          warning.code &&
          ['MODULE_LEVEL_DIRECTIVE', 'SOURCEMAP_ERROR'].includes(warning.code)
        ) {
          return;
        }
        warn(warning);
      },
    },
    sourcemap: true,
  },
});
