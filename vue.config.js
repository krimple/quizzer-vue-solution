module.exports = {
  devServer: {
    port: 4200,
    proxy: {
      '/api/*': {
        target: 'http://localhost:3001',
        secure: false,
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
};