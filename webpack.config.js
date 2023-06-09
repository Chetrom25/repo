const path = require('path')
const Htmlwebpackplugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
    context: path.resolve('src'),
    entry: {
        page1: './page1.js',
        page4: './page4.js'
    },
    output: {
        filename: 'scripts/[name].[contenthash].js',
        path: path.resolve(__dirname, "dist"),
        assetModuleFilename: 'asserts/[name]111.[contenthash].[ext]',
    },
    plugins: [
        new CleanWebpackPlugin(),
        new Htmlwebpackplugin({
            chunks: [],
            template: './index.html'
        }),
        new Htmlwebpackplugin({
            chunks: ['page1'],
            filename: 'page1.html',
            template: './page1.html'
        }),
        new Htmlwebpackplugin({
            chunks: [],
            filename: 'page2.html',
            template: './page2.html'
        }),
        new Htmlwebpackplugin({
            chunks: [],
            filename: 'page3.html',
            template: './page3.html'
        }),
        new Htmlwebpackplugin({
            chunks: ['page4'],
            filename: 'page4.html',
            template: './page4.html'
        })
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg)$/,
                type: "asset/resource"
            },
        ]
    },
    devServer: {
        port: 8000
    }
}