var Webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  devtool: 'eval',
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './app/index.js'
  ],
  output: {
    path: path.join( __dirname, '/build' ),
    filename: 'bundle.js',
    publicPath: '/'
  },
  plugins: [
    new Webpack.IgnorePlugin(/vertx/),
    new Webpack.HotModuleReplacementPlugin(),
    new Webpack.NoErrorsPlugin(),
    new ExtractTextPlugin('bundle.css')
  ],
  node: {
    fs: 'empty'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: [ 'react-hot', 'babel?stage=0&cacheDirectory' ],
      include: path.join(__dirname, 'app')
    }, {
      test: /\.css$/,
      loader: ExtractTextPlugin.extract( 'css!autoprefixer' )
    }, {
      test: /\.json$/,
      loader: 'json'
    }, {
      test: /\.(ttf|woff2?|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      loader: 'url?limit=10000'
    }, {
      test: /\.(png|jpg)$/, loader: 'url?limit=10000'
    }, {
      test: /\.(svg)$/, loader: 'file?name=[hash]'
    }]
  }
};
