const gulp = require('gulp');

require('@babel/register')({
  ignore: [/node_modules/],
});

const build = require('./tasks/build');
const test = require('./tasks/tests/test');
const serve = require('./tasks/serve');
const { stylesLint, scriptsLint } = require('./tasks/lint');

exports.test = test;
exports.build = build;
exports.serve = serve;
exports.lint = gulp.parallel([stylesLint, scriptsLint]);
