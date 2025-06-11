/// <reference types="vitest/config" />

import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react-swc';
import dts from 'unplugin-dts/vite';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import packageJson from './package.json' with { type: 'json' };
import { bannerContent } from './scripts/banner.mjs';

const entries: Record<string, string> = {
  index: './src/index.ts',
  'liquid-glass': './src/liquid-glass/index.ts',
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
        banner: bannerContent,
      },
      external: regexOfExternalDeps,
    },
    sourcemap: true,
    emptyOutDir: true,
  },
  plugins: [
    react(),
    tailwindcss(),
    tsconfigPaths(),
    dts({
      bundleTypes: true,
      outDirs: ['dist'],
      tsconfigPath: 'tsconfig.web.json',
    }),
  ],
  test: {},
});
