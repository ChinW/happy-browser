const path = require('path');
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');

let baseConfig = {
    // target: 'async-node',
    entry: {
        entry: './src/index.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[chunkhash].js',
        publicPath: '/'
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'inline',
            filename: 'inline.js',
            minChunks: Infinity
        }),
        // new webpack.optimize.AggressiveSplittingPlugin({
        //     minSize: 5000,
        //     maxSize: 10000
        // }),
        new webpack.HotModuleReplacementPlugin(), // Enable HMR
        new HtmlWebpackPlugin({
            title: 'Happy Browser',
            filename: 'index.html',
            template: 'assets/index.html',
            inject: true,
            hash: true
        })
    ],
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: "babel-loader"
            },
            {
                test: /\.scss$/,
                loader: "style-loader"
            }
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        port: 8080,
        hot: true,
        publicPath: '/',
        host: "192.168.1.5"
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

module.exports = baseConfig;