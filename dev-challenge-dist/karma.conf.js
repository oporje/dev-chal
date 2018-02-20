var webpackConfig = require('./devserver');


module.exports = function (config) {
    config.set({
        basePath: '',
        frameworks: ['jasmine'],
        files: [
            'es6/app.spec.js'
        ],
        preprocessors: {
            'es6/app.spec.js': ['webpack']
        },
        webpack: webpackConfig,
        reporters: ['mocha'],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        browsers: ['Chrome'],
        singleRun: true,
        concurrency: Infinity,
        failOnEmptyTestSuite: false
    })
}