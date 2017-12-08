'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.welcomeMessage = exports.sendMail = undefined;

var _sendMail = require('./sendMail');

var _sendMail2 = _interopRequireDefault(_sendMail);

var _welcomeMessage = require('./welcomeMessage');

var _welcomeMessage2 = _interopRequireDefault(_welcomeMessage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.sendMail = _sendMail2.default;
exports.welcomeMessage = _welcomeMessage2.default;