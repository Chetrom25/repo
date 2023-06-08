const path = require('path')
const Htmlwebpackplugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
    context: path.resolve('src'),
    entry: {
        page4: './page4.js'
    },
    output: {
        filename: 'scripts/[name].[contenthash].js',
        path: path.resolve(__dirname, "dist"),
        assetModuleFilename: 'asserts/[name].[contenthash].js',
    },
    plugins: [
        new CleanWebpackPlugin(),
        new Htmlwebpackplugin({
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
    }
}