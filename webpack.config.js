require('dotenv').config();

const path = require('path');
const webpack = require('webpack');
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin');
// const ReactRefreshPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = {
  // mode: 'production' | 'development' | 'non'
  mode: 'development',
  entry: path.join(__dirname, '/client/src/index.jsx'),
  output: {
    path: path.join(__dirname, '/client/dist'),
    filename: 'bundle.js',
  },
  devtool: 'source-map',
  // module configuration
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /nodeModules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },

  resolve: {
    extensions: ['', '.js', '.jsx'],
    fallback: {
      fs: require.resolve('browserify-fs'),
    },
  },

  plugins: [
    new NodePolyfillPlugin(),
  ],
};

/**
 *
 * NOTE: About React Fast Refresh:
 *
 * You can enable fast-refresh for this project by enabling the
 * commented lines of code in this file, above and in .babelrc
 *
 * This will change the build so that the client is served by
 * webpack-dev-server and, as such, it should not be loaded via
 * the Express server:
 *
 * - The client will be viewable at http://localhost:8080/
 * - All API requests being sent by the client will be
 *   automatically routed to http://localhost:3000
 * - Since API requests are proxied, the server must still be
 *   running for the React app to compile and run correctly.
 *
 * Since that last requirement _may_ be prohibitive to
 * completing the assigned tasks, the fast-refresh
 * option has been disabled by default.
 *
 */
