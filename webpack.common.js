const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');


module.exports = {
  entry: {
    app:'src/index.js',
    
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  resolve: {
    modules: [__dirname, 'node_modules'],
    alias: {
      "@": path.resolve(__dirname, 'src/view/'),
      "components": path.resolve(__dirname, 'src/components')
    },
    extensions: ['.js', '.vue', '.json'],
  },
  module: {
    rules: [
    {
      test: /\.(png|jpg|gif)$/,
      use: [
        {
          loader: 'url-loader',
          options: {
            limit: Infinity
          }
        }
      ]
    },
    {
      test: /\.js$/,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: 'babel-loader',
        
      }
    },
    {
      test: /\.vue$/,
      loader: 'vue-loader'
    }
  
    ]
  },
  plugins: [
      new VueLoaderPlugin(),
          new CleanWebpackPlugin(),
         new HtmlWebpackPlugin({
           template:"src/index.html"
         }),

       ],
};