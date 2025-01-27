const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
   mode: 'production',
   entry: './src/index.js',
   output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'app.bundle.js',
      clean: true
   },
   module: {
      rules: [
         {
            test: /\.html$/i,
            use: ["html-loader"]
         },
         {
            test: /\.css$/i,
            use: [
               MiniCssExtractPlugin.loader,
               "css-loader"
            ]
         }
      ]
   },
   plugins: [
      new HtmlWebpackPlugin({
         template: './src/index.html',
         filename: 'index.html'
      }),
      new MiniCssExtractPlugin({
         filename: 'style.css'
      })
   ]
};
