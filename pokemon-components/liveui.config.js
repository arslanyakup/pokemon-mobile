/**
 * liveui.config.js
 * 
 * https://liveui.composiv.ai/docs/liveui.config
 */


module.exports = {
    hotReloadContext: 'src',
    devPort: 5000,
    microPort: 5001,
    exposes: {
        'foo': './src/index.js',
        'loader': './src/CustomLoader.js',
    },
    shared: [
        'react',
        'react-native',
        'theme',
    ],
    externals: {
        "react-native": true,
    },
    module: {
        rules: [
            {
                test: /\.js$|jsx/,
                exclude: /node_modules/,
                use: ["babel-loader"],
            },
        ],
    },
}

