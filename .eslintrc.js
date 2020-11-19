/*
 * @Date: 2020-11-19 15:58:08
 * @LastEditors: lujunpeng
 * @LastEditTime: 2020-11-19 15:59:58
 * @FilePath: /public-security-template/Users/lujunpeng/Documents/Code/7b/data-system/.eslintrc.js
 */
module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ['plugin:vue/vue3-essential', 'eslint:recommended', '@vue/prettier'],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    quotes: [2, 'single'],
    semi: [2, 'never']
  }
}
