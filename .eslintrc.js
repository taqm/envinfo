module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'airbnb/base', // C向けサービスではないので意図的にjsx-a11yを外している
    'airbnb/rules/react',
    'airbnb/hooks',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'prettier/@typescript-eslint',
    'prettier/react',
  ],
  plugins: ['react', '@typescript-eslint'],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'],
        webpack: '',
      },
    },
  },
  rules: {
    'sort-imports': [
      'error',
      { ignoreCase: true, ignoreDeclarationSort: true },
    ],
    'import/order': [
      'error',
      {
        alphabetize: { order: 'asc', caseInsensitive: true },
        groups: [
          'builtin',
          'external',
          'internal',
          ['parent', 'sibling'],
          'index',
        ],
        'newlines-between': 'always',
      },
    ],
    'import/extensions': [
      'error',
      'ignorePackages',
      { ts: 'never', tsx: 'never' },
    ],
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          '**/*.test.ts?(x)',
          '**/*.stories.tsx',
          'webpack.config.js',
        ],
      },
    ],
    'react/jsx-filename-extension': ['error', { extensions: ['.tsx'] }],

    // https://github.com/typescript-eslint/typescript-eslint/issues/2540
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['error'],
    'react/prop-types': 'off',
  },
};
