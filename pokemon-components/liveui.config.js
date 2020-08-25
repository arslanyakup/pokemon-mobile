/**
 * liveui.config.js
 * 
 * https://liveui.composiv.ai/docs/liveui.config
 */


module.exports = {
    hotReloadContext: 'app',
    devPort: 5000,
    microPort: 5001,
    exposes: {
        'customLoader': './app/ui/CustomLoader.js',
        'customTabView': './app/ui/CustomTab',
        'pokeItemList': './app/business/PokeItemList.js',
        'back': './app/svg/Back.js',
        'pokedex': './app/svg/Pokedex.js',
        'pokemon': './app/svg/Pokemon.js',
    },
    shared: [
        'react',
        'react-native',
        'react-native-gesture-handler',
        'react-native-reanimated',
        'react-native-safe-area-context',
        'react-native-svg',
        'theme',
    ],
    externals: {
        "react-native": true,
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx|mjs)$/,
                include: [
                    /app\/*/,
                    /node_modules\/react-native-/,
                ],
                loader: require.resolve('babel-loader'),
            }
        ]
    }
}

