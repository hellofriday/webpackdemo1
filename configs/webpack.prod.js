const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const { options } = require('less');

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].[hash:8].js',
    publicPath: './'
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      minSize: 0,
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor'
        }
      }
    }
  },
  module: {
    rules: [   
      // css处理     
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath : "../"
            },
          },
          {
            loader: 'css-loader',
            options: {
              minimize: true
            }
          },
          'sprites-loader'
        ]
      },      
      // less处理
      {
        test: /\.less$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath : "../"
            },
          },
          {
            loader: 'css-loader',
            options: {
              minimize: true
            }
          },
          'sprites-loader',
          'less-loader'
        ]
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
    new VueLoaderPlugin(),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: "css/[name]_[contenthash:8].css"
    })
  ]
}