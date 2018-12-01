var path = require('path');
var nodeExternals = require('webpack-node-externals');


module.exports = {
  entry: path.resolve(__dirname, 'Celestial.js'),
  output: {
    path: path.resolve(__dirname),
    filename: 'index.dev.js',
    library: '',
    libraryTarget: 'commonjs',
    pathinfo: true,
  },
  externals: [nodeExternals()],
  optimization: {
    namedModules: true,
    namedChunks: true,
    minimize: false
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/react'],
          plugins: [
            'babel-plugin-transform-class-properties'
          ],

        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
};
