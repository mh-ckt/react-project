const CracoLessPlugin = require("craco-less");
const path = require("path");
const CracoCSSModules = require("craco-css-modules");

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { "primary-color": "#1DA57A" },
            javascriptEnabled: true,
            module: true,
          },
        },
      },
    },
    { plugin: CracoCSSModules },
  ],
  devServer: {
    port: 9999,
    hot: true,
    client: {
      overlay: false,
    },
    // 配置代理解决跨域
    // proxy: {
    //   '/': {
    //     target: process.env.REACT_APP_URL, // https://xxx.com
    //     changeOrigin: true,
    //     pathRewrite: {
    //       '^/': ''
    //     }
    //   }
    // }
  },
  webpack: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
    configure: (webpackConfig) => {
      webpackConfig.module.rules.forEach((rule) => {
        if (
          rule.enforce === "pre" &&
          (rule.use?.some?.((use) => use.loader?.includes("source-map-loader")) ||
            rule.loader?.includes("source-map-loader"))
        ) {
          // 确保 exclude 是数组
          if (!rule.exclude) {
            rule.exclude = [];
          } else if (!Array.isArray(rule.exclude)) {
            rule.exclude = [rule.exclude]; // 如果是正则表达式，转为数组
          }
          rule.exclude.push(/@antv/);  // 排除所有 AntV 相关包
        }
      });
      return webpackConfig;
    },
  },
};