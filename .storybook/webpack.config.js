const path = require('path');

module.exports = async ({ config }) => {
    config.module.rules.push(
        {
            test: /\.(ts|tsx)$/,
            use: ['awesome-typescript-loader'],
            include: [path.resolve(__dirname, '../'), path.resolve(__dirname, './')]
        }
        /* {
            test: /\.scss$/,
            use: ['style-loader', 'css-loader', 'sass-loader'],
            include: [path.resolve(__dirname, '../'), path.resolve(__dirname, './')]
        } */
    );

    config.resolve.extensions.push('.ts', '.tsx');

    return config;
};
