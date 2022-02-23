const { resolve } = require('path')

module.exports = function nuxtKvAnalytics() {

    this.addPlugin({
        ssr: false,
        src: resolve(__dirname, 'plugin.js'),
        fileName: 'kv-analytics.js',
    })
}