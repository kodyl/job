require('babel/register')({
  stage: 0
});

var autoprefixer = require('autoprefixer-core');
var postcss = require('postcss');

var stilr = require('stilr');
require('../app/app.component.js');

module.exports = function () {
  return postcss(autoprefixer()).process( stilr.render() ).css;
};
