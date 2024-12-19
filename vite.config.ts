import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import { pathToFileURL } from 'url';
import { builtinModules } from 'module';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

// Get __dirname in ESM context
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig(({ mode }) => ({
  plugins: [svelte()],
  build: {
    lib: {
      entry: "src/main",
      formats: ["cjs"],
    },
    rollupOptions: {
      output: {
        entryFileNames: "main.js",
        assetFileNames: "styles.css",
        sourcemapBaseUrl: pathToFileURL(
          `${__dirname}/test-vault/.obsidian/plugins/obsidian-svelte-plugin/`,
        ).toString(),
      },
      external: [
        "obsidian",
        "electron",
        "@codemirror/autocomplete",
        "@codemirror/collab",
        "@codemirror/commands",
        "@codemirror/language",
        "@codemirror/lint",
        "@codemirror/search",
        "@codemirror/state",
        "@codemirror/view",
        "@lezer/common",
        "@lezer/highlight",
        "@lezer/lr",
        ...builtinModules,
      ],
    },
    outDir: mode === 'production' ? 'dist' : './dev-vault/.obsidian/plugins/obsidian-plugin',
  },
}));
