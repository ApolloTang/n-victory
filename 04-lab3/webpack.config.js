var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

module.exports = {
    devtool: 'source-map',
    devServer: {
        colors: true,
        historyApiFallback: true,
        inline: true,
        port: 9999,
        hot: true
    },
    entry:  __dirname + "/app/main.js",
    output: {
        path: __dirname + "/build",
        filename: "bundle.js"
    },
    resolve: {
        // http://stackoverflow.com/questions/27502608/resolving-require-paths-with-webpack
        root: [
            path.resolve(__dirname, 'app')
            // , path.resolve(__dirname, 'node_modules')
        ],
        extension: ['', '.js', '.jsx']
    },
    module: {
        loaders: [
            {
                // To install: npm i json-loader -D
                test: /\.json$/,
                loader: "json"
            },
            {
                // To install: npm i -D babel-core babel-loader babel-preset-es2015 babel-preset-react
                test    : /\.jsx?$/,
                exclude : /node_modules/,
                loader  : 'babel',
                // query   : { presets : ['es2015','react'] }  // required if not using .babalrc
            },
            {
                // To install: npm i -D style-loader css-loader postcss-loader less-loader less
                test: /\.less$/,
                loader: 'style!css?modules!postcss!less'
            }
        ]
    },
    postcss: [
        // To install: npm i -D autoprefixer
        require('autoprefixer')
    ]
    , plugins: [
        // build in plugin, not need to install
          new webpack.BannerPlugin("[github.com/ApolloTang] [tang.apollo@gmail.com]")
        // To install: npm i -D html-webpack-plugin
        , new HtmlWebpackPlugin({ template: __dirname + "/app/index.tmpl.html" })
        // Also see file __dirname/.babalerc
        , new webpack.HotModuleReplacementPlugin()
    ]
}
