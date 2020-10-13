// https://github.com/typescript-eslint/typescript-eslint/blob/master/docs/getting-started/linting/README.md
module.exports = {
  env: {
    browser: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'prettier/@typescript-eslint',
  ],
  parser: '@typescript-eslint/parser',
  // https://eslint.org/docs/user-guide/configuring#specifying-parser-options
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/parser/README.md
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12, // 12 = 2021
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'prettier', 'react-hooks'],
  rules: {
    // disable the rule for all files
    // vscode might pop-up a notification: There are multiple formatter for 'Javascript' files. I selected Prettier as default.
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'react/prop-types': 'off',

    // react hook rules
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',
  },
  /*
  // there is the option to apply to specific files only. 
  overrides: [
    {
      // enable the rule specifically for TypeScript files
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/explicit-function-return-type': ['off'],
      },
    },
  ],
  */
  settings: {
    react: {
      pragma: 'React',
      version: 'detect',
    },
  },
};
