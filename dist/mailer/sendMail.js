'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = sendMail;

var _bluebird = require('bluebird');

var _bluebird2 = _interopRequireDefault(_bluebird);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function sendMail(_ref) {
  var _this = this;

  var subject = _ref.subject,
      to = _ref.to,
      html = _ref.html;

  return new _bluebird2.default(function (resolve, reject) {

    _this.gmailSend({ subject: subject, to: to, html: html }, function (error, result) {
      if (error) {
        reject(error);
      }
      resolve(result);
    });
  });
}