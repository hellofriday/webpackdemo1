const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
module.exports = {
  devtool: 'eval-source-map',
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].[hash:8].js',
    publicPath: '/'
  },
  module: {
    rules: [   
      // css处理     
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },      
      // less处理
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader']
      },  
      {
        test: /\.vue$/,
        use: ['vue-loader']
      },          
      // 多媒体
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)$/,
        use: [{
          loader: 'file-loader',
          options: {
            outputPath: 'media',
            name: '[name]_[hash:8].[ext]'
          }
        }]
      },
      // 图片
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/,
        use: [{
          loader: 'file-loader',
          options: {
            outputPath: 'img',
            name: '[name]_[hash:8].[ext]'
          }
        }]
      },
      // 文字
      {
        test: /\.(ttf|eot|woff|woff2|otf)$/,
        use: [{
          loader: 'file-loader',
          options: {
            outputPath: 'font',
            name: '[name]_[hash:8].[ext]'
          }
        }]
      },
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader'
        },
        exclude: '/node_modules/'
      },         
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({template: path.resolve(__dirname, '../src/index.html')}),
    new VueLoaderPlugin()
  ],
  devServer: {
    contentBase: path.join(__dirname, "../dist"),
    port: 9000, //设置端口
    host:'0.0.0.0',
    open: false,
    disableHostCheck: true,
    hot: true 
  }
}
