module.exports = {
  extends: ['airbnb'],
  plugins: ['unused-imports'],
  // typescript file rules
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      extends: ['airbnb-typescript', 'airbnb/hooks'],
      rules: {
        '@typescript-eslint/no-unused-vars': ['warn'],
        '@typescript-eslint/no-shadow': ['warn'],
      },
    },
    {
      files: ['*'],
      extends: ['prettier'],
    },
  ],
  // global rules
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
