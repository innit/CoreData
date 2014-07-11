var sharedConfig = require('pipe/karma');

module.exports = function(config) {
  sharedConfig(config);
  config.traceurPreprocessor.options.asyncFunctions = true;

  config.set({
    // list of files / patterns to load in the browser
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
      {pattern: 'node_modules/es6-shim/es6-shim.js', included: false}
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
      testName: 'name'
    },

    customLaunchers: {
      sl_chrome_linux: {
        base: 'SauceLabs',
        browserName: 'chrome',
        platform: 'linux'
      },

      sl_ie_9: {
        base: 'SauceLabs',
        browserName: 'internet explorer',
        platform: 'Windows 7',
        version: '9'
      },
      
      sl_android: {
        base: 'SauceLabs',
        browserName: 'android',
        platform: 'linux',
        version: "4.0"
      },
    },

});


};
