module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'plugin:@typescript-eslint/recommended',
    'airbnb-base',
    'react-app',
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    ecmaVersion: '11',
    sourceType: 'module',
  },
  rules: {
    indent: 'off',
    '@typescript-eslint/indent': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    'no-dupe-class-members': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/prefer-default-export': 'off',
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.ts', '.js', '.tsx', '.jsx'],
      },
    },
  },
  env: {
    jest: true,
  },
};
