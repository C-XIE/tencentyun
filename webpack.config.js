const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

module.exports = {
    mode: "production", // "production" | "development" | "none"
    entry: "./src/index.js", // string | object | array
    output: {
        path: path.resolve(__dirname, "build"),
        filename: "[name].js",
        publicPath: '/',
        chunkFilename: '[id].chunk.js'
        // library: "MyLibrary", // string,
        // libraryTarget: "umd", // 通用模块定义
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                include: [
                    path.resolve(__dirname, "src")
                ],
                // issuer: { test, include },
                enforce: "pre",
                enforce: "post",
                use: [
                    {
                        loader: "babel-loader",
                        options: {
                            presets: ["env", 'react'],
                            plugins: ["syntax-dynamic-import"]
                        }
                    }
                ]
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader"
                ]
            },
            {
                test: /\.(png|jpe?g|svg)$/i,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: '8192',
                            name: 'imgs/[name].[hash].[ext]',
                            publicPath: '../'
                        }
                    },
                ]
            }
            // {
            //     test: /\.css$/,
            //     use: ['style-loader', 'css-loader']
            // },
            // {
            //     test: /\.css$/,
            //     use: ExtractTextPlugin.extract("style", "css")
            // }
        ]
    },
    performance : {
        hints : false
    },  
    // devtool: 'inline-source-map', // enum
    // context: __dirname,
    // target: "web", // 枚举
    // externals: ["react", /^@angular\//],
    // stats: "errors-only",
    devServer: {
        // proxy: { // proxy URLs to backend development server
        //     '/api': 'http://localhost:3000'
        // // },
        contentBase: path.resolve(__dirname, "public"), // boolean | string | array, static file location
        publicPath: '/'
        // compress: true, // enable gzip compression
        // hotOnly: true,
        // host: 'localhost',
        // port: 7000,
        // index: 'index.html',
        // // inline:true,
        // publicPath: "http://localhost:8080/",
        // historyApiFallback: true, // true for index.html upon 404, object for multiple paths
        // hot: true, // hot module replacement. Depends on HotModuleReplacementPlugin
        // https: false, // true for self-signed, object for cert authority
        // noInfo: true, // only errors & warns on hot reload
        // ...
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "[name].[contenthash:8].css",
            chunkFilename: "[id].css"
        }),
        new HtmlWebpackPlugin({                        //根据模板插入css/js等生成最终HTML
            filename: 'index.html',    //生成的html存放路径，相对于 path
            template: path.join(__dirname ,'/public/index.html'),    //html模板路径
            inject: true,    //允许插件修改哪些内容，包括head与body
            hash: true,    //为静态资源生成hash值
            minify: {    //压缩HTML文件
                removeComments: true,    //移除HTML中的注释
                collapseWhitespace: false,    //删除空白符与换行符,
                minifyJS: true,
                minifyCSS: true,
                minifyURLs: true,
            }
        }),
        // new webpack.NamedModulesPlugin(),
        // new webpack.HotModuleReplacementPlugin(),
    ],
    // cache: false,
}