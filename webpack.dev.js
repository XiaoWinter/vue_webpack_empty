const path = require('path');
const merge = require('webpack-merge');
const webpack = require('webpack');
const localhost = require('./util/ip')
const CopyWebpackPlugin = require('copy-webpack-plugin');

const common = require('./webpack.common.js');



module.exports = merge(common,{

  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
        contentBase:[
          path.join(__dirname, "dist"),
          // path.join(__dirname, "src/assets/"),
          path.join(__dirname, "src/view/"),
        ],
        host:localhost(),
        hot: true,
        watchContentBase: true,//其实是它的默认配置了
    },
    module:{
      rules:[
        {
          test: /\.scss$/,
          use:[
            'vue-style-loader',
            'css-loader',
            "sass-loader"
          ]
      },

      ]
    },

  plugins: [
         new webpack.HotModuleReplacementPlugin(),
       ],
});