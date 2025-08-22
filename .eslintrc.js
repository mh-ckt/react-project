module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module'
  },
  env: {
    browser: true,
    es2021: true
  },
  rules: {
    'import/prefer-default-export': 'off'
  }
}
