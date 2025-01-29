import { defineConfig } from 'cypress';

import { defaultConfig } from './src/config';

export default defineConfig({
  projectId: '5byk7m',

  env: {
    NEXT_PUBLIC_API_URL: defaultConfig.apiUrl,
  },

  requestTimeout: 20000,
  defaultCommandTimeout: 20000,

  viewportWidth: 1600,
  viewportHeight: 900,

  component: {
    devServer: {
      framework: 'next',
      bundler: 'webpack',
      webpackConfig: {
        resolve: {
          fallback: {
            fs: false,
          },
        },
      },
    },
  },

  e2e: {
    baseUrl: 'http://localhost:3000',
    // setupNodeEvents(on, config) {
    // implement node event listeners here
    // },
  },
});
