#!/usr/bin/env pnpm exec tsx

import ghPages from 'gh-pages';
import { resolve } from 'node:path';

const distPath = resolve(import.meta.dirname, '../storybook-static');

await ghPages.publish(distPath, {
  dotfiles: false,
  push: true,
  history: false,
  message: 'Publish build to GitHub Pages',
  remove: '**/{,.*}/**/{,.}*',
});

console.log('Storybook static artifacts committed and force pushed to gh-pages branch');
