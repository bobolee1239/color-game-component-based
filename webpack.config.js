/* file: webpack.config.js */

var path    = require('path');
var webpack = require('webpack');

module.exports = {
    context: path.resolve(__dirname, './src'),
    entry: {
        main: ['babel-polyfill', './main.js']
    },
    output: {
        path    : path.resolve(__dirname, './dist'),
        filename: '[name].bundle.js'
    },
    module:{
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.js$/,
                exclude: [/node_modules/],
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            ['es2015', {module: false}]
                        ],
                        plugins: ['transform-class-properties']
                    }
                }
            }
        ]
    },
    optimization:{
        splitChunks: {
            cacheGroups:{
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendor',
                    chunks: 'all'
                }
            }
        }
    }
};
