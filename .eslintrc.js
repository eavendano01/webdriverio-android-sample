module.exports = {
  root: true,
  env: {
    node: true,
    es2020: true,
    mocha: true,
  },
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'prettier'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  rules: {
    'no-unused-vars': 'warn',
    'no-console': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
  },
};
