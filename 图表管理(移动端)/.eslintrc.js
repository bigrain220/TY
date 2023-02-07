module.exports = {
  // 不向上层目录查找 eslint 配置文件
  root: true,
  env: {
    browser: true,
    commonjs: true,
    node: true,
    es6: true,
    amd: true
  },
  parserOptions: {
    parser: '@babel/eslint-parser',
    sourceType: 'module',
    ecmaVersion: 6,
    ecmaFeatures: {
      // 启用 JSX
      jsx: true
      // 允许在全局作用域下使用 return 语句
      // globalReturn: true,
      // 启用全局 strict mode
      // impliedStrict: true
    }
  },
  // 插件名称 eslint-plugin-html eslint-plugin-vue
  plugins: [
    'html',
    'vue'
  ],
  // 全局规则申明
  globals: {
    Vue: true,
    echarts: true
  },
  // 继承配置文件
  extends: [
    'standard',
    'plugin:vue/essential'
    // 'eslint:recommended',
    // 'plugin:vue/recommended'
  ],
  //
  // 规则
  rules: {
    quotes: [2, 'single'],
    indent: [2, 2],
    camelcase: 0,
    'new-cap': 0,
    'no-new': 0,
    'no-unused-vars': 0,
    'no-useless-escape': 0,
    'prefer-const': 0,
    'no-duplicate-case': 0,
    'space-before-function-paren': 0,
    'no-unused-expressions': 0,
    'array-callback-return': 0,
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'node/no-callback-literal': 0,
    'vue/no-mutating-props': 0,
    'import/no-named-as-default': 0
  }
}
