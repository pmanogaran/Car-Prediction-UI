module.exports = {
  devServer: {
    proxy: {
      "/api": {
        target: "http://192.168.0.234:8080",
        secure: false,
        changeOrigin: true,
        pathRewrite: {
          '^/api': 'http://192.168.0.234:8080/api'
        }
      },
    }
  }
}
