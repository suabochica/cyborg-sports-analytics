const path = require('path');

module.exports = {
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js'
  },
  module: {
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue'
      },
      {
          test: /\.s[a|c]ss$/,
          loader: 'style!css!sass'
      }
    ]
  },

  vue: {
    loaders: {
      scss: 'style!css!sass'
    }
  }
};

