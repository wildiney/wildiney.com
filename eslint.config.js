import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import astro from 'eslint-plugin-astro';
import globals from 'globals';

export default tseslint.config(
  {
    // Global ignores
    ignores: ['dist/', '.astro/'],
  },
  // Base configurations
  js.configs.recommended,
  ...tseslint.configs.recommended,
  ...astro.configs.recommended,

  // Astro frontmatter is TypeScript; wire the parser explicitly so it
  // resolves the same way for every ESLint entry point (CLI, IDE, API).
  {
    files: ['**/*.astro'],
    languageOptions: {
      parserOptions: {
        parser: tseslint.parser,
        extraFileExtensions: ['.astro'],
      },
    },
  },

  // Inline <script> blocks extracted from .astro files: vendor snippets
  // (GTM/Clarity) use var/arguments as shipped by Google/Microsoft.
  {
    files: ['**/*.astro/*.js', '**/*.astro/*.ts'],
    rules: {
      'no-var': 'off',
      'prefer-rest-params': 'off',
    },
  },

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
