var path = require('path');

module.exports = {
  // 入口 main.js
  entry: './src/index.js',
  // 输出
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    loaders: [
      {
        test: /\.scss$/,
        loaders:[
          'style-loader',
          'css-loader',
          'autoprefixer-loader',
          'sass-loader'
        ] 
      },
      {
        test: /\.less/,
        loaders:[
          'style-loader',
          'css-loader',
          'autoprefixer-loader',
          'less-loader'
        ] 
      },
      {
        test: /\.(png|jpg|jpeg)$/,
        //loader: 'url-loader?limit=8192'
        loaders: [
            'file-loader?hash=sha512&digest=hex&name=[hash].[ext]',
            'image-webpack-loader'
        ]
      }
    ]
  }
};
