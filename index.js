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
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      generators: true,
      experimentalObjectRestSpread: true
    }
  },

  plugins: ['prettier', 'promise', 'import', 'jsx-a11y'],

  extends: ['eslint:recommended', 'prettier'],

  rules: {
    // https://github.com/prettier/eslint-plugin-prettier
    'prettier/prettier': 'error',

    // https://github.com/evcohen/eslint-plugin-jsx-a11y/tree/master/docs/rules
    'jsx-a11y/href-no-hash': 'off',

    // https://github.com/xjamundx/eslint-plugin-promise#rules
    'promise/param-names': 'error',
    'promise/no-return-wrap': 'error',

    // https://github.com/benmosher/eslint-plugin-import/tree/master/docs/rules
    'import/no-webpack-loader-syntax': 'off',
    'import/no-unresolved': ['error', { ignore: ['svg-inline-loader'] }],
    'import/named': 'error',
    'import/default': 'error',
    'import/first': 'error',
    'import/order': ['error', { groups: ['builtin', 'external', ['parent', 'sibling', 'index']] }],
    'import/no-extraneous-dependencies': [
      'warn',
      { devDependencies: true, optionalDependencies: true, peerDependencies: false }
    ]
  }
};
