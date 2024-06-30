const path = require('path');

module.exports = {
  transpileDependencies: true,
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
          @import "@/assets/styles/raw/utils/_var.scss";
          @import "@/assets/styles/raw/utils/_mixin.scss";
          @import "@/assets/styles/raw/layout/_common.scss";
        `,
      },
    },
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
    },
  },
  lintOnSave: false,
};

