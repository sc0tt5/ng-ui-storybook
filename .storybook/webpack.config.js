import path from 'path';
cosole.log('testttttttt');

module.exports = ({ config }) => {
    const ts = {
        test: /\.(ts|tsx)$/,
        use: ['awesome-typescript-loader'],
        include: [path.resolve(__dirname, '../src'), path.resolve(__dirname, './')]
    };
    config.module.rules.push(ts);
    config.resolve.extensions.push('.ts', '.tsx');

    const scss = {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
        include: [path.resolve(__dirname, '../src'), path.resolve(__dirname, './')]
    };
    config.module.rules.push(scss);
    config.resolve.extensions.push('.scss');

    return config;
};
