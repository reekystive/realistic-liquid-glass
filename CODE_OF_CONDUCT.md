# Code of Conduct

## Tech Stack

This project uses the following tech stack:

- typescript 5.8
- tailwindcss 4
- pnpm 10.5.2
- eslint 9
- cspell
- vite 6.3.3
- vitest 3.1.2

## TypeScript

This project uses the following TypeScript strict configurations:

- `strict: true`
- `useUnknownInCatchVariables: true`
- `noUncheckedIndexedAccess: true`

- Ensure code type safety, avoid using `any` and `as`, use `unknown` and `never` instead when needed

## React Components

- All React components must use `FC` type annotation
- Avoid using default export, use named export instead if not necessary

```tsx
import { FC } from 'react';

export const Component: FC<Props> = ({ prop }) => {
  return <div>{prop}</div>;
};
```

## Import

- Use `#src/` alias to import project internal modules. It's defined in package.json imports field.
- Use `import type` syntax to import types

```tsx
import type { ButtonProps } from '#src/components/ui/button';
import { cn } from '#src/utils/component';
```

When importing files, use the shortest path, do not use `/index` or `/index.ts` suffix, corresponding to VSCode configuration

```json
{
  "typescript.preferences.importModuleSpecifierEnding": "minimal"
}
```

## Tests

This project uses Vitest for testing. You can run `pnpm test` to run all tests, or `pnpm test:watch` to run tests in watch mode.

Always write tests for important components and functions. Put tests in the `__tests__` directory corresponding to the implementation file.

### CSpell Spell Check

If you encounter CSpell warnings, you can add specific terms to the `cspell.config.yaml` file in the project root

```yaml
words:
  - apple
```

## Git Commit Message

The commit message should clearly describe the changes, and be written in English. Except for professional terms, the first letter of the sentence does not need to be capitalized.

```plaintext
feat: ✨ add new feature
chore: 📦 update dependencies
fix: 🐛 something is not working
```

## CSS and Styling

### Tailwind CSS Prefix

This project uses `rlg:` prefix for all Tailwind CSS classes to prevent style pollution in consumer projects:

```tsx
// ✅ Correct - use rlg: prefix
<div className="rlg:flex rlg:items-center rlg:px-4">

// ❌ Wrong - no prefix
<div className="flex items-center px-4">
```

The prefix is configured in Tailwind CSS configuration to ensure all utility classes are prefixed.

## Guidelines

- Ensure compatibility with Android, iOS, Windows, macOS, Linux, etc.
- Ensure compatibility with Chrome, Safari, Firefox, etc.
- Ensure compliance with WCAG, A11y, etc.
- Do not overly consider compatibility issues with old browsers

## File Naming

Use kebab-case to name files, for example `responsive-tabs.tsx`.

## Comments

Comments are written in English. DO NOT write too many comments, prefer to write code that is self-explanatory.

## Language

- **IMPORTANT**: Always use English for ALL code, comments, documentation, memories, commit messages, and any written content in this project.
- Only use other languages for conversational communication with users.
- All technical documentation should be in English to maintain consistency and accessibility.
