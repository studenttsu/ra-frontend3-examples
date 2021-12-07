const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
    // TODO: process.env.NODE_ENV fix
    mode: 'development',
    devtool: isProduction ? false : 'eval-source-map',
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.ts$/,
                use: ['babel-loader', 'ts-loader'],
                exclude: /node_modules/,
            },
        ]
    },
    resolve: {
        extensions: ['.ts', '.js'],
    },
};