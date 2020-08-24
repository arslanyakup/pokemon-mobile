/**
 * liveui.config.js
 * 
 * https://liveui.composiv.ai/docs/liveui.config
 */

module.exports = {
    hotReloadContext: 'src',
    devPort: 5000,
    microPort: 5001,
    remotes: {
        foo: 'http://localhost:5001/foo',
        loader: 'http://localhost:5001/loader',
    },
    shares: {
        'react': require('react'),
        'react-native': require('react-native'),
        'theme': require('./src/styles'),
    }
}
