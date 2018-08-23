const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    output: {
        filename: 'visualization.js',
        path: path.resolve(__dirname, 'dist')
    },
    mode: 'production',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    cacheDirectory: true,
                }
            }
        ]
    },
    plugins: [
        new CopyWebpackPlugin(['visualization.json'])
    ]
};
