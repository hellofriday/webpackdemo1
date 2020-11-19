const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  devtool: 'eval-source-map',
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[hash:8].js',
    publicPath: '/'
  },
  plugins: [
    new HtmlWebpackPlugin()
  ],
  devServer: {
    contentBase: path.join(__dirname, "./dist"),
    port: 9000, //设置端口
    host:'0.0.0.0',
    open: false,
    disableHostCheck: true,
    hot: true //是否开启热更，调试html时候关闭，调试css与js开启
  }
}