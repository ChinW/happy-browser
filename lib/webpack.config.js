'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var path = require('path');
var webpack = require('webpack');
var webpackMerge = require('webpack-merge');

var baseConfig = exports.baseConfig = {
    // target: 'async-node',
    entry: {
        entry: './src/index.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },
    plugins: [new webpack.optimize.CommonsChunkPlugin({
        name: 'inline',
        filename: 'inline.js',
        minChunks: Infinity
    }), new webpack.optimize.AggressiveSplittingPlugin({
        minSize: 5000,
        maxSize: 10000
    })],
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        port: 9000,
        hot: true
    }
};

// let targets = ['web', 'webworker', 'node', 'async-node', 'node-webkit', 'electron-main'].map((target) => {
//     let base = webpackMerge(baseConfig, {
//         target: target,
//         output: {
//             path: path.resolve(__dirname, 'dist/' + target),
//             filename: '[name].' + target + '.js'
//         }
//     });
//     return base;
// });