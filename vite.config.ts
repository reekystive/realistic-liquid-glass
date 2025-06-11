/// <reference types="vitest/config" />

import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import packageJson from './package.json' with { type: 'json' };

const entries: Record<string, string> = {
  index: './src/index.ts',
};

const externalDeps = [...Object.keys(packageJson.dependencies), ...Object.keys(packageJson.peerDependencies)];
export const regexOfExternalDeps = externalDeps.map((dep) => new RegExp(`^${dep}(?:$|/)`));

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: entries,
      formats: ['es'],
      cssFileName: 'styles',
    },
    rollupOptions: {
      output: {
        preserveModules: true,
        sourcemap: true,
      },
      external: regexOfExternalDeps,
    },
  },
  plugins: [react(), tailwindcss(), tsconfigPaths()],
  test: {},
});
