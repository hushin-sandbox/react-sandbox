import path from 'path';

export const src = path.resolve(__dirname, '../../src');
export const dist = path.resolve(__dirname, '../../dist');

export default {
  entry: [
    `${src}/index.js` // entry point
  ],
  output: {
    path: dist,
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel'  // .js ファイルに対してbabel-loaderでトランスパイルする
      }
    ]
  },
  resolve: {
    extensions: ['', '.js']  // require, import時に拡張子を省略できるようにする
  },
  plugins: []
};
