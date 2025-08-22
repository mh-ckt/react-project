const custom = {
  singleQuote: true, // 是否使用单引号。
  quoteProps: 'as-needed', //属性名是否使用引号。
  trailingComma: 'none', // 对象或数组最后一个元素后是否加逗号"none"（不加逗号）"es5"（在ES5中有效的地方加逗号）或"all"（包括函数参数尾部的逗号）。
  bracketSpacing: true, //对象字面量的括号间是否加空格。
  semi: false, // 是否在语句末尾添加分号。
  tabWidth: 2, // 一个制表符等于的空格数。
  useTabs: false, // 是否使用制表符代替空格。
  printWidth: 120, // 单行代码的最大长度（字符个数，超过会折行）。
  arrowParens: 'avoid', //是否总是给箭头函数的参数加上括号。
  overrides: [
    {
      files: '.prettierrc',
      options: { parser: 'json' }
    }
  ]
}

module.exports = {
  ...custom
}
