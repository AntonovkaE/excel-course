const path = require('path')

module.exports = {
    context: path.resolve(_dirname, 'src'),
    mode: 'development',
    entry: '.index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
}