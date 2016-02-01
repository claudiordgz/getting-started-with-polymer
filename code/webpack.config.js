var webpack = require('webpack'),
    path = require('path');

module.exports = {
    debug: true,
    entry: [
        './src/index.js'
    ],
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js',
        publicPath: 'dist/'
    },
    module: {
        loaders: [
            { test: /\.(png|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=100000' },
            { test: "\.jpg$", loader: "file-loader" },
            { test: "\.png$", loader: "url-loader?mimetype=image/png" },
            { test: /\.html$/, loader: "html" },
            { test: /\.css$/, loader: "style!css"},
            { test: /\.scss$/, loaders: ["style", "css", "sass"] }
        ],
        preLoaders: [
            {
                test: /\/components\/.+\.js$/,
                loader: 'polymer-loader?templateExtension=html&styleExtension=css'
            },
        ]
    }
};