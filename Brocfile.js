var filterCoffeeScript = require('broccoli-coffee');
var mergeTrees = require('broccoli-merge-trees');
var pickFiles = require('broccoli-static-compiler');
var less = require('broccoli-less');

var appCompiled = filterCoffeeScript('app');
var stylesCompiled = less('app/styles');

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

var vendorFiles = pickFiles('vendor', {
  srcDir: '/',
  files: ['**/*.js'],
  destDir: 'vendor'
});

module.exports = mergeTrees([appFiles, styleFiles, vendorFiles, 'public']);
