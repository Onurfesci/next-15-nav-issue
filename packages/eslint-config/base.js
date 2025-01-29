import globals from 'globals';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import mochaPlugin from 'eslint-plugin-mocha';
import turboPlugin from 'eslint-plugin-turbo';
import importPlugin from 'eslint-plugin-import';

export default [
  eslint.configs.recommended,
  mochaPlugin.configs.flat.recommended,
  importPlugin.flatConfigs.recommended,
  eslintPluginPrettierRecommended,
  ...tseslint.configs.recommended,
  {
    plugins: {
      turbo: turboPlugin,
    },
  },
  {
    settings: {
      'import/resolver': {
        typescript: true,
        node: true,
      },
    },
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
    rules: {
      'import/order': [
        'error',
        {
          alphabetize: { order: 'asc' },
          groups: [
            'builtin',
            'external',
            'internal',
            'parent',
            ['index', 'sibling'],
            'object',
          ],
          pathGroups: [
            {
              pattern: '@/**',
              group: 'internal',
            },
            {
              pattern: '@cypress/**',
              group: 'internal',
            },
            {
              pattern: '@aspire/**',
              group: 'internal',
            },
          ],
          'newlines-between': 'always',
        },
      ],
      'no-duplicate-imports': 'error',
      'react-hooks/exhaustive-deps': 'off',
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/ban-ts-comment': 'warn',
      '@typescript-eslint/no-non-null-assertion': 'off',
      '@typescript-eslint/no-empty-object-type': 'off',
      'import/no-default-export': 'off',
      'object-curly-spacing': ['error', 'always'],
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          ignoreRestSiblings: true,
        },
      ],
      'mocha/no-exclusive-tests': 'error',
      'mocha/max-top-level-suites': 'off',
      'import/named': 'off',
      'sort-imports': [
        'error',
        {
          ignoreCase: true,
          ignoreDeclarationSort: true,
          ignoreMemberSort: false,
          memberSyntaxSortOrder: ['none', 'all', 'single', 'multiple'],
          allowSeparatedGroups: true,
        },
      ],
    },
  },
  {
    ignores: [
      '**/*.config.*js',
      '**/sw.js',
      '**/*worker*.js',
      'jest-coverage/',
      '.turbo/',
      '.swc/',
      '.nyc_output/',
    ],
  },
];
