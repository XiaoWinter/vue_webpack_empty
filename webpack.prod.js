const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = merge(common,{
  entry:{
    app:'./src/index.js',
    // clipboard:"clipboard"
  },
  output:{
    filename: "[name].[chunkhash:8].bundle.js", // 每个包包含 chunkhash
    chunkFilename: "[id].[chunkhash:8].chunk.js"
  },
  mode: 'development',

  module:{
      rules:[
            {
          test: /\.scss$/,
          use:[
            {
              loader: MiniCssExtractPlugin.loader,
            },
            'css-loader',
            "sass-loader"
          ]
      },
    ],

  },
  plugins: [
      new MiniCssExtractPlugin({
        filename: 'main.css',
      }),
       ],
});