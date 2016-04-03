var path = require('path')

module.exports = {
  context: __dirname + '/src',
  entry: {
    javascript: './components/app.jsx',
    html: './index.html'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        excluede: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        }
      },
      {
        test: /\.html$/,
        loader: "file?name=[name].[ext]",
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  }
}
