module.exports = {
  extends: ['airbnb-base'],
  rules: {
    'linebreak-style': 0,
    'no-console': 'off',
    'no-plusplus': 'off',
  },
  // node: true,
  parseOptions: {
    ecmaVersion: 'latest',
  },
  env: {
    es6: true,
  },
  treatUndefinedAsUnspecified: true,
};
