var webpack = require('webpack');
var ET = require('extract-text-webpack-plugin');//css合并抽离

module.exports = {
  // 入口
  entry: [
    'webpack-dev-server/client?http://localhost', // WebpackDevServer host and port
    'webpack/hot/only-dev-server',
    __dirname + '/src/index.js'
  ],

  // 出口
  output: {
    path: __dirname + '/app',

    filename: 'bundle.js'
  },

  // sourcemap
  devtool: 'source-map',

  // 配置模块
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel'
      },
      {
        test: /\.css$/,
        loader: ET.extract('style','css')
      },
      {
        test: /\.scss$/,
        loader: ET.extract('style', 'css!sass')
      },

      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        loader: 'babel'
      }
    ]
  },


  //plugins定义
  plugins: [
    // new webpack.optimize.UglifyJsPlugin(),//js压缩
    new ET('bundle.css', { //样式单独合并
      allChunks: true
    }),

    new webpack.HotModuleReplacementPlugin(),//代码热替换

    new webpack.NoErrorsPlugin()//允许错误不打断程序

  ]

}
