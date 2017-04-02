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
            {test: /\.css$/, use:[
                "style-loader",
                "css-loader"
            ]
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
        ],
    devServer: {
        contentBase:  __dirname + "/public"
    }
};
