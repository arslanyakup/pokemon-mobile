/**
 * liveui.config.js
 * 
 * https://liveui.composiv.ai/docs/liveui.config
 */

module.exports = {
    hotReloadContext: 'app',
    devPort: 5000,
    microPort: 5001,
    remotes: {
        customLoader: 'http://localhost:5001/customLoader',
        customTabView: 'http://localhost:5001/customTabView',
        pokeItemList: 'http://localhost:5001/pokeItemList',
        back: 'http://localhost:5001/back',
        pokemon: 'http://localhost:5001/pokemon',
        pokedex: 'http://localhost:5001/pokedex',
    },
    shares: {
        'react': require('react'),
        'react-native': require('react-native'),
        'react-native-gesture-handler': require('react-native-gesture-handler'),
        'react-native-reanimated': require('react-native-reanimated'),
        'react-native-safe-area-context': require('react-native-safe-area-context'),
        'react-native-svg': require('react-native-svg'),
        'theme': require('./app/styles'),
    }
}
