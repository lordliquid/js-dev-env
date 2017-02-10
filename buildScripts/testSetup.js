// This file is not transpiled, so must use CommonJS and ES5

// Register babel to tanspile before our tests run.
require('babel-register')();

// Disable webpack features that Mocha doesn't understand.
require.extensions['.css'] = function() {};