module.exports = {
  publicPath: '/',
  lintOnSave: false,
  productionSourceMap: false,
  runtimeCompiler: true,
  configureWebpack: {
    performance: {
      hints: false
    },
    optimization: {
      splitChunks: {
        minSize: 10000,
        maxSize: 250000,
      }
    }
  },
}
