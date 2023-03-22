module.exports = {
  extends: ['airbnb-base'],
  rules: {
    'linebreak-style': 0,
    'no-console': 'off',
    'operator-linebreak': 'off',
    'consistent-return': 'off',
    'nonblock-statement-body-position': 'off',
    'import/no-extraneous-dependencies': 'off',
    curly: 'off',
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
