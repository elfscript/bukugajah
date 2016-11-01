const path = require('path')
// const webpack = require('webpack')

module.exports = {
  entry: {
    app: ['webpack-dev-server/client?http://0.0.0.0:3000',
      'webpack/hot/only-dev-server',
      './src/index.jsx',
    ],
  },
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'public/js'),
    publicPath: 'http://localhost:3000/public/js/',
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: ['babel-loader'],
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react'],
        },
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader?modules=true&localIdentName=[name]__[local]___[hash:base64:5]',
      },
    ],
  },
};
