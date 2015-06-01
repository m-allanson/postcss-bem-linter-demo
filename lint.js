#!/usr/bin/env node
var fs = require('fs');
var postcss = require('postcss');
var bemLinter = require('postcss-bem-linter');
var logWarnings = require('postcss-log-warnings');
var paths = ['css/componentA.css', 'css/componentB.css'];

paths.forEach(function (file) {
  var css = fs.readFileSync(file, 'utf-8');
  postcss()
    .use(bemLinter())
    .use(logWarnings())
    .process(css, {from: file})
    .then();
});
