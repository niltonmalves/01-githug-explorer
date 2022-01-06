const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')
const isDevelopment = process.env.NODE_ENV !== 'production';

const { template } = require('lodash')

module.exports =  {
    stats: 'errors-warnings',
    mode:  isDevelopment ? 'development': 'production',
    devtool: isDevelopment ? 'eval-source-map': 'source-map',
    entry: path.resolve(__dirname, 'src','index.jsx'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    resolve : {
        extensions: ['.js', '.jsx'],
        fallback: {
            "stream": require.resolve("stream-browserify"),
            "url": require.resolve("url/"),
            "querystring": require.resolve("querystring-es3"),
            "buffer": require.resolve("buffer/"),
            "fs": false,
            "tls": false,
            "net": false,
            "path": false,
            "zlib": false,
            "http": false,
            "https": false,
            "stream": false,
            "crypto": require.resolve("crypto-browserify"),
            "crypto-browserify": require.resolve('crypto-browserify'),
            "path": require.resolve("path-browserify")
          },
          

    },
    devServer: {
        static: path.resolve(__dirname, 'public'),
        hot: true,
        client: {
            overlay: true,
          },
    },
    plugins : [
        isDevelopment && new ReactRefreshWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname,'public', 'index.html' )
        })

    ].filter(Boolean),
    module: {
        rules: [
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        plugins : [
                            isDevelopment && require.resolve('react-refresh/babel')
                        ].filter(Boolean)

                    }
                },
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: ['style-loader','css-loader','sass-loader'],
            }

        ]
    }
}