# Template: Obsidian Plugins with Svelte 5

This is a template for building Obsidian plugins with Svelte 5. It's mostly the defualt Vite svelte-ts configuration with some additional settings to make it work with Obsidian.

This is the first version, so I'm sure I'll find things that need to be changed.

## Notes
- `@types` is aliased to `src/types` to make it easier to import types across the project.
- Make sure to adjust your `manifest.json` file with the correct `id`, `name`, `version`, and `minAppVersion` values.