import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import globals from 'globals';

export default tseslint.config(
  {
    // Global ignores
    ignores: ['dist/', '.astro/'],
  },
  // Base configurations
  js.configs.recommended,
  ...tseslint.configs.recommended,

  // Configuration for TypeScript/Astro files
  {
    files: ['src/**/*.{ts,tsx,astro}'],
    languageOptions: {
      globals: {
        ...globals.browser,
      },
    },
  },

  // Configuration for Node.js files
  {
    files: ['astro.config.mjs', 'eslint.config.js'],
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
  }
);
