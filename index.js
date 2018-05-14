'use strict';

module.exports = {
  plugins: ['prettier', 'promise', 'import', 'jsx-a11y'],
  extends: ['eslint:recommended', 'prettier'],
  rules: {
    'prettier/prettier': 'error',
    'jsx-a11y/href-no-hash': 'off',
    'promise/param-names': 'error',
    'promise/no-return-wrap': 'error',
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
