const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        app: './src/index.js',
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: '[name].[contenthash:6].js'
    },
    plugins: [new HtmlWebpackPlugin({template: "./src/index.html"})]
};