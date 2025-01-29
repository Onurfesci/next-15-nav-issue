import baseConfig from './base.js';

import eslintPluginReact from 'eslint-plugin-react';
import pluginReactHooks from 'eslint-plugin-react-hooks';
import eslintPluginJsxA11y from 'eslint-plugin-jsx-a11y';
import eslintPluginStorybook from 'eslint-plugin-storybook';

export default [
  ...baseConfig,
  eslintPluginReact.configs.flat.recommended,
  eslintPluginJsxA11y.flatConfigs.recommended,
  ...eslintPluginStorybook.configs['flat/recommended'],
  // eslint-plugin-react-hooks
  {
    plugins: {
      'react-hooks': pluginReactHooks,
    },
    settings: { react: { version: 'detect' } },
    rules: {
      ...pluginReactHooks.configs.recommended.rules,
      'react-hooks/exhaustive-deps': 'off',
    },
  },
  {
    rules: {
      'react/react-in-jsx-scope': 'off',
      'jsx-a11y/no-autofocus': 'off',
      'react-hooks/exhaustive-deps': 'off',
    },
  },
  {
    ignores: [
      'node_modules/',
      'dist/',
      '/out',
      'storybook-static/',
      '.eslintrc.js',
    ],
  },
];
