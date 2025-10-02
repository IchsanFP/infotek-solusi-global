import { dirname } from "path"
import { fileURLToPath } from "url"
import { FlatCompat } from "@eslint/eslintrc"
import js from '@eslint/js'
import tseslint from 'typescript-eslint'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname,
})

const eslintConfig = [
  js.configs.recommended,
  ...tseslint.configs.recommended,
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      '@typescript-eslint/indent': [
        'error',
        2,
        {
          ignoredNodes: [
            'TemplateLiteral',
            'PropertyDefinition',
            'FunctionExpression[params]:has(Identifier[decorators])',
            'ClassDeclaration',
          ],
          SwitchCase: 1,
        },
      ],
      '@typescript-eslint/no-namespace': ['error', { allowDeclarations: true }],
      'linebreak-style': ['error', 'unix'],
      'jsx-quotes': ['error', 'prefer-single'],
      quotes: ['error', 'single', { allowTemplateLiterals: true }],
      '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
      'no-var': 'error',
      'no-useless-escape': 'off',
      'valid-typeof': 'error',
      semi: ['error', 'always'],

      // matikan indent bawaan eslint, pakai versi TS
      indent: 'off',
    },
  },
]

export default eslintConfig
