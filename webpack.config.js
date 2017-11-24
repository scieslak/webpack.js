const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/js/index.js',
  output: {
    path: __dirname + '/dist',
    filename: '[name].[chunkhash].js'
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: "style-loader!css-loader"
      },
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        query: {
          presets: ["es2015"]
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin ({
      title: "Our Upgraded Webpack Project"
    })
  ]
}