var webpack = require('webpack');

module.exports = {
    devtool: 'source-map',
    entry: {
      index: './index.js'
    },
    output: {
        filename: './public/[name].js'
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
                filename: "./public/commons.js",
                minChunks: 2,
            }),
        ],
    devServer: {
        contentBase:  __dirname + "/public"
    }
};
