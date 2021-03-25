const path = require('path')

module.exports = {
  mode: 'development',
  entry: {
    index: './src/index.js',
    counter: './src/Counter.jsx',
    todo: './src/Todo.jsx'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'public/dist')
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [{
      use: 'babel-loader',
      test: /\.(js|jsx)$/,
      exclude: /node_modules/
    }]
  }
}