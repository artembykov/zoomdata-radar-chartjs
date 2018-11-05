module.exports = {
    output: {
        filename: 'visualization.js',
        path: __dirname
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
    }
};
