const path = require('path')
const webpack = require('webpack')
const TARGET = process.env.npm_lifecycle_event;    process.env.BABEL_ENV = TARGET;      

module.exports = {
  entry: {
	  app:[ 'babel-polyfill',
      './src/index.jsx']
  },
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'public/js'),
  },
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
      /*
      {
        test: /\.scss$/,
        loader: 'style-loader!
        sass-loader?modules=true&localIdentName=[name]__[local]___[hash:base64:5]',
      },
      */
    ],
  },
};
