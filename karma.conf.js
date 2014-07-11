module.exports = function(config) {
  config.set({
    frameworks: ['jasmine', 'traceur', 'requirejs'],

    traceurPreprocessor: {
      options: {
        modules: 'amd',
        types: true,
        typeAssertions: true,
        typeAssertionModule: 'assert',
        annotations: true,
        sourceMap: true
        /**
         * Someday blockBinding would be nice, but for now it compiles to nasty
         * ES5 code (everything in a closure)
         */
        // blockBinding: true
      }
    },

    files: [
      'node_modules/traceur/bin/traceur.js',
      'test-main.js',

      {pattern: 'src/**/*.js', included: false},
      {pattern: 'test/**/*', included: false},

      {pattern: 'node_modules/di/src/**/*.js', included: false},
      {pattern: 'node_modules/rtts-assert/src/**/*.js', included: false},
      {pattern: 'node_modules/watchtower/src/**/*.js', included: false},
      {pattern: 'node_modules/expressionist/src/**/*.js', included: false},
      {pattern: 'node_modules/deferred/src/**/*.js', included: false},
      {pattern: 'node_modules/route-recognizer/lib/**/*.js', included: false},
    ],

    reporters: ['story'],

    preprocessors: {
      'src/**/*.js': ['traceur'],
      'test/**/*.js': ['traceur'],
      'node_modules/di/src/**/*.js': ['traceur'],
      'node_modules/rtts-assert/src/**/*.js': ['traceur'],
      'node_modules/watchtower/src/**/*.js': ['traceur'],
      'node_modules/expressionist/src/**/*.js': ['traceur'],
      'node_modules/deferred/src/**/*.js': ['traceur'],
      'node_modules/route-recognizer/lib/**/*.js': ['traceur'],
  },

  sauceLabs: {
      username: 'innitapps',
      accessKey: 'ff7a06d5-2844-4d69-a244-c783894155ed',
      startConnect: true,
      testName: 'innit_core_data'
    },
    customLaunchers: {
      'Chrome_harmony': {
        base: 'Chrome',
        flags: ['--js-flags=--harmony']
      },

      // Sauce Labs browsers
      'SL_Chrome': {
        base: 'SauceLabs',
        browserName: 'chrome'
      },
      'SL_Firefox': {
        base: 'SauceLabs',
        browserName: 'firefox',
        version: '26'
      },
      'SL_Safari': {
        base: 'SauceLabs',
        browserName: 'safari',
        platform: 'OS X 10.9',
        version: '7'
      }
    },


    browsers: ['SL_Chrome'],


    plugins: [
      'karma-*'
      // require('karma-sauce-launcher')
    ]
  });

  if (process.env.TRAVIS) {
    config.sauceLabs.build = 'TRAVIS #' + process.env.TRAVIS_BUILD_NUMBER + ' (' + process.env.TRAVIS_BUILD_ID + ')';
    config.sauceLabs.tunnelIdentifier = process.env.TRAVIS_JOB_NUMBER;
    //
    // process.env.SAUCE_ACCESS_KEY = process.env.SAUCE_ACCESS_KEY.split('').reverse().join('');

    // TODO(vojta): remove once SauceLabs supports websockets.
    // This speeds up the capturing a bit, as browsers don't even try to use websocket.
    config.transports = ['xhr-polling'];
  }
};
