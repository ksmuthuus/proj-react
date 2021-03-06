const path = require('path')

module.exports = {
  entry:"./playground/01-redux.js",
  output:{
    path: path.join(__dirname, 'public'),
    filename:'bundle.js'
  },
  module:{
    rules:[{
      loader:'babel-loader',
      test:/\.js$/,
      exclude:/node_modules/
  },{
      test:/\.s?css$/,
      use:['style-loader', 'css-loader', 'sass-loader']
    }]
  },
  devtool:'cheap-module-eval-source-map',
  devServer:{
    contentBase:path.join(__dirname,'public'),
    historyApiFallback: true, // true for index.html upon 404, object for multiple paths
    watchContentBase: true,
    compress: true,
    port: 9001
  }
}
