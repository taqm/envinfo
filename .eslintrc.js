module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'airbnb/base', // C向けサービスではないので意図的にjsx-a11yを外している
    'airbnb/rules/react',
    'airbnb/hooks',
    'plugin:@typescript-eslint/recommended',
  ],
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  settings: {
    'import/resolver': 'webpack',
  },
  rules: {
    'import/extensions': ['error', 'ignorePackages', { ts: 'never', tsx: 'never' }],
    'import/no-extraneous-dependencies': [
      'error',
      { devDependencies: ['**/*.test.ts?(x)', '**/*.stories.tsx'] },
    ],
    'react/jsx-filename-extension': ['error', { extensions: ['.tsx'] }],

    // https://github.com/typescript-eslint/typescript-eslint/issues/2540
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['error'],
  },
};
