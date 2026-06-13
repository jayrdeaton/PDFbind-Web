const { defineConfig } = require('eslint/config')
const prettierRecommended = require('eslint-plugin-prettier/recommended')
const simpleImportSort = require('eslint-plugin-simple-import-sort')
const tsParser = require('@typescript-eslint/parser')
const tsEslint = require('typescript-eslint')
const vueParser = require('vue-eslint-parser')
const pluginVue = require('eslint-plugin-vue')

module.exports = defineConfig([
  {
    ignores: ['.nuxt/**', '.output/**', 'node_modules/**', 'coverage/**', '**/*.mjs', '**/*.cjs']
  },
  {
    files: ['**/*.ts'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        projectService: { allowDefaultProject: ['vitest.config.ts'] },
        extraFileExtensions: ['.vue']
      }
    }
  },
  {
    files: ['**/*.vue'],
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        parser: tsParser,
        projectService: { allowDefaultProject: ['vitest.config.ts'] },
        extraFileExtensions: ['.vue']
      }
    }
  },
  ...tsEslint.configs.recommended,
  ...pluginVue.configs['flat/recommended'],
  prettierRecommended,
  {
    plugins: {
      'simple-import-sort': simpleImportSort
    },
    rules: {
      'prettier/prettier': 'warn',
      'simple-import-sort/imports': 'warn',
      'simple-import-sort/exports': 'warn',
      'no-console': 'warn',
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      '@typescript-eslint/no-require-imports': 'off'
    }
  }
])
