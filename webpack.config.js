'use strict';

const webpack = require('webpack');

module.exports = {
    devtool: 'source-map',
    entry: {
      app: __dirname+'/index.js'
    },
    output: {
        path: __dirname + "/public",
        filename: 'bundle.js'
    },
    devServer: {
        contentBase:  __dirname + "/public"
    },
    module: {
        rules: [
            {test: /\.json?$/,
                use: [
                    "json-loader"
                ]
            },
            {test: /\.js?$/,
                use: [
                    "babel-loader"
                ],
                exclude: /node_modules/
            },
            {
                test: /\.scss$/,
                use: [{
                    loader: "style-loader" // creates style nodes from JS strings
                }, {
                    loader: "css-loader" // translates CSS into CommonJS
                }, {
                    loader: "sass-loader" // compiles Sass to CSS
                }]
            }
        ]
    },
    plugins: [
            new webpack.optimize.CommonsChunkPlugin({
                name: "commons",
                path: __dirname+"public",
                filename: "commons.js",
                minChunks: 2,
            }),
        ]
};
