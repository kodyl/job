require('babel/register')({
  stage: 0
});

var React = require('react');

module.exports = function () {
  return React.renderToString(React.createElement(require('../app/app.component.js')));
};
