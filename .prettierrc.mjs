/** @type {import('prettier').Config} */
export default {
  semi: true,
  printWidth: 120,
  trailingComma: 'es5',
  singleQuote: true,
  jsxSingleQuote: false,
  tabWidth: 2,
  plugins: ['prettier-plugin-organize-imports', 'prettier-plugin-tailwindcss'],
  organizeImportsSkipDestructiveCodeActions: true,
  overrides: [
    {
      files: 'tsconfig{,.*}.json',
      options: { parser: 'jsonc', trailingComma: 'none' },
    },
  ],
};
