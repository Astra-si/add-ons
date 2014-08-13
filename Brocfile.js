var filterCoffeeScript = require('broccoli-coffee');
var mergeTrees = require('broccoli-merge-trees');
var pickFiles = require('broccoli-static-compiler');
var less = require('broccoli-less');
var env = require('broccoli-env').getEnv();
var uglifyJavaScript = require('broccoli-uglify-js');

var appCompiled = filterCoffeeScript('app');
var stylesCompiled = less('app/styles');

var filterReact = require('broccoli-react');
var reactFiles = filterReact('app');

var appFiles = pickFiles(appCompiled, {
    srcDir: '/',
    files: ['**/*.js'],
    destDir: 'src'
});

var styleFiles = pickFiles(stylesCompiled, {
    srcDir: '/',
    files: ['**/*.css'],
    destDir: 'css'
});

var ractive = pickFiles('vendor', {
  srcDir: '/',
  files: ['ractive/ractive.min.js'],
  destDir: 'vendor'
});

var react = pickFiles('vendor', {
  srcDir: '/',
  files: ['react/react.js', 'react/JSXTransformer.js'],
  destDir: 'vendor'
});

if (env === 'production') {
  appFiles = uglifyJavaScript(appFiles);
}

module.exports = mergeTrees([appFiles, styleFiles, ractive, reactFiles, react, 'public']);
