const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: path.resolve(__dirname, '..', 'src/index.jsx'),
    devtool: 'inline-source-map',
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    devServer: {
        hot: true,
        open: true,
        port: 9000
    },
    plugins: [
        new HtmlWebpackPlugin({ template: path.resolve(__dirname, '..', 'src/index.html') }),
        new CleanWebpackPlugin(),
    ],
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                include: [path.resolve(__dirname, '..', 'src')],
                loader: 'babel-loader'
            },
            {
                test: /\.scss$/,
                include: [path.resolve(__dirname, '..', 'src')],
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(png|jpe?g|svg)$/i,
                use: ['file-loader'],
            },
        ]
    }
};