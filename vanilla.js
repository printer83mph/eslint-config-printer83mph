// base eslint config for non-typescript projects (ew)
module.exports = {
  root: true,
  extends: ['airbnb', 'prettier'],
  plugins: ['unused-imports'],
  rules: {
    'react/require-default-props': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/function-component-definition': [
      'error',
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],

    'import/prefer-default-export': 'off',
    'import/no-absolute-path': 'off',
    'unused-imports/no-unused-imports': 'error',

    'import/order': [
      'error',
      {
        'newlines-between': 'always',
      },
    ],
  },
}
