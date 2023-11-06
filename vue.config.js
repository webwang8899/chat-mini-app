// const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
//   transpileDependencies: true,
// })

module.exports = {
  lintOnSave: false,
  publicPath: './',// process.env.VUE_APP_BASE_API === 'production' ? './' : '/'

  devServer: {
    // open: true,
    proxy: {
      // detail: https://cli.vuejs.org/config/#devserver-proxy
      // 设置跨域代理
      '/api': {
        // target: 'http://10.52.12.26:8000',  //来原
        // target: 'http://10.52.12.23:8000',  //刘凡
        // target: 'http://10.52.12.52:8000',  //  相特
        target: 'http://10.52.12.240:7000',// 测试
        // target: 'http://10.52.12.15:8000', //白
        // target: 'http://10.52.12.47:8000',  //  宇航
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    },
    // https: true
  },

  css: {
    loaderOptions: {
      less: {
        // 若 less-loader 版本小于 6.0，请移除 lessOptions 这一级，直接配置选项。
        lessOptions: {
          modifyVars: {
            // 直接覆盖变量
            blue: '#359DFA',
            // 或者可以通过 less 文件覆盖（文件路径为绝对路径）
            // hack: `true; @import "your-less-file-path.less";`,
          },
        },
      },
    },
  },
}