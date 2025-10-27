import { defineConfig, globalIgnores } from 'eslint/config'

// Minimal ESLint config to avoid plugin resolution issues in some environments.
// If you prefer the full config, we can reintroduce plugin configs once ESLint loads cleanly.
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
      ecmaFeatures: { jsx: true },
    },
    env: { browser: true, es2021: true },
    plugins: ['@typescript-eslint', 'react', 'react-hooks', 'react-refresh'],
    extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
    settings: { react: { version: 'detect' } },
  },
])
