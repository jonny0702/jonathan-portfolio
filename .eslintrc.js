const rules = { off: 'off', on: 'on', warn: 'warn' };

module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'prettier',
    'next',
    'next/core-web-vitals',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'react/jsx-filename-extension': rules.off,
    'react/jsx-props-no-spreading': rules.off,
    'import/order': rules.off,
    'jsx-a11y/anchor-is-valid': rules.off,
    'import/no-extraneous-dependencies': rules.off,
    'import/prefer-default-export': rules.off,
    'react/function-component-definition': rules.off,
    'react/destructuring-assignment': rules.off,
    'no-unused-expressions': rules.off,
    'jsx-a11y/label-has-associated-control': rules.off,
    'no-shadow': rules.warn,
    'no-console': rules.off,
    'no-use-before-define': rules.off,
    'consistent-return': rules.off,
    'no-nested-ternary': rules.warn,
    'react-hooks/exhaustive-deps': rules.off,
    'react/jsx-no-useless-fragment': rules.off,
    'no-unused-vars': rules.warn,
    'global-require': rules.off,
    'import/extensions': rules.off,
    'jsx-a11y/mouse-events-have-key-events': rules.off,
  },
};
