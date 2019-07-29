'use strict';

module.exports = {
  parser: 'babel-eslint',

  env: {
    browser: true,
    commonjs: true,
    es6: true,
    jest: true,
    node: true
  },

  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      experimentalObjectRestSpread: true
    }
  },

  plugins: ['standard'],

  extends: ['eslint:recommended', 'standard', 'plugin:prettier/recommended'],

  rules: {
    'no-console': 'error',
    eqeqeq: ['warn', 'always', { null: 'ignore' }],

    'promise/no-return-wrap': 'error',

    // https://github.com/benmosher/eslint-plugin-import/tree/master/docs/rules
    'import/no-webpack-loader-syntax': 'off',
    'import/no-unresolved': ['error', { ignore: ['svg-inline-loader'] }],
    'import/named': 'error',
    'import/default': 'error',
    'import/order': ['error', { groups: ['builtin', 'external', ['parent', 'sibling', 'index']] }],
    'import/no-extraneous-dependencies': [
      'warn',
      { devDependencies: true, optionalDependencies: true, peerDependencies: false }
    ]
  }
};
